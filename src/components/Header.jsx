import { FaWallet } from 'react-icons/fa';

const Header = ({ approvers, quorum }) => {
  return (
    <header className='flex px-8 py-2 text-gray-800 align-middle flex-row justify-between bg-green-400 shadow-md fixed left-0 top-0 w-screen'>
      <div className='flex flex-row justify-start items-center w-1/6'>
        <FaWallet
          fill='#333333'
          size={24}
          className='hover:-rotate-6 transition hover:cursor-pointer'
        />
        <h2 className='ml-4 text-sm font-bold'>Multisig Dapp</h2>
      </div>
      <div className='ml-4 flex'>
        <p className='text-xs font-thin'>
          <span className='font-normal text-sm'>Approvers:</span>{' '}
          {approvers.join(', ')}
        </p>
      </div>
      <div className='flex w-1/6 justify-end items-center'>
        Quorum: {quorum}
      </div>
    </header>
  );
};

export default Header;
