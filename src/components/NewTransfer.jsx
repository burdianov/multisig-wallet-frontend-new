import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Processing from '../utils/svg/processing.svg?component';

import 'react-toastify/dist/ReactToastify.css';

function NewTransfer({ createTransfer, loadingCreate }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    if (!transfer || !transfer.amount || !transfer.to) {
      toast('The fields cannot be empty', {
        autoClose: 1000
      });
      return;
    }

    createTransfer(transfer);
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={submit}
        className='mx-auto mt-16 mb-0 rounded-lg shadow-lg pt-10 pl-10 pr-10 pb-5 max-w-lg border-t-2 border-blue-600'
      >
        <div className='text-center'>
          <h2 className='font-semibold text-lg text-gray-800 mb-2'>
            Create Transfer
          </h2>
        </div>
        <div className='mb-4'>
          <label htmlFor='amount' className='text-gray-700'>
            Amount (Wei)
          </label>
          <input
            id='amount'
            type='text'
            onChange={(e) => updateTransfer(e, 'amount')}
            className='mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>
        <div className='mb-8'>
          <label htmlFor='to' className='text-gray-700'>
            To
          </label>
          <input
            id='to'
            type='text'
            onChange={(e) => updateTransfer(e, 'to')}
            className='mt-1 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />
        </div>

        <div className='w-full px-4 pb-2 m-auto text-gray-500 md:w-1/3'>
          {!loadingCreate ? (
            <button
              type='submit'
              className='px-4 py-2 inline-flex items-center  font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150'
            >
              Submit
            </button>
          ) : (
            <button
              type='button'
              className='px-4 py-2 inline-flex items-center  font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed'
              disabled=''
            >
              <Processing /> Processing...
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewTransfer;
