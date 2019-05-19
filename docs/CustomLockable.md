# Custom Lockable Contract (CustomLockable.sol)

View Source: [contracts/CustomLockable.sol](../contracts/CustomLockable.sol)

**↗ Extends: [CustomAdmin](CustomAdmin.md)**
**↘ Derived Contracts: [TokenBase](TokenBase.md)**

**CustomLockable**

This contract enables xCrypt token admins
to lock tokens on individual wallet basis.
When tokens are locked on specific wallet,
they cannot transfer their balances
until the end of the locking period.
Furthermore, this feature is created to specifically
lock bounty, advisory, and team tokens
for a set period of time.

## Contract Members
**Constants & Variables**

```js
mapping(address => uint256) public lockingList;
bool public canLock;

```

**Events**

```js
event TokenLocked(address indexed _address, uint256  _releaseDate);
event TokenUnlocked(address indexed _address);
event LockingDisabled();
```

## Modifiers

- [revertIfLocked](#revertiflocked)

### revertIfLocked

Reverts this transfer if the wallet is in the locking list.

```js
modifier revertIfLocked(address _wallet) internal
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _wallet | address |  | 

## Functions

- [isLocked(address _wallet)](#islocked)
- [addLock(address _address, uint256 _releaseDate)](#addlock)
- [addManyLocks(address[] _accounts, uint256 _releaseDate)](#addmanylocks)
- [disableLocking()](#disablelocking)

### isLocked

Checks if a wallet is locked for transfers.

```js
function isLocked(address _wallet) public view
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _wallet | address |  | 

### addLock

Adds the specified address to the locking list.

```js
function addLock(address _address, uint256 _releaseDate) external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _address | address | The address to add to the locking list. | 
| _releaseDate | uint256 | The date when the tokens become avaiable for transfer. | 

### addManyLocks

Adds multiple addresses to the locking list.

```js
function addManyLocks(address[] _accounts, uint256 _releaseDate) external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _accounts | address[] | The wallet addresses to add to the locking list. | 
| _releaseDate | uint256 | The date when the tokens become avaiable for transfer. | 

### disableLocking

Since locking feature is intended to be used
only for a short span of time, calling this function
will disable the feature completely.
Once locking feature is disable, it cannot be
truned back on thenceforth.

```js
function disableLocking() external nonpayable onlyAdmin 
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

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
