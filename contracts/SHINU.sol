// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SHINU is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 1_000_000 * 10**18;

    constructor(uint256 initialSupply) ERC20("SHINU token", "SHINU") Ownable(msg.sender) {
        require(initialSupply <= MAX_SUPPLY, "Initial supply exceeds MAX_SUPPLY");
        if (initialSupply > 0) {
            _mint(msg.sender, initialSupply);
        }
    }

    function mint(address to, uint256 amount) external onlyOwner {
        require(amount > 0, "Mint: amount zero");
        require(totalSupply() + amount <= MAX_SUPPLY, "Mint: max supply exceeded");
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) external onlyOwner {
        require(amount > 0, "Burn: amount zero");
        _burn(from, amount);
    }

    function remainingMintable() external view returns (uint256) {
        return MAX_SUPPLY - totalSupply();
    }
}
