import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { MdOutlineEdit, MdInfo, MdDelete } from 'react-icons/md'; // Importing icons
import { useNavigate } from 'react-router-dom';

const Validation1 = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(''); // State for search term
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
      signDocOn: '2024-10-08',
    },
    // Add more sample data if needed
  ]);

  // Navigate to the View component/page on View click
  const handleViewClick = (index) => {
    navigate(`/view/${index}`);
  };

  // Navigate to the Upload Documents component/page
  const handleUploadClick = (index) => {
    navigate(`/upload`); // Assuming `/upload/:index` is the route for uploading documents
  };

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter table data based on search term
  const filteredData = tableData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Request for Auditor Empanelment
      </h1>

      {/* Search Input */}
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Applied For
              </th>
              <th
                className="p-2 text-center align-middle"
                style={{ width: '120px' }}
              >
                Scheme
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Zone
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Submitted Date
              </th>
              <th
                className="p-2 text-center align-middle"
                style={{ width: '100px' }}
              >
                Submitted By
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Evaluator Conclusion
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Receipt of Documents On
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '150px' }}
              >
                Support Document Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '150px' }}
              >
                Sign Document Status
              </th>

              <th
                className="p-3 text-center align-middle"
                style={{ width: '150px' }}
              >
                Sign Documents on
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '150px' }}
              >
                Upload Sign Document
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                View/Edit
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Delete
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '120px' }}
                >
                  {row.name}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '120px' }}
                >
                  {row.appliedFor}
                </td>
                <td
                  className="p-2 align-middle text-center"
                  style={{ width: '120px' }}
                >
                  {row.scheme}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '120px' }}
                >
                  {row.zone}
                </td>
                <td
                  className="p-2 align-middle text-left"
                  style={{ width: '120px' }}
                >
                  {row.submittedDate}
                </td>
                <td
                  className="p-2 align-middle text-center"
                  style={{ width: '100px' }}
                >
                  {row.submittedBy}
                </td>
                <td
                  className="p-2 align-middle text-left"
                  style={{ width: '120px' }}
                >
                  {row.submittedDate}
                </td>
                <td
                  className="p-2 align-middle text-left"
                  style={{ width: '100px' }}
                >
                  {row.submittedDate}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '150px' }}
                >
                  {row.supportDocStatus}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '150px' }}
                >
                  {row.signDocStatus}
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '150px' }}
                >
                  {row.signDocOn}
                </td>
                <td
                  className="p-2 align-middle text-center"
                  style={{ width: '150px' }}
                >
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleUploadClick(index)}
                  >
                    Upload Signed Docs
                  </Button>
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '100px' }}
                >
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => handleViewClick(index)}
                  >
                    <MdOutlineEdit />
                  </Button>
                </td>
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '100px' }}
                >
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

export default Validation1;
