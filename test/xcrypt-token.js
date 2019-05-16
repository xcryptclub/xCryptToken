const Token = artifacts.require("./xCryptToken.sol");
const BigNumber = require("bignumber.js");
const EVMRevert = require("./helpers/EVMRevert").EVMRevert;
const ether = require("./helpers/ether").ether;
const latestTime = require("./helpers/latestTime").latestTime;
const increaseTime = require("./helpers/increaseTime");
const increaseTimeTo = increaseTime.increaseTimeTo;
const duration = increaseTime.duration;
const million = 1000000;

require("chai")
  .use(require("chai-as-promised"))
  .use(require("chai-bignumber")(BigNumber))
  .should();

contract("xCryptToken", function(accounts) {
  describe("Token Creation Ruleset", () => {
    it("must correctly deploy with correct parameters and state variables.", async () => {
      let token = await Token.new();
      let owner = accounts[0];
      let expectedMaxSupply = 200 * million;
      let expectedInitialSupply = 130 * million;

      assert.equal(await token.owner(), owner);
      assert.equal(await token.released(), false);
      assert.equal((await token.decimals()).toNumber(), 18);
      assert.equal(await token.name(), "xCrypt Token");
      assert.equal(await token.symbol(), "XCT");

      (await token.MAX_SUPPLY()).should.bignumber.equal(
        ether(expectedMaxSupply)
      );
      (await token.totalSupply()).should.bignumber.equal(
        ether(expectedInitialSupply)
      );
      (await token.balanceOf(owner)).should.bignumber.equal(
        ether(expectedInitialSupply)
      );
    });
  });

  describe("Token minting feature ruleset", async () => {
    let token;

    beforeEach(async () => {
      token = await Token.new();
    });

    it("must correctly mint partner and advisor tokens only once.", async () => {
      const totalSupply = await token.totalSupply();
      const partnerAndAdvisorTokenCount = ether(16 * million);

      await token
        .mintPartnerAndAdvisorTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);

      await token.addAdmin(accounts[1]);

      await token.mintPartnerAndAdvisorTokens({
        from: accounts[1]
      });

      const balance = await token.balanceOf(accounts[1]);
      balance.should.be.bignumber.equal(partnerAndAdvisorTokenCount);

      (await token.totalSupply()).should.be.bignumber.equal(
        totalSupply.add(partnerAndAdvisorTokenCount)
      );

      /*-------------------------------------------------------------
       ADDITIONAL CORRECTNESS RULE(S) 
      -------------------------------------------------------------*/

      //additional minting attempts of partner and advisory tokens should be declined.
      await token
        .mintPartnerAndAdvisorTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);
    });

    it("must correctly mint team tokens only once.", async () => {
      const totalSupply = await token.totalSupply();
      const teamTokenCount = ether(30 * million);

      await token
        .mintTeamTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);

      await token.addAdmin(accounts[1]);

      await token.mintTeamTokens({
        from: accounts[1]
      });

      const balance = await token.balanceOf(accounts[1]);
      balance.should.be.bignumber.equal(teamTokenCount);

      (await token.totalSupply()).should.be.bignumber.equal(
        totalSupply.add(teamTokenCount)
      );

      //additional minting attempts of team tokens should be declined.
      await token
        .mintTeamTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);
    });

    it("must correctly mint bonus and reserve tokens only once.", async () => {
      const totalSupply = await token.totalSupply();
      const bonusAndReserveTokenCount = ether(18 * million);

      await token
        .mintBonusAndReservesTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);

      await token.addAdmin(accounts[1]);

      await token.mintBonusAndReservesTokens({
        from: accounts[1]
      });

      const balance = await token.balanceOf(accounts[1]);
      balance.should.be.bignumber.equal(bonusAndReserveTokenCount);

      (await token.totalSupply()).should.be.bignumber.equal(
        totalSupply.add(bonusAndReserveTokenCount)
      );

      //additional minting attempts of bonus and reserve tokens should be declined.
      await token
        .mintBonusAndReservesTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);
    });

    it("must correctly mint bounty tokens only once.", async () => {
      const totalSupply = await token.totalSupply();
      const bountyTokenCount = ether(6 * million);

      await token
        .mintBountyTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);

      await token.addAdmin(accounts[1]);

      await token.mintBountyTokens({
        from: accounts[1]
      });

      const balance = await token.balanceOf(accounts[1]);
      balance.should.be.bignumber.equal(bountyTokenCount);

      (await token.totalSupply()).should.be.bignumber.equal(
        totalSupply.add(bountyTokenCount)
      );

      //additional minting attempts of bounty tokens should be declined.
      await token
        .mintBountyTokens({
          from: accounts[1]
        })
        .should.be.rejectedWith(EVMRevert);
    });
  });
});
