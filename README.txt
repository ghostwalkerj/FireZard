    
███████╗██╗██████╗░███████╗███████╗░█████╗░██████╗░██████╗░
██╔════╝██║██╔══██╗██╔════╝╚════██║██╔══██╗██╔══██╗██╔══██╗
█████╗░░██║██████╔╝█████╗░░░░███╔═╝███████║██████╔╝██║░░██║
██╔══╝░░██║██╔══██╗██╔══╝░░██╔══╝░░██╔══██║██╔══██╗██║░░██║
██║░░░░░██║██║░░██║███████╗███████╗██║░░██║██║░░██║██████╔╝
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░




To deploy on Remix:

Open FireZard.sol and FZ_Dragon.sol

Go to line 634 in FZ_Dragon and replace 0x0000000000000000000000000000000000000000 with your address.

Compile both and Deploy FireZard.sol. Once deployed, call FZ_initialize.

Good to go!



Functions:

buyBackTokensOC - Owner can call the buy back

buyBackSpecificAmount - Owner can call buy back on specific amount (FireZard)

addToMainAdmin (address)    - adds address to admin array (FZ_Dragon)

setNumOfTransactions (uint) - sets how many times the buyBackSpecificAmount transaction is split (FZ_Dragon)



Variables:

uint256 private numTransactions = 4; - sets how many transactoins the buy back is split into

bool public swapAndLiquifyEnabled = false; - Enable/Disable 

bool public buyBackEnabled = true;  - Enable/Disable

uint256 public rewardDivisor = 4;   - changed from marketingDivisor


address admin = 0x0000000000000000000000000000000000000000; - Deployer address goes here and gets Ownership

address[] mainAdmin; - array of admins




Information on Upgrading Contracts via Proxy:
https://docs.openzeppelin.com/learn/upgrading-smart-contracts

Information on Timelock Controller:
https://docs.openzeppelin.com/contracts/4.x/api/governance#TimelockController

Information on Access Conrol and Ownable:
https://docs.openzeppelin.com/contracts/4.x/access-control
