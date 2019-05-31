/*
Copyright 2018 Binod Nirvan @ xCrypt (https://www.xcrypt.club)
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

pragma solidity ^0.4.24;

import "./TokenBase.sol";

///@title xCrypt Token
///@author Binod Nirvan
///@notice XCRYPT is the first crypto ecosystem with a high added value
///with the heart in its exchange: Hybrid, ready for STO
///and for a marketplace made for the ERC721. We created this
///end to end system which includes a Debit Card
///and a Social Media Trading system which is
///an advanced investment solution, which enables trading
///on one account managed by a skillfull and experienced trader
///using his own funds and joint funds invested by other traders
///in his SMT account. This ecosystem is made to be at the same level
///as the world’s big players, and even surpass them, for we are already
///suitable in this field’s future.
contract xCryptToken is TokenBase {
  uint256 public constant ALLOCATION_FOR_PARTNERS_AND_ADVISORS = 16 * MILLION;
  uint256 public constant ALLOCATION_FOR_TEAM = 30 * MILLION;
  uint256 public constant ALLOCATION_FOR_BONUS_AND_RESERVES = 18 * MILLION;
  uint256 public constant ALLOCATION_FOR_BOUNTIES = 6 * MILLION;

  mapping(bytes32 => bool) private mintingList;

  ///@notice Checks if the minting for the supplied key was already performed.
  ///@param _key The key or category name of minting.
  modifier whenNotMinted(string _key) {
    if(mintingList[computeHash(_key)]) {
      revert("Duplicate minting key supplied.");
    }

    _;
  }

  ///@notice Mints the below-mentioned amount of tokens allocated to the partners and advisors.
  function mintPartnerAndAdvisorTokens() external onlyAdmin returns(bool) {
    return mintOnce("partnerAndAdvisor", msg.sender, ALLOCATION_FOR_PARTNERS_AND_ADVISORS);
  }

  ///@notice Mints the below-mentioned amount of tokens allocated to the xCrypt team.
  function mintTeamTokens() external onlyAdmin returns(bool) {
    return mintOnce("team", msg.sender, ALLOCATION_FOR_TEAM);
  }

  ///@notice Mints the below-mentioned amount of tokens allocated to bonus and reserves.
  function mintBonusAndReservesTokens() external onlyAdmin returns(bool) {
    return mintOnce("bonusAndReserves", msg.sender, ALLOCATION_FOR_BONUS_AND_RESERVES);
  }

  ///@notice Mints the below-mentioned amount of tokens allocated to bounties.
  function mintBountyTokens() external onlyAdmin returns(bool) {
    return mintOnce("bounty", msg.sender, ALLOCATION_FOR_BOUNTIES);
  }

  ///@notice Computes keccak256 hash of the supplied value.
  ///@param _key The string value to compute hash from.
  function computeHash(string _key) private pure returns(bytes32) {
    return keccak256(abi.encodePacked(_key));
  }

  ///@notice Mints the tokens only once against the supplied key (category).
  ///@param _key The key or the category of the allocation to mint the tokens for.
  ///@param _to The address receiving the minted tokens.
  ///@param _amount The amount of tokens to mint.
  function mintOnce(string _key, address _to, uint256 _amount) private whenNotPaused whenNotMinted(_key) returns(bool) {
    mintingList[computeHash(_key)] = true;
    return mintTokens(_to, _amount);
  }
}