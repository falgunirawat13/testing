import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import PaginationComponent from '../Pagination/Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TableOne = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users'); // Replace with your API endpoint
        console.log('respone1', response);
        if (Array.isArray(response.data)) {
          setUsers(response.data);
          setFilteredUsers(response.data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        console.error('Failed to fetch users.', err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    // Filter users based on search term
    setFilteredUsers(
      users.filter((user) =>
        (user.firstName || '').toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setCurrentPage(1); // Reset to page 1 after filtering
  }, [searchTerm, users]);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`); // Replace with your API endpoint
      // Update the state to remove the deleted user
      setUsers(users.filter((user) => user.id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
    } catch (err) {
      console.error('Failed to delete user.', err);
    }
  };

  const updateUser = (id) => {
    navigate(`/tables/edit-user/${id}`);
  };

  return (
    <div className="container my-4">
      <div className="d-flex mb-3">
        <FormControl
          placeholder="Search by Name"
          className="p-3 me-2 flex-grow-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary">Search</Button>
      </div>
      <Table responsive="md" hover className="table-striped table-borderless">
        <thead className="thead-light">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Contact No</th>
            <th className="p-4">Roles</th>
            <th className="p-4">Department</th>
            <th className="p-4">Edit</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, key) => (
            <tr key={key}>
              <td className="p-4">{user.firstName || ''}</td>
              <td className="p-4">{user.email || ''}</td>
              <td className="p-4">{user.contactNumber || ''}</td>
              <td className="p-4">{user.department || 'NA'}</td>
              <td className="p-4">{user.roleName || ''}</td>
              <td className="p-4">
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={() => updateUser(user.id)}
                >
                  <MdOutlineEdit />
                </Button>
              </td>
              <td className="p-4">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteUser(user.id)}
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default TableOne;
