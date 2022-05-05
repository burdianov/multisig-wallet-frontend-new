export const minimizeAddress = (address, user = '') => {
  if (!address) {
    return '';
  }

  if (user.toLowerCase() === address.toLowerCase()) {
    return 'You';
  }

  return address.slice(0, 6) + '...' + address.slice(-4);
};
