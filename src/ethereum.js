import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';

import Wallet from './artifacts/contracts/MultisigWallet.sol/MultisigWallet.json';

const getMultisigWallet = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();

      const multisigWallet = new Contract(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        // hardhat
        // '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        // rinkeby
        // '0xd992B20033a6232caAb8049e02DED8b281053d5a',
        Wallet.abi,
        signer
      );
      resolve({ multisigWallet });
      return;
    }
    reject('Install Metamask');
  });

export default getMultisigWallet;
