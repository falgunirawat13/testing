import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; // Import trash icon

const ZonalHeadViewList = () => {
  const [auditors, setAuditors] = useState([]); // Array for all auditor data
  const [userRole, setUserRole] = useState(''); // Store user role

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const role = localStorage.getItem('role');
    setUserRole(role);
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8000/api/auditor-qualifications', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        const data = response.data;
        const sortedData = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setAuditors(sortedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (auditors.length === 0) {
    return <p className="text-black">Loading...</p>;
  }

  // Pass the auditor ID to the view page
  const handleView = (auditorId) => {
    navigate(`/qualificationView/${auditorId}`); // Pass the auditor ID as a route param
  };

  // Handle the delete auditor functionality
  const handleDelete = (auditorId) => {
    const token = localStorage.getItem('token');
    
    // Optional: Show a confirmation dialog before deleting
   

    axios.delete(`http://localhost:8000/api/auditor-qualifications/${auditorId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        toast.success('Auditor deleted successfully');
        // Update the state to remove the deleted auditor
        setAuditors(auditors.filter(auditor => auditor.id !== auditorId));
      })
      .catch(error => {
        toast.error('Error deleting auditor');
        console.error('Error deleting auditor:', error);
      });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl font-bold text-black mb-4">Auditor Qualification View List</h1>
      <div className="overflow-x-auto"> {/* Enable horizontal scrolling if needed */}
        <Table striped bordered hover className="table-auto whitespace-nowrap"> {/* Add `whitespace-nowrap` */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Education</th>
              <th>Zone</th>
              <th>Type</th>
              <th>Email</th>
              <th>Mobile no.</th>
              <th>Scheme</th>
              <th>Remarks</th>
              <th>Uploaded Document</th>
              {userRole === 'Zonal Heads' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {auditors.map(auditor => {
              const fileUrl = auditor.selectCV ? `http://localhost:8000/${auditor.selectCV.startsWith('/') ? auditor.selectCV.slice(1) : auditor.selectCV}` : null;
              return (
                <tr key={auditor.id}>
                  <td>{auditor.name || 'N/A'}</td>
                  <td>{auditor.education || 'N/A'}</td>
                  <td>{auditor.zone || 'N/A'}</td>
                  <td>{auditor.auditorSelectType || 'N/A'}</td>
                  <td>{auditor.email || 'N/A'}</td>
                  <td>{auditor.mobileNo || 'N/A'}</td>
                  <td>{auditor.scheme || 'N/A'}</td>
                  <td>{auditor.remark || 'N/A'}</td>
                  <td>
                    {fileUrl ? (
                      <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        {auditor.selectCV}
                      </a>
                    ) : 'N/A'}
                  </td>
                  {userRole === 'Zonal Heads' && (
                    <td>
                      <Button
                        className="bg-[#152238] text-white"
                        onClick={() => handleView(auditor.id)} // Pass auditor ID
                      >
                        View
                      </Button>
                      <Button variant="link" className='text-black' onClick={() => handleDelete(auditor.id)}> {/* Trash Icon Button */}
                        <FontAwesomeIcon icon={faTrashAlt} /> {/* Trash Icon */}
                      </Button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ZonalHeadViewList;
