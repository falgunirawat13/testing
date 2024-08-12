import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EditUserTable = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    contactNumber: '',
    department: '',
    role:'',
    isActive:'',
    reportedFor:''
  });

  useEffect(() => {
    // Fetch the user data based on the ID
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${id}`);
       console.log(response)
        setUser(response.data.data);
        // console.log("user",user)
      } catch (err) {
        console.error('Failed to fetch user data.', err);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/users/${id}`, user);
     navigate("/tables") // Redirect to the list or view page after successful update
    } catch (err) {
      console.error('Failed to update user data.', err);
    }
  };

  return (

    <>
    <div className='mb-4'>
        <h4 className='text-black font-semibold ' style={{fontSize:'30px'}}>View/Edit User</h4>
    </div>
    <Form onSubmit={handleSubmit} className='text-black'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            value={user.contactNumber}
            onChange={handleChange}
            placeholder="Enter Contact Number"
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Select
              name="department"
              value={user.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="guest">guest</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Role</Form.Label>
          <Form.Select
              name="role"
              value={user.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="guest">guest</option>
            </Form.Select>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group as={Col} controlId="formIsActive">
              <Form.Label className='text-black dark:text-white fw-normal'>Is Active</Form.Label>
              <Form.Select
                name="isActive"
                value={user.isActive}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formReportedFor">
              <Form.Label className='text-black dark:text-white fw-normal'>Reported For</Form.Label>
              <Form.Select
                name="reportedFor"
                value={user.reportedFor}
                onChange={handleChange}
              >
                <option value="">Select Reason</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                
              </Form.Select>
            </Form.Group>


      </Row>
     <div className='flex justify-end'>
      <Button className="bg-black mt-4 "  type="submit">
        Save Changes
      </Button>
      </div>
    </Form>
    </>
  );
};

export default EditUserTable;
