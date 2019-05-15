# xCrypt Token (xCryptToken.sol)

View Source: [contracts/xCryptToken.sol](../contracts/xCryptToken.sol)

**↗ Extends: [TokenBase](TokenBase.md)**

**xCryptToken**

XCRYPT is the first crypto ecosystem with a high added value
with the heart in its exchange: Hybrid, ready for STO
and for a marketplace made for the ERC721. We created this
end to end system which includes a Debit Card
and a Social Media Trading system which is
an advanced investment solution, which enables trading
on one account managed by a skillfull and experienced trader
using his own funds and joint funds invested by other traders
in his SMT account. This ecosystem is made to be at the same level
as the world’s big players, and even surpass them, for we are already
suitable in this field’s future.

## Contract Members
**Constants & Variables**

```js
//public members
uint256 public constant ALLOCATION_FOR_PARTNERS_AND_ADVISORS;
uint256 public constant ALLOCATION_FOR_TEAM;
uint256 public constant ALLOCATION_FOR_BONUS_AND_RESERVES;
uint256 public constant ALLOCATION_FOR_BOUNTIES;

//private members
mapping(bytes32 => bool) private mintingList;

```

## Modifiers

- [whenNotMinted](#whennotminted)

### whenNotMinted

Checks if the minting for the supplied key was already performed.

```js
modifier whenNotMinted(string _key) internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _key | string | The key or category name of minting. | 

## Functions

- [mintPartnerAndAdvisorTokens()](#mintpartnerandadvisortokens)
- [mintTeamTokens()](#mintteamtokens)
- [mintBonusAndReservesTokens()](#mintbonusandreservestokens)
- [mintBountyTokens()](#mintbountytokens)
- [computeHash(string _key)](#computehash)
- [mintOnce(string _key, address _to, uint256 _amount)](#mintonce)

### mintPartnerAndAdvisorTokens

Mints the below-mentioned amount of tokens allocated to the partners and advisors.

```js
function mintPartnerAndAdvisorTokens() external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### mintTeamTokens

Mints the below-mentioned amount of tokens allocated to the xCrypt team.

```js
function mintTeamTokens() external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### mintBonusAndReservesTokens

Mints the below-mentioned amount of tokens allocated to bonus and reserves.

```js
function mintBonusAndReservesTokens() external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### mintBountyTokens

Mints the below-mentioned amount of tokens allocated to bounties.

```js
function mintBountyTokens() external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### computeHash

Computes keccak256 hash of the supplied value.

```js
function computeHash(string _key) private pure
returns(bytes32)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _key | string | The string value to compute hash from. | 

### mintOnce

Mints the tokens only once against the supplied key (category).

```js
function mintOnce(string _key, address _to, uint256 _amount) private nonpayable whenNotPaused whenNotMinted 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _key | string | The key or the category of the allocation to mint the tokens for. | 
| _to | address | The address receiving the minted tokens. | 
| _amount | uint256 | The amount of tokens to mint. | 

## Contracts

* [BasicToken](BasicToken.md)
* [BulkTransfer](BulkTransfer.md)
* [BurnableToken](BurnableToken.md)
* [CustomAdmin](CustomAdmin.md)
* [CustomLockable](CustomLockable.md)
* [CustomPausable](CustomPausable.md)
* [ERC20](ERC20.md)
* [ERC20Basic](ERC20Basic.md)
* [ERC20Mock](ERC20Mock.md)
* [ForceEther](ForceEther.md)
* [Migrations](Migrations.md)
* [Ownable](Ownable.md)
* [Reclaimable](Reclaimable.md)
* [SafeERC20](SafeERC20.md)
* [SafeMath](SafeMath.md)
* [StandardToken](StandardToken.md)
* [TokenBase](TokenBase.md)
* [TransferState](TransferState.md)
* [xCryptToken](xCryptToken.md)
