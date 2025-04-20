// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const UpdateApplicationStatus = () => {
// //   const [formData, setFormData] = useState({
// //     candidateApplicationId: '',
// //     status: '',
// //     changedBy: '',
// //     notes: ''
// //   });

// //   const [message, setMessage] = useState('');

// //   const handleChange = (e) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setMessage('');
// //     try {
// //       const res = await axios.post('http://localhost:5172/api/applicationstatus/update-status', formData);
// //       setMessage(res.data);
// //       setFormData({ candidateApplicationId: '', status: '', changedBy: '', notes: '' });
// //     } catch (err) {
// //       setMessage(err.response?.data || 'Something went wrong');
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
// //       <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">Update Application Status</h2>

// //       {message && <div className="mb-4 text-center text-green-600">{message}</div>}

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="number"
// //           name="candidateApplicationId"
// //           placeholder="Candidate Application ID"
// //           value={formData.candidateApplicationId}
// //           onChange={handleChange}
// //           required
// //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />

// //         <select
// //           name="status"
// //           value={formData.status}
// //           onChange={handleChange}
// //           required
// //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         >
// //           <option value="">Select Status</option>
// //           <option value="Pending">Pending</option>
// //           <option value="Shortlisted">Shortlisted</option>
// //           <option value="Interview Scheduled">Interview Scheduled</option>
// //           <option value="Rejected">Rejected</option>
// //           <option value="Hired">Hired</option>
// //         </select>

// //         <input
// //           type="text"
// //           name="changedBy"
// //           placeholder="Changed By (Admin Name)"
// //           value={formData.changedBy}
// //           onChange={handleChange}
// //           required
// //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />

// //         <textarea
// //           name="notes"
// //           placeholder="Notes (optional)"
// //           value={formData.notes}
// //           onChange={handleChange}
// //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />

// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
// //         >
// //           Update Status
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default UpdateApplicationStatus;
// import React, { useState } from 'react';
// import axios from 'axios';

// const UpdateApplicationStatus = () => {
//   const [formData, setFormData] = useState({
//     candidateApplicationId: '',
//     status: '',
//     changedBy: '',
//     notes: ''
//   });

//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       const res = await axios.post('http://localhost:5172/api/applicationstatus/update-status', formData);
//       setMessage(res.data);
//       setFormData({ candidateApplicationId: '', status: '', changedBy: '', notes: '' });
//     } catch (err) {
//       setMessage(err.response?.data || 'Something went wrong');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.formContainer}>
//         <h2 style={styles.heading}>Update Application Status</h2>

//         {message && <div style={styles.message}>{message}</div>}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label htmlFor="candidateApplicationId" style={styles.label}>Candidate Application ID</label>
//             <input
//               type="number"
//               name="candidateApplicationId"
//               id="candidateApplicationId"
//               placeholder="Candidate Application ID"
//               value={formData.candidateApplicationId}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label htmlFor="status" style={styles.label}>Status</label>
//             <select
//               name="status"
//               id="status"
//               value={formData.status}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             >
//               <option value="">Select Status</option>
//               <option value="Pending">Pending</option>
//               <option value="Shortlisted">Shortlisted</option>
//               <option value="Interview Scheduled">Interview Scheduled</option>
//               <option value="Rejected">Rejected</option>
//               <option value="Hired">Hired</option>
//             </select>
//           </div>

//           <div style={styles.inputGroup}>
//             <label htmlFor="changedBy" style={styles.label}>Changed By (Admin Name)</label>
//             <input
//               type="text"
//               name="changedBy"
//               id="changedBy"
//               placeholder="Changed By (Admin Name)"
//               value={formData.changedBy}
//               onChange={handleChange}
//               required
//               style={styles.input}
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label htmlFor="notes" style={styles.label}>Notes (optional)</label>
//             <textarea
//               name="notes"
//               id="notes"
//               placeholder="Notes (optional)"
//               value={formData.notes}
//               onChange={handleChange}
//               style={styles.input}
//             />
//           </div>

//           <button type="submit" style={styles.submitButton}>Update Status</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f7fafc',
//     padding: '20px',
//   },
//   formContainer: {
//     width: '75%',
//     maxWidth: '600px',
//     backgroundColor: 'white',
//     padding: '40px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//     border: '1px solid #ddd',
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#2b6cb0',
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   message: {
//     textAlign: 'center',
//     color: '#38a169',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   inputGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     fontSize: '14px',
//     fontWeight: '600',
//     marginBottom: '5px',
//     color: '#333',
//   },
//   input: {
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     outline: 'none',
//     transition: 'border-color 0.3s',
//   },
//   submitButton: {
//     padding: '12px',
//     fontSize: '18px',
//     color: '#fff',
//     backgroundColor: '#3182ce',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
// };

// export default UpdateApplicationStatus;
