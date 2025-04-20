import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateJobPage = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    jobTitle: '',
    description: '',
    location: '',
    skills: '',
    experience: '',
    salary: '',
    deadline: '',
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5172/api/JobPost/${jobId}`);
        const job = res.data;
        setJobData({
          jobTitle: job.jobTitle,
          description: job.description,
          location: job.location,
          skills: job.skills,
          experience: job.experience,
          salary: job.salary,
          deadline: job.deadline.slice(0, 10), // for input[type=date]
        });
      } catch (err) {
        console.error('Error fetching job:', err);
      }
    };
    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5172/api/JobPost/update/${jobId}`, jobData);
      alert('Job updated successfully!');
      navigate('/view-posted-jobs');
    } catch (err) {
      console.error('Error updating job:', err);
      alert('Failed to update job.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Update Job</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {Object.keys(jobData).map((key) => (
          <div key={key} style={styles.formGroup}>
            <label style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
            <input
              type={key === 'deadline' ? 'date' : 'text'}
              name={key}
              value={jobData[key]}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
        ))}
        <button type="submit" style={styles.submitButton}>Update Job</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default UpdateJobPage;
