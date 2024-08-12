import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const FormElements = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNumber: '',
    address: '',
    department: '',
    role: '',
    isActive: '',
    reportedFor: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    try{
      const resp = await axios.post('http://localhost:8000/create', formData);
      console.log(resp)
      navigate('/tables');
      
      // setFormData({
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   password: '',
      //   contactNumber: '',
      //   address: '',
      //   department: '',
      //   role: '',
      //   isActive: '',
      //   reportedFor: ''
      // });

    }catch(err){
      console.error('Error:', err);

    }

    
  };

  return (
    <>
      <Breadcrumb pageName="User Form" />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black">
          User Details
        </h4>

        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstName">
              <Form.Label className='text-black dark:text-white fw-normal'>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label className='text-black dark:text-white fw-normal'>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Last Name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='text-black dark:text-white fw-normal'>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className='text-black dark:text-white fw-normal'>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactNumber">
            <Form.Label className='text-black dark:text-white fw-normal'>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label className='text-black dark:text-white fw-normal'>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDepartment">
            <Form.Label className='text-black dark:text-white fw-normal'>Department</Form.Label>
            <Form.Select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="guest">guest</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label className='text-black dark:text-white fw-normal'>Role</Form.Label>
            <Form.Select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="guest">guest</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formIsActive">
              <Form.Label className='text-black dark:text-white fw-normal'>Is Active</Form.Label>
              <Form.Select
                name="isActive"
                value={formData.isActive}
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
                value={formData.reportedFor}
                onChange={handleChange}
              >
                <option value="">Select Reason</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                
              </Form.Select>
            </Form.Group>
          </Row>

          <Button className="bg-black mb-4" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormElements;
