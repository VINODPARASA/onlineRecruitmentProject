import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f4f6f9, #e2ecf7)',
        minHeight: '100vh',
        padding: '40px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '42px',
          marginBottom: '40px',
          marginTop: '20px', 
          color: '#003366',
        }}
      >
        Welcome to SmartRecruit Portal
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          maxWidth: '1300px',
          margin: '0 auto',
        }}
      >
        {/* Box 1 */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid #cce0ff',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#00509e', fontSize: '22px' }}>🔍 Find Jobs</h2>
          <p style={{ marginTop: '10px' }}>
            Explore thousands of job listings based on your skills, location, and preference.
          </p>
        </div>

        {/* Box 2 */}
        <div
          style={{
            backgroundColor: '#e6f7ff',
            border: '1px solid #99ccff',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#006080', fontSize: '22px' }}>🏢 For Employers</h2>
          <p style={{ marginTop: '10px' }}>
            Post jobs, manage candidates, and schedule interviews effortlessly.
          </p>
        </div>

        {/* Box 3 */}
        <div
          style={{
            backgroundColor: '#fff4e6',
            border: '1px solid #ffd699',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#cc6600', fontSize: '22px' }}>📋 Latest Jobs</h2>
          <p style={{ marginTop: '10px' }}>
            Check out the most recent openings and apply with just one click.
          </p>
        </div>

        {/* Box 4 */}
        <div
          style={{
            backgroundColor: '#e9ffe6',
            border: '1px solid #b3e6b3',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#2e7d32', fontSize: '22px' }}>💡 Career Advice</h2>
          <p style={{ marginTop: '10px' }}>
            Get expert tips on resume writing, interviews, and building a strong career path.
          </p>
        </div>

        {/* Box 5 */}
        <div
          style={{
            backgroundColor: '#f0e6ff',
            border: '1px solid #d1b3ff',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#6a1b9a', fontSize: '22px' }}>🧑‍💼 Candidate Profiles</h2>
          <p style={{ marginTop: '10px' }}>
            View or create detailed candidate profiles with qualifications and experience.
          </p>
        </div>

        {/* Box 6 */}
        <div
          style={{
            backgroundColor: '#e6f2ff',
            border: '1px solid #99c2ff',
            borderRadius: '18px',
            padding: '35px',
            minHeight: '200px',
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h2 style={{ color: '#004080', fontSize: '22px' }}>🎯 Interview Tips</h2>
          <p style={{ marginTop: '10px' }}>
            Boost your chances with top interview preparation guides and best practices.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <button
          style={{
            padding: '14px 32px',
            fontSize: '17px',
            backgroundColor: '#00509e',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => alert('Explore Jobs')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
