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
        Wallet.abi,
        signer
      );
      resolve({ multisigWallet });
      return;
    }
    reject('Install Metamask');
  });

export default getMultisigWallet;
