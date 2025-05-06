import React, { useState } from 'react';
import { H1 } from '../components/Typography';
import Button from '../components/ui/Button';

interface User {
  name: string;
}

const TeacherDashboard = () => {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return alert('No file selected');
    const existing = JSON.parse(localStorage.getItem('resources') || '[]') || [];
    const updated = [...existing, { file: file.name, teacher: user.name }];
    localStorage.setItem('resources', JSON.stringify(updated));
    alert('File uploaded successfully');
  };

  return (
    <div className="p-8">
      <H1 className="mb-4">Welcome, {user.name} (Teacher)</H1>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
        className="mb-4"
      />
      <Button onClick={handleUpload} className="ml-4 bg-green-600 text-white hover:bg-green-700">
        Upload
      </Button>
    </div>
  );
};

export default TeacherDashboard;
