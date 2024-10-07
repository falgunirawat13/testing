import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Use useParams to get the auditor ID from URL
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QualificationView = () => {
  const { auditorId } = useParams(); // Get auditor ID from route params
  const [auditor, setAuditor] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [isApproveSubmitting, setIsApproveSubmitting] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role');
    setUserRole(role);
    const token = localStorage.getItem('token');

    // Fetch auditor data by ID
    axios.get(`http://localhost:8000/api/auditor-qualifications/${auditorId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        setAuditor(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [auditorId]);

  if (!auditor) {
    return <p className="text-black">Loading...</p>;
  }

  const fileUrl = auditor.selectCV ? `http://localhost:8000/${auditor.selectCV.startsWith('/') ? auditor.selectCV.slice(1) : auditor.selectCV}` : null;

  const handleApprove = () => {
    setIsApproveSubmitting(true);
    const token = localStorage.getItem('token');
    axios.post(`http://localhost:8000/api/auditor-qualifications/approve/${auditor.id}`, {
      approvalStatus: 'Approved'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        toast.success('The auditor has been approved.', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
      })
      .catch(error => {
        toast.error('Failed to approve auditor.', { position: toast.POSITION.TOP_RIGHT, autoClose: 3000 });
      })
      .finally(() => {
        setIsApproveSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer />
      <h1 className="text-3xl font-bold text-black mb-4">Auditor Qualification View</h1>
      <div className="bg-white rounded-lg shadow-md p-6 w-full">
        <h2 className="font-bold text-black text-xl mb-2">General Information</h2>
        <hr className="border border-black mb-2" />

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Name</label>
              <div className="text-black">{auditor.name || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Education</label>
              <div className="text-black">{auditor.education || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Zone</label>
              <div className="text-black">{auditor.zone || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Type</label>
              <div className="text-black">{auditor.auditorSelectType || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">E-mail ID</label>
              <div className="text-black">{auditor.email || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Mobile no.</label>
              <div className="text-black">{auditor.mobileNo || 'N/A'}</div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-black mb-2">Scheme</label>
              <div className="text-black">{auditor.scheme || 'N/A'}</div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-black mb-2">Remarks</h3>
            <div className="text-black">{auditor.remark || 'N/A'}</div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-semibold text-black mb-2">Uploaded Document</h3>
            {fileUrl ? (
              <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {auditor.selectCV}
              </a>
            ) : 'N/A'}
          </div>

          {userRole === 'Zonal Heads' && (
            <Button
              className="bg-[#152238] text-white"
              disabled={isApproveSubmitting}
              onClick={handleApprove}
            >
              {isApproveSubmitting ? 'Submitting...' : 'Approve'}
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default QualificationView;
