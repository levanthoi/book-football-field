import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    toggleOpen,
  };
};

export default useModal;
