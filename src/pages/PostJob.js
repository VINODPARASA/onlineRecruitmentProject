import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PostJob = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    jobTitle: '',
    description: '',
    location: '',
    skills: '',
    experience: '',
    salary: '',
    deadline: '',
    postedDate: new Date().toISOString(),
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5172/api/JobPost/post-job', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('Job posted successfully!');
      navigate('/admin-dashboard');
    } else {
      alert('Failed to post job.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Post a New Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          'jobTitle',
          'description',
          'location',
          'skills',
          'experience',
          'salary',
          'deadline',
        ].map((field) => (
          <input
            key={field}
            type={field === 'deadline' ? 'date' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            style={styles.input}
            required
          />
        ))}
        <button type="submit" style={styles.submitButton}>
          Submit Job
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '75%',
    margin: '60px auto',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '28px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  submitButton: {
    padding: '14px',
    fontSize: '18px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default PostJob;
