import { Form, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="User Form" />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black">
          User Details
        </h4>

        <Form>
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formUsername">
              <Form.Label className='text-black dark:text-white fw-normal'>FirstName</Form.Label>
              <Form.Control type="text" placeholder="Enter FirstName" />
            </Form.Group>

            <Form.Group as={Col} controlId="formLastName">
              <Form.Label className='text-black dark:text-white fw-normal'>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className='text-black dark:text-white fw-normal'>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formpassword">
            <Form.Label className='text-black dark:text-white fw-normal'>password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formContactNumber">
            <Form.Label className='text-black dark:text-white fw-normal'>Contact Number</Form.Label>
            <Form.Control type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter contact number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label className='text-black dark:text-white fw-normal'>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label className='text-black dark:text-white fw-normal'>Department</Form.Label>
            <Form.Select>
              <option value="">Select Department</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label className='text-black dark:text-white fw-normal'>Role</Form.Label>
            <Form.Select>
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </Form.Select>
          </Form.Group>

          <Button className="bg-black mb-4" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormElements;
