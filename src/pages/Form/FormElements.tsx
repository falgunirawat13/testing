import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const FormElements = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Breadcrumb pageName="Form Elements" />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Input Types
        </h4>

        <Form>
          <Row>
            {/* Left Column */}
            <Col md={6}>
              <Form.Group controlId="formGridText" className="mb-3">
                <Form.Label>Text</Form.Label>
                <Form.Control type="text" placeholder="Enter text" />
              </Form.Group>

              <Form.Group controlId="formGridEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" />
                  <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formGridPlaceholder" className="mb-3">
                <Form.Label>Placeholder</Form.Label>
                <Form.Control placeholder="placeholder" />
              </Form.Group>

              <Form.Group controlId="formGridTextarea" className="mb-3">
                <Form.Label>Text Area</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>

            {/* Right Column */}
            <Col md={6}>
              <Form.Group controlId="formGridInputSelect" className="mb-3">
                <Form.Label>Input Select</Form.Label>
                <Form.Control as="select" defaultValue="1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridMultipleSelect" className="mb-3">
                <Form.Label>Multiple Select</Form.Label>
                <Form.Control as="select" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default File Input</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
                {selectedFile && <p className="mt-2">{selectedFile.name}</p>}
              </Form.Group>

              <Form.Group controlId="formGridDate" className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" defaultValue="2024-07-27" />
              </Form.Group>

              <Form.Group controlId="formGridMonth" className="mb-3">
                <Form.Label>Month</Form.Label>
                <Form.Control type="month" />
              </Form.Group>

              <Form.Group controlId="formGridTime" className="mb-3">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" defaultValue="12:30" />
              </Form.Group>
            </Col>
          </Row>

          <Button className='bg-black mb-4' type="submit">
            save Changes
          </Button>
        </Form>
      </div>
    </>
  );
};

export default FormElements;
