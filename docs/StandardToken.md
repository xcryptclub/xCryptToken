# Standard ERC20 token
 * (StandardToken.sol)

View Source: [openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol](../openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol)

**↗ Extends: [ERC20](ERC20.md), [BasicToken](BasicToken.md)**
**↘ Derived Contracts: [BulkTransfer](BulkTransfer.md), [ERC20Mock](ERC20Mock.md), [TokenBase](TokenBase.md)**

**StandardToken**

Implementation of the basic standard token.
https://github.com/ethereum/EIPs/issues/20
Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol

## Contract Members
**Constants & Variables**

```js
mapping(address => mapping(address => uint256)) internal allowed;

```

## Functions

- [transferFrom(address _from, address _to, uint256 _value)](#transferfrom)
- [approve(address _spender, uint256 _value)](#approve)
- [allowance(address _owner, address _spender)](#allowance)
- [increaseApproval(address _spender, uint256 _addedValue)](#increaseapproval)
- [decreaseApproval(address _spender, uint256 _subtractedValue)](#decreaseapproval)

### transferFrom

⤾ overrides [ERC20.transferFrom](ERC20.md#transferfrom)

⤿ Overridden Implementation(s): [TokenBase.transferFrom](TokenBase.md#transferfrom)

Transfer tokens from one address to another

```js
function transferFrom(address _from, address _to, uint256 _value) public nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _from | address | address The address which you want to send tokens from | 
| _to | address | address The address which you want to transfer to | 
| _value | uint256 | uint256 the amount of tokens to be transferred | 

### approve

⤾ overrides [ERC20.approve](ERC20.md#approve)

⤿ Overridden Implementation(s): [TokenBase.approve](TokenBase.md#approve)

Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
Beware that changing an allowance with this method brings the risk that someone may use both the old
and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729

```js
function approve(address _spender, uint256 _value) public nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _spender | address | The address which will spend the funds. | 
| _value | uint256 | The amount of tokens to be spent. | 

### allowance

⤾ overrides [ERC20.allowance](ERC20.md#allowance)

Function to check the amount of tokens that an owner allowed to a spender.

```js
function allowance(address _owner, address _spender) public view
returns(uint256)
```

**Returns**

A uint256 specifying the amount of tokens still available for the spender.

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _owner | address | address The address which owns the funds. | 
| _spender | address | address The address which will spend the funds. | 

### increaseApproval

⤿ Overridden Implementation(s): [TokenBase.increaseApproval](TokenBase.md#increaseapproval)

Increase the amount of tokens that an owner allowed to a spender.
approve should be called when allowed[_spender] == 0. To increment
allowed value is better to use this function to avoid 2 calls (and wait until
the first transaction is mined)
From MonolithDAO Token.sol

```js
function increaseApproval(address _spender, uint256 _addedValue) public nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _spender | address | The address which will spend the funds. | 
| _addedValue | uint256 | The amount of tokens to increase the allowance by. | 

### decreaseApproval

⤿ Overridden Implementation(s): [TokenBase.decreaseApproval](TokenBase.md#decreaseapproval)

Decrease the amount of tokens that an owner allowed to a spender.
approve should be called when allowed[_spender] == 0. To decrement
allowed value is better to use this function to avoid 2 calls (and wait until
the first transaction is mined)
From MonolithDAO Token.sol

```js
function decreaseApproval(address _spender, uint256 _subtractedValue) public nonpayable
returns(bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| _spender | address | The address which will spend the funds. | 
| _subtractedValue | uint256 | The amount of tokens to decrease the allowance by. | 

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
