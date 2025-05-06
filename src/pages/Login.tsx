import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { H1, Label, Caption, HelperText } from '../components/Typography';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

const Login = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({ name, role }));
    navigate(`/${role}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <H1 className="text-center mb-6">Login</H1>

        <div className="mb-4">
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your Name"
            aria-required="true" 
          />
          <HelperText>We’ll use this to personalize your experience.</HelperText>
        </div>

        <div className="mb-4">
          <Label htmlFor="role">Select Role</Label>
          <Select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label="Select Role"
            aria-required="true"  
            options={[
              { value: 'student', label: 'Student' },
              { value: 'teacher', label: 'Teacher' },
            ]}
          />
        </div>

        <Button 
          onClick={handleLogin} 
          className="w-full bg-blue-600 text-white hover:bg-blue-700"
          disabled={!name || !role} 
        >
          Login
        </Button>

        <Caption className="mt-4 text-center block">Built with ❤️ using reusable components</Caption>
      </div>
    </div>
  );
};

export default Login;
