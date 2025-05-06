import React, { useState } from 'react';
import { H1, H2, Paragraph } from '../components/Typography';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

interface Resource {
  file: string;
  teacher: string;
}

const StudentDashboard = () => {
 
  const user = JSON.parse(localStorage.getItem('user') || '{}') as { name: string };
  const resources = JSON.parse(localStorage.getItem('resources') || '[]') as Resource[];
  
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmitFeedback = () => {
    alert(`Thanks for your feedback: ${feedback}`);
    setShowModal(false);
    setFeedback('');
  };

  return (
    <div className="p-8">
      <H1 className="mb-4">Welcome, {user.name} (Student)</H1>

      <Button
        onClick={() => setShowModal(true)}
        className="mb-4 bg-blue-600 text-white hover:bg-blue-700"
      >
        Give Feedback
      </Button>

      {showModal && (
        <Modal
          title="Feedback"
          onClose={() => setShowModal(false)}
          isOpen={showModal} 
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4} 
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your feedback..."
          />
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setShowModal(false)} className="bg-gray-300">
              Cancel
            </Button>
            <Button
              onClick={handleSubmitFeedback}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </Button>
          </div>
        </Modal>
      )}

      <H2 className="mt-4 mb-2">Uploaded Resources:</H2>
      <ul className="space-y-2">
        {resources.map((res: Resource, index: number) => (
          <li
            key={index}
            className="p-3 border rounded shadow bg-white flex justify-between items-center"
          >
            <span>{res.file}</span>
            <Paragraph className="text-sm text-gray-500">By: {res.teacher}</Paragraph>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
