import  { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { MdOutlineEdit, MdDelete } from 'react-icons/md';
import PaginationComponent from '../Pagination/Pagination';
const userData = [
  {
    name: 'Otto Clay',
    email: 'otto@example.com',
    contact: '123-456-7890',
    address: 'Ap #897-1459 Quam Avenue',
    roles: 'Admin',
  },
  {
    name: 'Connor Johnston',
    email: 'connor@example.com',
    contact: '098-765-4321',
    address: 'Ap #370-4647 Dis Av.',
    roles: 'User',
  },
  {
    name: 'Lacey Hess',
    email: 'lacey@example.com',
    contact: '456-789-0123',
    address: 'Ap #365-8835 Integer St.',
    roles: 'Editor',
  },{
    name: 'Otto Clay',
    email: 'otto@example.com',
    contact: '123-456-7890',
    address: 'Ap #897-1459 Quam Avenue',
    roles: 'Admin',
  },
  {
    name: 'Connor Johnston',
    email: 'connor@example.com',
    contact: '098-765-4321',
    address: 'Ap #370-4647 Dis Av.',
    roles: 'User',
  },
  {
    name: 'Lacey Hess',
    email: 'lacey@example.com',
    contact: '456-789-0123',
    address: 'Ap #365-8835 Integer St.',
    roles: 'Editor',
  }
  // Add more data as needed
];

const TableOne = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    setFilteredUsers(
      userData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [searchTerm]);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;

  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // console.log(indexOfFirstUser, " ",indexOfLastUser," ",currentUsers);
  // Change page

  const paginate = (pageNumber) => {setCurrentPage(pageNumber);}
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container my-4">
      <h5 className="p-2 font-semibold text-black">User Details</h5>
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
            {/* <th className="p-4">Address</th> */}
            <th className="p-4">Roles</th>
            <th className="p-4">Edit</th>
            <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, key) => (
            <tr key={key}>
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.contact}</td>
              {/* <td className="p-4">{user.address}</td> */}
              <td className="p-4">{user.roles}</td>
              <td className="p-4">
                <Button variant="outline-dark" size="sm">
                  <MdOutlineEdit />
                </Button>
              </td>
              <td className="p-4">
                <Button variant="outline-danger" size="sm">
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center '>
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
