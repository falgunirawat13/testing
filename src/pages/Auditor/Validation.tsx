import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Validation = () => {
  const navigate = useNavigate();

  // Table data
  const [tableData, setTableData] = useState([
    {
      name: 'John Doe',
      appliedFor: 'Developer',
      scheme: 'Scheme A',
      zone: 'Zone 1',
      submittedDate: '2024-10-08',
      submittedBy: 'Admin',
      supportDocStatus: 'Approved',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
    },
    {
      name: 'Jane Smith',
      appliedFor: 'Designer',
      scheme: 'Scheme B',
      zone: 'Zone 2',
      submittedDate: '2024-10-07',
      submittedBy: 'Manager',
      supportDocStatus: 'Pending',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
    },
    // Add more rows as needed
  ]);

  // Search input state (single common search bar)
  const [searchTerm, setSearchTerm] = useState('');

  // Handle input change for the common search bar
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Navigate to the View component/page on View click
  const handleViewClick = (index) => {
    navigate(`/view/${index}`); // Navigate to the view page with the row index
  };

  // Function to handle delete click
  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };

  // Filter table data based on the common search term
  const filteredData = tableData.filter((row) => {
    return Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Review And Approval of Empanelment (Accreditation Head)
      </h1>

      {/* Common search bar */}
      <div className="mb-3">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search all columns..."
          className="form-control"
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th className="p-3 text-center align-middle">Name</th>
              <th className="p-3 text-center align-middle">Applied For</th>
              <th className="p-3 text-center align-middle">Scheme</th>
              <th className="p-3 text-center align-middle">Zone</th>
              <th className="p-3 text-center align-middle">Submitted Date</th>
              <th className="p-3 text-center align-middle">Submitted By</th>
              <th className="p-3 text-center align-middle">
                Support Document Status
              </th>
              <th className="p-3 text-center align-middle">
                Support Document Remarks
              </th>
              <th className="p-3 text-center align-middle">
                Sign Document Status
              </th>
              <th className="p-3 text-center align-middle">
                Sign Document Remarks
              </th>
              <th className="p-3 text-center align-middle">View/Edit</th>
              <th className="p-3 text-center align-middle">Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="p-3 align-middle text-center">{row.name}</td>
                <td className="p-3 align-middle text-center">
                  {row.appliedFor}
                </td>
                <td className="p-3 align-middle text-center">{row.scheme}</td>
                <td className="p-3 align-middle text-center">{row.zone}</td>
                <td className="p-3 align-middle text-center">
                  {row.submittedDate}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.submittedBy}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.supportDocStatus}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.supportDocRemarks}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.signDocStatus}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.signDocRemarks}
                </td>
                <td className="p-3 align-middle text-center">
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleViewClick(index)}
                  >
                    <MdOutlineEdit />
                  </Button>
                </td>
                <td className="p-3 align-middle text-center">
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleDeleteClick(index)}
                  >
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Validation;
