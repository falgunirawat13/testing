import React, { useState } from 'react';
import { Table, Button, FormControl } from 'react-bootstrap';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Validation2 = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([
    {
      name: 'John Doe',
      appliedFor: 'Developer',
      scheme: 'Scheme A',
      zone: 'North Zone',
      submittedDate: '2024-10-08',
      submittedBy: 'Admin',
      evaluatorName: 'Evaluator 1',
      supportDocStatus: 'Approved',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
      evaluatorConclusion: '',
    },
    {
      name: 'Jane Smith',
      appliedFor: 'Designer',
      scheme: 'Scheme B',
      zone: 'South Zone',
      submittedDate: '2024-10-07',
      submittedBy: 'Manager',
      evaluatorName: 'Evaluator 2',
      supportDocStatus: 'Pending',
      supportDocRemarks: '',
      signDocStatus: '',
      signDocRemarks: '',
      evaluatorConclusion: 'Good',
    },
    // Add more rows as needed
  ]);

  const [searchInput, setSearchInput] = useState('');

  // Navigate to the View component/page on View click
  const handleViewClick = (index) => {
    navigate(`/view/${index}`); // Navigate to the view page with the row index
  };

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };

  // Filtering logic based on the single search input
  const filteredData = tableData.filter((row) => {
    const values = Object.values(row).join(' ').toLowerCase();
    return values.includes(searchInput.toLowerCase());
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Review And Approval of Empanelment (Accreditation Controller Panel)
      </h1>

      {/* Single Search Bar */}
      <div className="mb-3">
        <FormControl
          type="text"
          placeholder="Search across all fields"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="form-control"
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Applied For
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Scheme
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Zone
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Submitted Date
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Submitted By
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Evaluator Name
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '120px' }}
              >
                Evaluator Conclusion
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Support Doc Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Support Doc Remarks
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Sign Doc Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '130px' }}
              >
                Sign Doc Remarks
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '80px' }}
              >
                View/Edit
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '80px' }}
              >
                Delete
              </th>
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
                <td className="p-2 align-middle" style={{ width: '150px' }}>
                  {row.submittedDate}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.submittedBy}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.evaluatorName}
                </td>
                <td className="p-3 align-middle text-center">
                  {row.evaluatorConclusion}
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
                <td
                  className="p-3 align-middle text-center"
                  style={{ width: '80px' }}
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
                  style={{ width: '80px' }}
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

export default Validation2;
