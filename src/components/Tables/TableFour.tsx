import { useState, useEffect, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form'; // Import Form for input
import PaginationComponent from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical, BsFileText } from 'react-icons/bs'; // Combined imports from react-icons
import Dropdown from 'react-bootstrap/Dropdown';
import FileDropdown from '../../pages/Auditor/MyAudits';

const TableFour = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null); // State to track selected user for updating status
  const [updatedStatus, setUpdatedStatus] = useState(''); // State to store updated status
  const [file, setFile] = useState(null); // State for storing uploaded file
  const [dropdownId, setDropdownId] = useState<number | null>(null);

  const fileInputRef = useRef(null); // Ref for file input
  const navigate = useNavigate();

  useEffect(() => {
    const staticUsers = [
      {
        id: 1,
        fileNo: '001',
        clientName: 'ABC Corp',
        auditStatus: 'AAF Approved',
        certificationType: 'ISO 9001',
        standards: 'Standard 1',
        auditType: 'Internal',
        zone: 'Zone 1',
        naceCode1: '1234',
        naceCode2: '5678',
        startDate: '2024-01-01',
        closingDate: '2024-01-10',
        modifiedDate: '2024-01-15',
        action: '',
      },
      {
        id: 2,
        fileNo: '002',
        clientName: 'XYZ Ltd',
        auditStatus: 'AAF Incomplete',
        certificationType: 'ISO 14001',
        standards: 'Standard 2',
        auditType: 'External',
        zone: 'Zone 2',
        naceCode1: '2345',
        naceCode2: '6789',
        startDate: '2024-02-01',
        closingDate: '2024-02-15',
        modifiedDate: '2024-02-20',
        action: '',
      },
      // Add more static users as needed
    ];
    setUsers(staticUsers);
    setFilteredUsers(staticUsers);
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        (user.fileNo || '').toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setCurrentPage(1);
  }, [searchTerm, users]);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Utility function to format dates
  const formatDate = (dateString: string | number | Date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (id: number) => {
    setDropdownId(dropdownId === id ? null : id);
  };

  const handleUpdateStatus = () => {
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id
          ? { ...user, auditStatus: updatedStatus }
          : user,
      );
      setUsers(updatedUsers);
      setFilteredUsers(
        updatedUsers.filter((user) =>
          (user.fileNo || '').toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setDropdownId(null); // Close the dropdown after updating
    }
  };

  // Handle file upload
  const handleFileUpload = (event: { target: { files: any[]; }; }) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
 

  const handleCellClick = (user: never) => {
    // Navigate to /fileDropdown and pass the user data in state
    navigate('/fileDropdown', { state: { user } });
  };
  return (
    <div className="container my-4">
      <div className="d-flex mb-3">
        <FormControl
          placeholder="Search by File No."
          className="p-3 me-2 flex-grow-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary">Search</Button>
      </div>
      <div className="table-responsive">
        <Table hover className="table-striped table-borderless">
          <thead className="thead-light">
            <tr>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                File No.
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Client Name
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Audit Status
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Certification Type
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Standards
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Audit Type
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Zone
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                NACE Code1
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                NACE Code2
              </th>
              <th className="p-4 ">
                Upload Documents
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Start Date
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Closing Date
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Modified Date
              </th>
              <th className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, key) => (
              <tr key={key}>
                  <td
                  className="p-4 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCellClick(user)}
                >
                  {user.fileNo}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {user.clientName}
                </td>
                <td className="p-4">
                  <div className="d-flex align-items-center">
                    <span className="me-2">{user.auditStatus}</span>{' '}
                    {/* Adjust spacing as needed */}
                    {/* Single Icon for Dropdown Toggle */}
                    <Dropdown
                      show={dropdownId === user.id}
                      onToggle={() => handleDropdownToggle(user.id)}
                    >
                      <Dropdown.Toggle as="span" bsPrefix="custom-toggle">
                        <BsThreeDotsVertical className="cursor-pointer" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-3 shadow-lg">
                        <Form.Group>
                          <Form.Label className="font-medium text-black">
                            Status
                          </Form.Label>
                          <Form.Control
                            as="select"
                            value={updatedStatus}
                            onChange={(e) => setUpdatedStatus(e.target.value)}
                          >
                            <option>AAF Approved</option>
                            <option>AAF Incomplete</option>
                            {/* Add other statuses if needed */}
                          </Form.Control>
                          <Form.Label className="font-medium text-black mt-2">
                            Status Reason
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={1}
                            value={updatedStatus}
                            onChange={(e) => setUpdatedStatus(e.target.value)}
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-end mt-2">
                          <button
                            className="mr-2 flex justify-center shadow-5 rounded border border-stroke py-1 px-2 font-medium text-black hover:shadow-2 dark:border-strokedark dark:text-white"
                            onClick={() => setDropdownId(null)}
                          >
                            Cancel
                          </button>
                          <button
                            className="flex justify-center rounded bg-[#152238] py-1 px-1 font-medium text-gray hover:bg-opacity-90"
                            onClick={handleUpdateStatus}
                          >
                            Update
                          </button>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>

                <td className="p-4">{user.certificationType}</td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {user.standards}
                </td>

                <td className="p-4">{user.auditType}</td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {user.zone}
                </td>
                <td className="p-4">{user.naceCode1}</td>
                <td className="p-4">{user.naceCode2}</td>
                <td className="p-4">
                  <div className="d-flex align-items-center justify-center mt-2">
                    <BsFileText
                      className="cursor-pointer me-2" // Add margin to the right of the icon
                      style={{ color: 'black' }}
                      title="Upload Document"
                      onClick={() => fileInputRef.current?.click()} // Open file input on icon click
                    />
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }} // Hide the file input
                      onChange={handleFileUpload}
                    />
                  </div>
                </td>

                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {formatDate(user.startDate)}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {formatDate(user.closingDate)}
                </td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis">
                  {formatDate(user.modifiedDate)}
                </td>
                <td className="p-4">
                  {/* Dropdown Menu */}
                  <Dropdown>
                    <Dropdown.Toggle as="span">
                      <BsThreeDotsVertical className="cursor-pointer" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => navigate(`/files/details/${user.id}`)}
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        View details
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-end">
        {/* <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
        /> */}
      </div>
    </div>
  );
};

export default TableFour;
