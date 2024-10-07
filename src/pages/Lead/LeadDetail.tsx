import React, { useState, useEffect } from 'react';
import { Card, Row, Col, ListGroup, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const LeadDetail = () => {
  const [files, setFiles] = useState([]);
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const fetchLeadDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/lead/leads/1");
        console.log(response.data.lead.companyName)
        setLead(response.data.lead);
      } catch (error) {
        console.error('Error fetching lead details:', error);
      }
    };

    fetchLeadDetails();
  }, []);

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleFileUpload = () => {
    // Implement file upload logic here
    console.log('Files ready for upload:', files);
  };

  if (!lead) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h4>Lead Detail</h4>
      <Row>
        {/* Task Details Column */}
        <Col md={8}>
          <Card className="p-3 mb-4 shadow-sm">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div >
                <h5 className='mb-4 text-black'>Leads Details</h5>
                <Row className="justify-content-between">
                    <Col md={4}>
                <p><strong>Assigned To:</strong><p> Jonathan Andrews</p></p></Col>
                <Col md={4}>
                <p><strong>Assigned To:</strong> <p> Jonathan Andrews</p></p></Col>
                <Col md={4}>
                <p><strong>Assigned To:</strong> <p> Jonathan Andrews</p></p></Col>
                </Row>
              </div>
            </div>
            <div>
              <h6>Overview:</h6>
              <p>
                This is a wider card with supporting text below as a natural lead-in to additional content. 
                This content is a little bit longer. Some quick example text to build on the card title and 
                make up the bulk of the card's content.
              </p>
            </div>
           
          </Card>
        </Col>


        {/* Attachments Column */}
        <Col md={4}>
          <Card className="p-3 mb-4 shadow-sm">
            <h6>Attachments</h6>
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Control
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <Button className="mt-2 bg-black" onClick={handleFileUpload}>
                Upload Files
              </Button>
            </Form.Group>
            <ListGroup>
              {files.length > 0 ? (
                files.map((file, index) => (
                  <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                    <div>
                      <span>{file.name}</span>
                      {/* <div className="text-muted">{(file.size / (1024 * 1024)).toFixed(2)} MB</div> */}
                    </div>
                    <Button variant="link" className="p-0 text-dark">
                      <i className="bi bi-download"></i>
                    </Button>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item>No files uploaded</ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* Comments Section */}
      <Row className="mt-4">
        <Col md={8}>
          <Card className="p-3 shadow-sm bg-custom">
            <h6>Comments</h6>
            <Form.Control as="textarea" rows={3} placeholder="Add a comment..." />
            <Button className="mt-2 bg-black">Post Comment</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default LeadDetail;
