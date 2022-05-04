function TransferList({ transfers, approveTransfer }) {
  return (
    <div>
      <h2>Transfers</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id.toString()}</td>
              <td>{transfer.amount.toString()}</td>
              <td>{transfer.to}</td>
              <td>
                {transfer.approvals.toString()}{' '}
                <button
                  className='border-[1px] rounded px-2'
                  onClick={() => approveTransfer(transfer.id.toString())}
                >
                  Approve
                </button>
              </td>
              <td>{transfer.sent ? 'yes' : 'no'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferList;
