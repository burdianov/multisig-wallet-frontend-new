import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import getMultisigWallet from './ethereum';

import Loader from './utils/svg/Infinity-1s-200px.svg?component';

import Header from './components/Header';
import NewTransfer from './components/NewTransfer';
import TransferList from './components/TransferList';

function App() {
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [quorum, setQuorum] = useState(undefined);
  const [transfers, setTransfers] = useState([]);
  const [approvals, setApprovals] = useState([]);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const { multisigWallet } = await getMultisigWallet();

      setAccounts(await provider.listAccounts());
      setWallet(multisigWallet);
      setApprovers(await multisigWallet.getApprovers());
      setQuorum((await multisigWallet.quorum()).toString());
      setTransfers(await multisigWallet.getTransfers());
      accounts &&
        setApprovals(await multisigWallet.getApprovalsByApprover(accounts[0]));
    };
    init();
  }, [accounts]);

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

    const approvalsByApprover = await wallet.getApprovalsByApprover(
      accounts[0]
    );
    setApprovals(approvalsByApprover);
  };

  if (
    typeof accounts === 'undefined' ||
    typeof wallet === 'undefined' ||
    approvers.length === 0 ||
    typeof quorum === 'undefined'
  ) {
    return (
      <div className='flex w-screen h-screen absolute left-0 top-0 bg-white justify-center items-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Header approvers={approvers} quorum={quorum} />
      <NewTransfer createTransfer={createTransfer} />
      <TransferList
        transfers={transfers}
        approveTransfer={approveTransfer}
        approvals={approvals}
      />
    </div>
  );
}

export default App;
