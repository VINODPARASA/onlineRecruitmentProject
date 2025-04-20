// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ApplicationStatus = () => {
//   const { applicationId } = useParams();
//   const [statusHistory, setStatusHistory] = useState([]);

//   useEffect(() => {
//     axios.post('http://localhost:5172/api/ApplicationStatusHistory/status-history', parseInt(applicationId), {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(res => setStatusHistory(res.data))
//       .catch(err => console.error(err));
//   }, [applicationId]);

//   return (
   
//     <div style={{ padding: '30px' }}>
//   <h2>Application Status Timeline</h2>

//   {statusHistory === "No status updates yet." ? (
//     <p>No status updates yet.</p>
//   ) : (
//     <div style={{ position: 'relative', marginLeft: '20px', paddingLeft: '20px' }}>
//       {/* Vertical line */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '4px',
//         height: '100%',
//         backgroundColor: '#007bff',
//         borderRadius: '2px'
//       }}></div>

//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {statusHistory.map((status, index) => (
//           <li key={index} style={{ position: 'relative', marginBottom: '30px' }}>
//             {/* Circle dot */}
//             <div style={{
//               position: 'absolute',
//               left: '-12px',
//               top: '5px',
//               width: '12px',
//               height: '12px',
//               backgroundColor: '#007bff',
//               borderRadius: '50%'
//             }}></div>

//             <div style={{
//               backgroundColor: '#f9f9f9',
//               padding: '15px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//             }}>
//               <p><strong>Status:</strong> {status.status}</p>
//               <p><strong>Changed By:</strong> {status.changedBy}</p>
//               <p><strong>Date:</strong> {new Date(status.changedAt).toLocaleString()}</p>
//               {status.notes && <p><strong>Notes:</strong> {status.notes}</p>}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
// </div>

//   );
// };

// export default ApplicationStatus;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApplicationStatus = () => {
  const { applicationId } = useParams();
  const [statusHistory, setStatusHistory] = useState([]);

  const bgColors = [
    '#e3f2fd', // light blue
    '#e8f5e9', // light green
    '#fff3e0', // light orange
    '#fce4ec', // light pink
    '#ede7f6', // light purple
    '#f9fbe7', // light yellow-green
    '#f0f4c3', // lime
    '#e0f7fa'  // light cyan
  ];

  useEffect(() => {
    axios.post('http://localhost:5172/api/ApplicationStatusHistory/status-history', parseInt(applicationId), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => setStatusHistory(res.data))
      .catch(err => console.error(err));
  }, [applicationId]);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#003366' }}>Application Status Timeline</h2>

      {statusHistory === "No status updates yet." ? (
        <p>No status updates yet.</p>
      ) : (
        <div style={{ position: 'relative', marginLeft: '20px', paddingLeft: '20px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            backgroundColor: '#007bff',
            borderRadius: '2px'
          }}></div>

          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {statusHistory.map((status, index) => (
              <li key={index} style={{ position: 'relative', marginBottom: '30px' }}>
                {/* Circle dot */}
                <div style={{
                  position: 'absolute',
                  left: '-12px',
                  top: '5px',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%'
                }}></div>

                <div style={{
                  backgroundColor: bgColors[index % bgColors.length],
                  padding: '15px',
                  borderRadius: '8px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}>
                  <p><strong>Status:</strong> {status.status}</p>
                  <p><strong>Changed By:</strong> {status.changedBy}</p>
                  <p><strong>Date:</strong> {new Date(status.changedAt).toLocaleString()}</p>
                  {status.notes && <p><strong>Notes:</strong> {status.notes}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
