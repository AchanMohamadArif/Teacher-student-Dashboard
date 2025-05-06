import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Feedback Modal"
      >
        <p className="mb-4">This is modal content.</p>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Close
        </button>
      </Modal>
    </>
  );
};
