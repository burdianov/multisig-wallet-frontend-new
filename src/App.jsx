import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import getMultisigWallet from './ethereum';

import Header from './components/Header';
import NewTransfer from './components/NewTransfer';
import TransferList from './components/TransferList';

function App() {
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const { multisigWallet } = await getMultisigWallet();

      setAccounts(await provider.listAccounts());
      setWallet(multisigWallet);
      setApprovers(await multisigWallet.getApprovers());
      setQuorum((await multisigWallet.quorum()).toString());
      setTransfers(await multisigWallet.getTransfers());
    };
    init();
  }, []);

  const createTransfer = async (transfer) => {
    await wallet.createTransfer(transfer.amount, transfer.to, {
      from: accounts[0]
    });

    const transfers = await wallet.getTransfers();
    setTransfers(transfers);
  };

  const approveTransfer = async (transferId) => {
    await wallet.approveTransfer(transferId, { from: accounts[0] });

    const transfers = await wallet.getTransfers();
    setTransfers(transfers);
  };

  if (
    typeof accounts === 'undefined' ||
    typeof wallet === 'undefined' ||
    approvers.length === 0 ||
    typeof quorum === 'undefined'
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Multisig Dapp</h2>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList transfers={transfers} approveTransfer={approveTransfer} />
    </div>
  );
}

export default App;
