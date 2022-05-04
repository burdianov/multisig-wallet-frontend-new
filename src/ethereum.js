import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';

import Wallet from './artifacts/contracts/MultisigWallet.sol/MultisigWallet.json';

const getMultisigWallet = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      // const networkId = await provider.request({ method: 'net_version' });
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const multisigWallet = new Contract(
        '0x5fc8d32690cc91d4c39d9d3abcbd16989f875707',
        Wallet.abi,
        signer
      );
      resolve({ multisigWallet });
      return;
    }
    reject('Install Metamask');
  });

export default getMultisigWallet;
