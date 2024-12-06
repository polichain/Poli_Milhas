export const poliMilhasAbi = [{
    "_format": "hh-sol-artifact-1",
    "contractName": "PoliMilhas",
    "sourceName": "contracts/Counter.sol",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "allowance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
          }
        ],
        "name": "ERC20InsufficientAllowance",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "needed",
            "type": "uint256"
          }
        ],
        "name": "ERC20InsufficientBalance",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidApprover",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidReceiver",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidSender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "ERC20InvalidSpender",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "TokenRedeemed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "TokensSentToContract",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "CreateNewToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "RedeemToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "decimals",
        "outputs": [
          {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "qnt",
            "type": "uint256"
          }
        ],
        "name": "sendToContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "sendTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f506f6c694d696c686173000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f504d00000000000000000000000000000000000000000000000000000000000081525081600390816200008f919062000365565b508060049081620000a1919062000365565b50505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506200044c565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200016d57607f821691505b60208210810362000183576200018262000125565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001ae565b620001f98683620001ae565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000246620002406200023a8462000211565b6200021b565b62000211565b9050919050565b6000819050919050565b620002628362000225565b6200027a62000271826200024d565b848454620001bb565b825550505050565b600090565b6200029162000282565b6200029e81848462000257565b505050565b5b81811015620002c657620002ba60008262000287565b600181019050620002a4565b5050565b601f8211156200031557620002df8162000189565b620002ea846200019e565b81016020851015620002fa578190505b6200031262000309856200019e565b830182620002a3565b50505b505050565b600082821c905092915050565b60006200033a600019846008026200031a565b1980831691505092915050565b600062000355838362000327565b9150826002028217905092915050565b6200037082620000eb565b67ffffffffffffffff8111156200038c576200038b620000f6565b5b62000398825462000154565b620003a5828285620002ca565b600060209050601f831160018114620003dd5760008415620003c8578287015190505b620003d4858262000347565b86555062000444565b601f198416620003ed8662000189565b60005b828110156200041757848901518255600182019150602085019450602081019050620003f0565b8683101562000437578489015162000433601f89168262000327565b8355505b6001600288020188555050505b505050505050565b61168d806200045c6000396000f3fe6080604052600436106100e85760003560e01c806332d2e0fc1161008a57806395d89b411161005957806395d89b41146102e7578063a9059cbb14610312578063d0febe4c1461034f578063dd62ed3e14610359576100e8565b806332d2e0fc1461023a5780636a9643381461026357806370a082311461027f5780638da5cb5b146102bc576100e8565b806318160ddd116100c657806318160ddd1461017e5780631c4b4015146101a957806323b872dd146101d2578063313ce5671461020f576100e8565b806305ab421d146100ed57806306fdde0314610116578063095ea7b314610141575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190611038565b610396565b005b34801561012257600080fd5b5061012b610480565b6040516101389190611108565b60405180910390f35b34801561014d57600080fd5b5061016860048036038101906101639190611038565b610512565b6040516101759190611145565b60405180910390f35b34801561018a57600080fd5b50610193610535565b6040516101a0919061116f565b60405180910390f35b3480156101b557600080fd5b506101d060048036038101906101cb919061118a565b61053f565b005b3480156101de57600080fd5b506101f960048036038101906101f491906111b7565b6105a6565b6040516102069190611145565b60405180910390f35b34801561021b57600080fd5b506102246105d5565b6040516102319190611226565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c919061118a565b6105de565b005b61027d6004803603810190610278919061118a565b61067f565b005b34801561028b57600080fd5b506102a660048036038101906102a19190611241565b610720565b6040516102b3919061116f565b60405180910390f35b3480156102c857600080fd5b506102d1610768565b6040516102de919061127d565b60405180910390f35b3480156102f357600080fd5b506102fc61078e565b6040516103099190611108565b60405180910390f35b34801561031e57600080fd5b5061033960048036038101906103349190611038565b610820565b6040516103469190611145565b60405180910390f35b610357610843565b005b34801561036557600080fd5b50610380600480360381019061037b9190611298565b6108f8565b60405161038d919061116f565b60405180910390f35b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610426576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041d9061134a565b60405180910390fd5b8061043033610720565b1015610471576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610468906113dc565b60405180910390fd5b61047c33838361097f565b5050565b60606003805461048f9061142b565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb9061142b565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b5050505050905090565b60008061051d610a73565b905061052a818585610a7b565b600191505092915050565b6000600254905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059957600080fd5b6105a33082610a8d565b50565b6000806105b1610a73565b90506105be858285610b0f565b6105c985858561097f565b60019150509392505050565b60006012905090565b803373ffffffffffffffffffffffffffffffffffffffff16311015610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f906114a8565b60405180910390fd5b61064333308361097f565b7f8780a66e8d51cfbecce8048aebd3a285b78678edd8eb7411d90cf1eb140e4d5f33826040516106749291906114c8565b60405180910390a150565b803373ffffffffffffffffffffffffffffffffffffffff163110156106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d0906114a8565b60405180910390fd5b6106e433308361097f565b7fce4385affa8ad2cbec45b1660c6f6afcb691bf0a7a73ebda096ee1dfb670fe6f33826040516107159291906114c8565b60405180910390a150565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461079d9061142b565b80601f01602080910402602001604051908101604052809291908181526020018280546107c99061142b565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b5050505050905090565b60008061082b610a73565b905061083881858561097f565b600191505092915050565b64174876e80034101561088b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108829061153d565b60405180910390fd5b600064174876e8003461089e91906115bb565b9050806108a9610535565b10156108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e1906113dc565b60405180910390fd5b6108f530338361097f565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109f15760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016109e8919061127d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a635760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a5a919061127d565b60405180910390fd5b610a6e838383610ba3565b505050565b600033905090565b610a888383836001610dc8565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aff5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610af6919061127d565b60405180910390fd5b610b0b60008383610ba3565b5050565b6000610b1b84846108f8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b9d5781811015610b8d578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b84939291906115ec565b60405180910390fd5b610b9c84848484036000610dc8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bf5578060026000828254610be99190611623565b92505081905550610cc8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c81578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610c78939291906115ec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d115780600260008282540392505081905550610d5e565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610dbb919061116f565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610e3a5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610e31919061127d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610eac5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610ea3919061127d565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610f99578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f90919061116f565b60405180910390a35b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fcf82610fa4565b9050919050565b610fdf81610fc4565b8114610fea57600080fd5b50565b600081359050610ffc81610fd6565b92915050565b6000819050919050565b61101581611002565b811461102057600080fd5b50565b6000813590506110328161100c565b92915050565b6000806040838503121561104f5761104e610f9f565b5b600061105d85828601610fed565b925050602061106e85828601611023565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110b2578082015181840152602081019050611097565b60008484015250505050565b6000601f19601f8301169050919050565b60006110da82611078565b6110e48185611083565b93506110f4818560208601611094565b6110fd816110be565b840191505092915050565b6000602082019050818103600083015261112281846110cf565b905092915050565b60008115159050919050565b61113f8161112a565b82525050565b600060208201905061115a6000830184611136565b92915050565b61116981611002565b82525050565b60006020820190506111846000830184611160565b92915050565b6000602082840312156111a05761119f610f9f565b5b60006111ae84828501611023565b91505092915050565b6000806000606084860312156111d0576111cf610f9f565b5b60006111de86828701610fed565b93505060206111ef86828701610fed565b925050604061120086828701611023565b9150509250925092565b600060ff82169050919050565b6112208161120a565b82525050565b600060208201905061123b6000830184611217565b92915050565b60006020828403121561125757611256610f9f565b5b600061126584828501610fed565b91505092915050565b61127781610fc4565b82525050565b6000602082019050611292600083018461126e565b92915050565b600080604083850312156112af576112ae610f9f565b5b60006112bd85828601610fed565b92505060206112ce85828601610fed565b9150509250929050565b7f4f6e6c7920746865206f776e65722063616e2073656e6420746f6b656e73206660008201527f726f6d2074686520636f6e747261637400000000000000000000000000000000602082015250565b6000611334603083611083565b915061133f826112d8565b604082019050919050565b6000602082019050818103600083015261136381611327565b9050919050565b7f436f6e747261637420646f6573206e6f74206861766520656e6f75676820746f60008201527f6b656e7300000000000000000000000000000000000000000000000000000000602082015250565b60006113c6602483611083565b91506113d18261136a565b604082019050919050565b600060208201905081810360008301526113f5816113b9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061144357607f821691505b602082108103611456576114556113fc565b5b50919050565b7f4e6f7420656e6f75676820546f6b656e73000000000000000000000000000000600082015250565b6000611492601183611083565b915061149d8261145c565b602082019050919050565b600060208201905081810360008301526114c181611485565b9050919050565b60006040820190506114dd600083018561126e565b6114ea6020830184611160565b9392505050565b7f4d696e696d756d20707572636861736520697320313030204777656900000000600082015250565b6000611527601c83611083565b9150611532826114f1565b602082019050919050565b600060208201905081810360008301526115568161151a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c682611002565b91506115d183611002565b9250826115e1576115e061155d565b5b828204905092915050565b6000606082019050611601600083018661126e565b61160e6020830185611160565b61161b6040830184611160565b949350505050565b600061162e82611002565b915061163983611002565b92508282019050808211156116515761165061158c565b5b9291505056fea264697066735822122084b98d2cc3a08d55903b4d1c6c86187c221e8a17ba7e436d447ed0a0f349cfe064736f6c63430008180033",
    "deployedBytecode": "0x6080604052600436106100e85760003560e01c806332d2e0fc1161008a57806395d89b411161005957806395d89b41146102e7578063a9059cbb14610312578063d0febe4c1461034f578063dd62ed3e14610359576100e8565b806332d2e0fc1461023a5780636a9643381461026357806370a082311461027f5780638da5cb5b146102bc576100e8565b806318160ddd116100c657806318160ddd1461017e5780631c4b4015146101a957806323b872dd146101d2578063313ce5671461020f576100e8565b806305ab421d146100ed57806306fdde0314610116578063095ea7b314610141575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190611038565b610396565b005b34801561012257600080fd5b5061012b610480565b6040516101389190611108565b60405180910390f35b34801561014d57600080fd5b5061016860048036038101906101639190611038565b610512565b6040516101759190611145565b60405180910390f35b34801561018a57600080fd5b50610193610535565b6040516101a0919061116f565b60405180910390f35b3480156101b557600080fd5b506101d060048036038101906101cb919061118a565b61053f565b005b3480156101de57600080fd5b506101f960048036038101906101f491906111b7565b6105a6565b6040516102069190611145565b60405180910390f35b34801561021b57600080fd5b506102246105d5565b6040516102319190611226565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c919061118a565b6105de565b005b61027d6004803603810190610278919061118a565b61067f565b005b34801561028b57600080fd5b506102a660048036038101906102a19190611241565b610720565b6040516102b3919061116f565b60405180910390f35b3480156102c857600080fd5b506102d1610768565b6040516102de919061127d565b60405180910390f35b3480156102f357600080fd5b506102fc61078e565b6040516103099190611108565b60405180910390f35b34801561031e57600080fd5b5061033960048036038101906103349190611038565b610820565b6040516103469190611145565b60405180910390f35b610357610843565b005b34801561036557600080fd5b50610380600480360381019061037b9190611298565b6108f8565b60405161038d919061116f565b60405180910390f35b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610426576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161041d9061134a565b60405180910390fd5b8061043033610720565b1015610471576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610468906113dc565b60405180910390fd5b61047c33838361097f565b5050565b60606003805461048f9061142b565b80601f01602080910402602001604051908101604052809291908181526020018280546104bb9061142b565b80156105085780601f106104dd57610100808354040283529160200191610508565b820191906000526020600020905b8154815290600101906020018083116104eb57829003601f168201915b5050505050905090565b60008061051d610a73565b905061052a818585610a7b565b600191505092915050565b6000600254905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461059957600080fd5b6105a33082610a8d565b50565b6000806105b1610a73565b90506105be858285610b0f565b6105c985858561097f565b60019150509392505050565b60006012905090565b803373ffffffffffffffffffffffffffffffffffffffff16311015610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f906114a8565b60405180910390fd5b61064333308361097f565b7f8780a66e8d51cfbecce8048aebd3a285b78678edd8eb7411d90cf1eb140e4d5f33826040516106749291906114c8565b60405180910390a150565b803373ffffffffffffffffffffffffffffffffffffffff163110156106d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d0906114a8565b60405180910390fd5b6106e433308361097f565b7fce4385affa8ad2cbec45b1660c6f6afcb691bf0a7a73ebda096ee1dfb670fe6f33826040516107159291906114c8565b60405180910390a150565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606004805461079d9061142b565b80601f01602080910402602001604051908101604052809291908181526020018280546107c99061142b565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b5050505050905090565b60008061082b610a73565b905061083881858561097f565b600191505092915050565b64174876e80034101561088b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108829061153d565b60405180910390fd5b600064174876e8003461089e91906115bb565b9050806108a9610535565b10156108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e1906113dc565b60405180910390fd5b6108f530338361097f565b50565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109f15760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016109e8919061127d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a635760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610a5a919061127d565b60405180910390fd5b610a6e838383610ba3565b505050565b600033905090565b610a888383836001610dc8565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aff5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610af6919061127d565b60405180910390fd5b610b0b60008383610ba3565b5050565b6000610b1b84846108f8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b9d5781811015610b8d578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b84939291906115ec565b60405180910390fd5b610b9c84848484036000610dc8565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610bf5578060026000828254610be99190611623565b92505081905550610cc8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c81578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401610c78939291906115ec565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610d115780600260008282540392505081905550610d5e565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610dbb919061116f565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610e3a5760006040517fe602df05000000000000000000000000000000000000000000000000000000008152600401610e31919061127d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610eac5760006040517f94280d62000000000000000000000000000000000000000000000000000000008152600401610ea3919061127d565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508015610f99578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610f90919061116f565b60405180910390a35b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fcf82610fa4565b9050919050565b610fdf81610fc4565b8114610fea57600080fd5b50565b600081359050610ffc81610fd6565b92915050565b6000819050919050565b61101581611002565b811461102057600080fd5b50565b6000813590506110328161100c565b92915050565b6000806040838503121561104f5761104e610f9f565b5b600061105d85828601610fed565b925050602061106e85828601611023565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110b2578082015181840152602081019050611097565b60008484015250505050565b6000601f19601f8301169050919050565b60006110da82611078565b6110e48185611083565b93506110f4818560208601611094565b6110fd816110be565b840191505092915050565b6000602082019050818103600083015261112281846110cf565b905092915050565b60008115159050919050565b61113f8161112a565b82525050565b600060208201905061115a6000830184611136565b92915050565b61116981611002565b82525050565b60006020820190506111846000830184611160565b92915050565b6000602082840312156111a05761119f610f9f565b5b60006111ae84828501611023565b91505092915050565b6000806000606084860312156111d0576111cf610f9f565b5b60006111de86828701610fed565b93505060206111ef86828701610fed565b925050604061120086828701611023565b9150509250925092565b600060ff82169050919050565b6112208161120a565b82525050565b600060208201905061123b6000830184611217565b92915050565b60006020828403121561125757611256610f9f565b5b600061126584828501610fed565b91505092915050565b61127781610fc4565b82525050565b6000602082019050611292600083018461126e565b92915050565b600080604083850312156112af576112ae610f9f565b5b60006112bd85828601610fed565b92505060206112ce85828601610fed565b9150509250929050565b7f4f6e6c7920746865206f776e65722063616e2073656e6420746f6b656e73206660008201527f726f6d2074686520636f6e747261637400000000000000000000000000000000602082015250565b6000611334603083611083565b915061133f826112d8565b604082019050919050565b6000602082019050818103600083015261136381611327565b9050919050565b7f436f6e747261637420646f6573206e6f74206861766520656e6f75676820746f60008201527f6b656e7300000000000000000000000000000000000000000000000000000000602082015250565b60006113c6602483611083565b91506113d18261136a565b604082019050919050565b600060208201905081810360008301526113f5816113b9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061144357607f821691505b602082108103611456576114556113fc565b5b50919050565b7f4e6f7420656e6f75676820546f6b656e73000000000000000000000000000000600082015250565b6000611492601183611083565b915061149d8261145c565b602082019050919050565b600060208201905081810360008301526114c181611485565b9050919050565b60006040820190506114dd600083018561126e565b6114ea6020830184611160565b9392505050565b7f4d696e696d756d20707572636861736520697320313030204777656900000000600082015250565b6000611527601c83611083565b9150611532826114f1565b602082019050919050565b600060208201905081810360008301526115568161151a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115c682611002565b91506115d183611002565b9250826115e1576115e061155d565b5b828204905092915050565b6000606082019050611601600083018661126e565b61160e6020830185611160565b61161b6040830184611160565b949350505050565b600061162e82611002565b915061163983611002565b92508282019050808211156116515761165061158c565b5b9291505056fea264697066735822122084b98d2cc3a08d55903b4d1c6c86187c221e8a17ba7e436d447ed0a0f349cfe064736f6c63430008180033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  ] as const