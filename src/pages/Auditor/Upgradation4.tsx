import { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';

const Upgradation4 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tableData, setTableData] = useState([
    {
      regNo: '001',
      auditorName: 'John Doe',
      requestFor: 'Upgrade',
      status: 'Approved',
      zone: 'North Zone',
      scheme: 'Internal',
      submittedBy: 'Admin',
      submittedDate: '2024-01-01',
      modifiedBy: 'Manager',
      modifiedDate: '2024-02-01',
    },
    {
      regNo: '002',
      auditorName: 'Jane Smith',
      requestFor: 'Upgrade',
      status: 'Pending',
      zone: 'South Zone',
      scheme: 'External',
      submittedBy: 'User',
      submittedDate: '2024-03-05',
      modifiedBy: 'Admin',
      modifiedDate: '2024-03-20',
    },
    {
      regNo: '003',
      auditorName: 'Robert Johnson',
      requestFor: 'Registration',
      status: 'Rejected',
      zone: 'East Zone',
      scheme: 'Internal',
      submittedBy: 'Admin',
      submittedDate: '2024-05-10',
      modifiedBy: 'User',
      modifiedDate: '2024-06-01',
    },
  ]);

  // Function to filter the table based on search query
  const filteredData = tableData.filter((item) =>
    Object.values(item).some(
      (val) =>
        typeof val === 'string' &&
        val.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData); // Update the state with filtered data
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-2 mt-4">
        Upgrade Auditor Biodata
      </h1>

      {/* Search Bar */}
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>

      <div style={{ overflowX: 'auto' }}>
        <Table responsive="md" hover bordered className="table-striped">
          <thead className="bg-light">
            <tr>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Registration No.
              </th>
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
                Internal/External
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
                Status
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Registered By/Upgraded By
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Registration Date/Upgradation Date
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Modified By
              </th>
              <th
                className="p-3 text-center align-middle"
                style={{ width: '100px' }}
              >
                Modified Date
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
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="p-3 align-middle text-center">{item.regNo}</td>
                  <td className="p-3 align-middle text-center">
                    {item.auditorName}
                  </td>
                  <td className="p-3 align-middle text-center">
                    {item.scheme}
                  </td>
                  <td className="p-3 align-middle text-center">{item.zone}</td>
                  <td className="p-3 align-middle text-center">
                    {item.status}
                  </td>
                  <td className="p-3 align-middle text-center">
                    {item.submittedBy}
                  </td>
                  <td className="p-3 align-middle text-center">
                    {item.submittedDate}
                  </td>
                  <td className="p-3 align-middle text-center">
                    {item.modifiedBy}
                  </td>
                  <td className="p-3 align-middle text-center">
                    {item.modifiedDate}
                  </td>
                  <td className="p-3 align-middle text-center">
                    <Button variant="outline-dark" size="sm">
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
              ))
            ) : (
              <tr>
                <td colSpan="11" className="text-center">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Upgradation4;
