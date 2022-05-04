import { useState } from 'react';

function NewTransfer({ createTransfer }) {
  const [transfer, setTransfer] = useState(undefined);

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({ ...transfer, [field]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    createTransfer(transfer);
  };

  return (
    <div className='m-4 p-4 border-[1px] rounded'>
      <h2>Create Transfer</h2>
      <form onSubmit={submit}>
        <div>
          <label htmlFor='amount'>Amount</label>
          <input
            className='ml-4 border-[1px] rounded p-2'
            type='text'
            id='amount'
            onChange={(e) => updateTransfer(e, 'amount')}
          />
        </div>
        <div>
          <label htmlFor='to'>To</label>
          <input
            className='ml-4 border-[1px] rounded p-2'
            type='text'
            id='to'
            onChange={(e) => updateTransfer(e, 'to')}
          />
        </div>
        <div>
          <button className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded active:bg-green-400 transition hover:text-white'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewTransfer;
