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
        '0xd992B20033a6232caAb8049e02DED8b281053d5a',
        Wallet.abi,
        signer
      );
      resolve({ multisigWallet });
      return;
    }
    reject('Install Metamask');
  });

export default getMultisigWallet;
