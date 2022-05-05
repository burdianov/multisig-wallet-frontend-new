function TransferList({ transfers, approveTransfer, approvals }) {
  return (
    <div className='container mx-auto px-4 sm:px-8 max-w-4xl'>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
          <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
            <h2 className='pl-5 font-medium text-lg mt-2'>Transfers</h2>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='pl-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    Amount
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    To
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    Approvals
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    Action
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium'
                  >
                    Sent
                  </th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr key={transfer.id} className='text-gray-500'>
                    <td className='pl-5 py-2 border-b border-gray-200 bg-white text-sm'>
                      <div className='flex items-center'>
                        <div className=''>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {transfer.id.toString()}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {transfer.amount.toString()}
                      </p>
                    </td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {transfer.to}
                      </p>
                    </td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {transfer.approvals.toString()}{' '}
                      </p>
                    </td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>
                      <button
                        disabled={approvals && approvals[transfer.id]}
                        onClick={() => approveTransfer(transfer.id.toString())}
                        className='disabled:bg-gray-300 rounded-lg text-[16px] px-2 py-1 border-[1px] hover:bg-gray-800 hover:text-gray-100 disabled:text-gray-100 transition'
                      >
                        Approve
                      </button>
                    </td>
                    <td className='px-3 py-2 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>
                        {transfer.sent ? 'Yes' : 'No'}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferList;
