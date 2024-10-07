import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';
import { Form } from 'react-bootstrap';

const TableFive = () => {
  const [searchValues, setSearchValues] = useState({
    name: '',
    auditorSelectType: '',
    email: '',
    password: '',
    createdAt: '',
    createdBy: '',
    approvalStatus: '',
   
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auditor-qualifications')
      .then((response) => {
        const sortedData = response.data.sort((a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        setUsers(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setCurrentPage(1);
  };

  const handleSelectUser = (user) => {
    if (user.approvalStatus === 'Approved') {
      const token = localStorage.getItem('token');

      axios
        .put(`http://localhost:8000/api/auditor-qualifications/${user.id}`, {
          approvalStatus: 'Approved',
          name: user.name,
          email: user.email,
          auditorSelectType: user.auditorSelectType,
          scheme: user.scheme,
          mobileNo: user.mobileNo,
          password: user.password,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          navigate('/auditorInformation', { state: { user: response.data } });
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('authToken');
            navigate('/login');
          }
        });
    } else {
      console.log('User not approved:', user.name);
    }
  };

  const filteredUsers = users.filter((user) =>
  Object.keys(searchValues).every((key) => {
    const value = key === 'createdAt' ? new Date(user[key]).toLocaleDateString() : user[key];
    const searchValue = searchValues[key].toLowerCase();
    return (
      searchValues[key] === '' ||
      (typeof value === 'string' && value.toLowerCase().includes(searchValue))
    );
  }),
);

// Inside the return statement for the table header
{Object.keys(searchValues).map((key, index) => (
  <th className="p-3 whitespace-nowrap" key={index}>
    {key.charAt(0).toUpperCase() + key.slice(1)}
    <FormControl
      name={key}
      value={searchValues[key]}
      onChange={handleSearchChange}
      placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)}${key === 'createdAt' ? ' (MM/DD/YYYY)' : ''}`}
      className="mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      style={{ minWidth: '70px' }} 
    />
  </th>
))}


  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="my-4">
      <div className="table-responsive">
        <Table hover className="table-striped table-borderless">
          <thead className="thead-light">
            <tr>
              {Object.keys(searchValues).map((key, index) => (
                <th className="p-3 whitespace-nowrap" key={index}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  <FormControl
                    name={key}
                    value={searchValues[key]}
                    onChange={handleSearchChange}
                    placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    className="mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ minWidth: '70px' }} 
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td className="p-3 whitespace-nowrap">{user.name || 'N/A'}</td>
                  <td className="p-3 whitespace-nowrap">{user.auditorSelectType || 'N/A'}</td>
                  <td className="p-3 whitespace-nowrap">{user.email || 'N/A'}</td>
                  <td className="p-3 whitespace-nowrap">{user.password || 'N/A'}</td>
                  <td className="p-3 whitespace-nowrap">
                    {new Date(user.createdAt).toLocaleDateString() || 'N/A'}
                  </td>
                  <td className="p-3 whitespace-nowrap">{user.createdBy || 'N/A'}</td>
                  <td
                    className="p-3 whitespace-nowrap"
                    onClick={() => handleSelectUser(user)}
                    style={{ cursor: 'pointer' }}
                  >
                    {user.approvalStatus || 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <Pagination className="justify-content-center mt-4">
        <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
};

export default TableFive;
