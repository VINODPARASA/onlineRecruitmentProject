// import React, { useState, useEffect } from 'react';

// const ScheduleInterviewForm = ({ applicationId, onClose }) => {
//     const [interviewers, setInterviewers] = useState([]);
//     const [formData, setFormData] = useState({
//       candidateApplicationId: applicationId,
//       scheduledAt: '',
//       mode: '',
//       locationOrLink: '',
//       interviewerId: '',
//       status: 'Scheduled',
//     });
  
//     useEffect(() => {
//       // Fetch Interviewers for dropdown
//       fetch('http://localhost:5172/api/interviewers')
//         .then(res => res.json())
//         .then(data => setInterviewers(data));
//     }, []);
  
//     const handleChange = e => {
//       const { name, value } = e.target;
//       setFormData(prev => ({ ...prev, [name]: value }));
//     };
  
//     const handleSubmit = async () => {
//       await fetch('http://localhost:5172/api/interviews', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
  
//       alert('Interview scheduled successfully');
//       onClose(); // close form
//     };
  
//     return (
//       <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
//         <h3>Schedule Interview</h3>
//         <input type="datetime-local" name="scheduledAt" onChange={handleChange} />
//         <input type="text" name="mode" placeholder="Mode (e.g., Zoom, In-person)" onChange={handleChange} />
//         <input type="text" name="locationOrLink" placeholder="Location or Link" onChange={handleChange} />
//         <select name="interviewerId" onChange={handleChange}>
//           <option value="">Select Interviewer</option>
//           {interviewers.map(i => (
//             <option key={i.id} value={i.id}>{i.fullName}</option>
//           ))}
//         </select>
//         <button onClick={handleSubmit}>Confirm</button>
//       </div>
//     );
//   };

//   export default ScheduleInterviewForm;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const ScheduleInterviewForm = ({ onClose }) => {
//   const { applicationId } = useParams(); // candidateApplicationId from URL

//   const [interviewers, setInterviewers] = useState([]);
//   const [formData, setFormData] = useState({
//     candidateApplicationId: '', // will be set in useEffect
//     scheduledAt: '',
//     mode: '',
//     locationOrLink: '',
//     interviewerId: '',
//     status: '',
//   });

//   useEffect(() => {
//     // Set applicationId from URL into formData
//     setFormData(prev => ({ ...prev, candidateApplicationId: parseInt(applicationId) }));

//     // Fetch Interviewers for dropdown
//     fetch('http://localhost:5172/api/interviewers')
//       .then(res => res.json())
//       .then(data => setInterviewers(data));
//   }, [applicationId]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     await fetch('http://localhost:5172/api/interviews', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData)
//     });

//     alert('Interview scheduled successfully');
//     if (onClose) onClose(); // Optional close if passed
//   };

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px', maxWidth: '400px' }}>
//       <h3>Schedule Interview</h3>

//       <label>Date & Time:</label>
//       <input type="datetime-local" name="scheduledAt" onChange={handleChange} />

//       <label>Mode:</label>
//       <input type="text" name="mode" placeholder="Mode (e.g., Zoom, In-person)" onChange={handleChange} />

//       <label>Location or Link:</label>
//       <input type="text" name="locationOrLink" placeholder="Location or Link" onChange={handleChange} />

//       <label>Select Interviewer:</label>
//       <select name="interviewerId" onChange={handleChange}>
//         <option value="">Select Interviewer</option>
//         {interviewers.map(i => (
//           <option key={i.id} value={i.id}>{i.fullName}</option>
//         ))}
//       </select>

//       <label>Status:</label>
//       <input type="text" name="status" placeholder="Status (e.g., Scheduled)" onChange={handleChange} />

//       <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Confirm</button>
//     </div>
//   );
// };

// export default ScheduleInterviewForm;

import React, { useState, useEffect ,useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../Context/AdminContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const ScheduleInterviewForm = ({ onClose }) => {
  const { applicationId } = useParams();
  const { adminId, setAdminId } = useContext(AdminContext); // candidateApplicationId from URL
  const navigate = useNavigate();

  const [interviewers, setInterviewers] = useState([]);
  const [formData, setFormData] = useState({
    candidateApplicationId: '', // will be set in useEffect
    scheduledAt: '',
    mode: '',
    locationOrLink: '',
    interviewerId: '',
    status: '',
  });

  useEffect(() => {
    // Set applicationId from URL into formData
    setFormData(prev => ({ ...prev, candidateApplicationId: parseInt(applicationId) }));

    // Fetch Interviewers for dropdown
    fetch('http://localhost:5172/api/interviewers')
      .then(res => res.json())
      .then(data => setInterviewers(data));
  }, [applicationId]);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "scheduledAt" && value) {
      // Append ":00" to the datetime value
      setFormData(prev => ({ ...prev, [name]: value + ":00" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // const handleSubmit = async () => {
  //   console.log(formData.scheduledAt);
  //   console.log(formData.mode);
  //   console.log(formData.locationOrLink);
  //   console.log(formData.interviewerId);
  //   console.log(formData.status);
  //   console.log(formData.candidateApplicationId);
  //   if (!formData.scheduledAt || !formData.mode || !formData.locationOrLink || !formData.interviewerId || !formData.status || !formData.candidateApplicationId) {
  //     alert('Please fill all fields.');
  //     return;
  //   }
  //   await fetch('http://localhost:5172/api/Interviewers', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData)
  //   });

  //   alert('Interview scheduled successfully');
  //   if (onClose) onClose(); // Optional close if passed
  // };
  const handleSubmit = async () => {
    console.log(formData);
  
    if (
      !formData.scheduledAt ||
      !formData.mode ||
      !formData.locationOrLink ||
      !formData.interviewerId ||
      !formData.status ||
      !formData.candidateApplicationId
    ) {
      alert('Please fill all fields.');
      return;
    }
  
    try {
      // 1. Create Interview
      const response = await fetch('http://localhost:5172/api/Interviewers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to schedule interview');
      }
  
      alert('Interview scheduled successfully!');
  
      // 2. Update Status (after interview is created)
      await axios.post('http://localhost:5172/api/ApplicationStatusHistory/update-status', {
        candidateApplicationId: formData.candidateApplicationId,
        status: formData.status, // Or use a specific one like "Interview Scheduled"
        notes: 'Interview has been scheduled.',
        changedBy: adminId, // Make sure `adminId` is available in this component
      });
  
      alert('Status updated successfully!');
      if (onClose) onClose(); // Close modal or form
      navigate('/view-applications'); // Navigate if needed
  
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h3>Schedule Interview</h3>

        <div style={styles.inputGroup}>
          <label>Date & Time:</label>
          <input
            type="datetime-local"
            name="scheduledAt"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Mode:</label>
          <input
            type="text"
            name="mode"
            placeholder="Mode (e.g., Zoom, In-person)"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Location or Link:</label>
          <input
            type="text"
            name="locationOrLink"
            placeholder="Location or Link"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Select Interviewer:</label>
          <select
            name="interviewerId"
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Interviewer</option>
            {interviewers.map(i => (
              <option key={i.id} value={i.id}>{i.fullName}</option>
            ))}
          </select>
        </div>

        <div style={styles.inputGroup}>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            placeholder="Status (e.g., Scheduled)"
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <button onClick={handleSubmit} style={styles.button}>Confirm</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '75%', // 3/4th of the page
    maxWidth: '800px', // Maximum width for large screens
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
};

export default ScheduleInterviewForm;
