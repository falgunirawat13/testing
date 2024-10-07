  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { useParams, useNavigate } from 'react-router-dom';
  import { Form, Row, Col, Button } from 'react-bootstrap';

  const EditLeadTable = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    
    const [lead, setLead] = useState({
      companyName: '',
      SourceOFLead: '',
      LeadType: '',
      LeadStatus: '',
      quotation: '',
      remarks: '',
      assignTo:''
    });
    const [leadStatusOptions, setLeadStatusOptions] = useState([]);
    const [leadTypeOptions, setLeadTypeOptions] = useState([]);
    const [sourceOfLeadOptions, setSourceOfLeadOptions] = useState([]);

    useEffect(() => {
      const fetchOptions = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/lead/seed-lead');
          setLeadStatusOptions(response.data.data.leadStatuses);
          setLeadTypeOptions(response.data.data.leadTypes);
          setSourceOfLeadOptions(response.data.data.sourceOfLeads);
  

          const usersResponse = await axios.get('http://localhost:8000/users');
          setUsers(usersResponse.data);
          console.log(usersResponse.data)
        } catch (error) {
          console.error('Error fetching options:', error);
        }
      };
      fetchOptions();
    }, []);

    useEffect(() => {
      const fetchLead = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/api/lead/leads/${id}`);
          const leadData = response.data.lead;
          console.log(response.data.lead)
          setLead({
            companyName: leadData.companyName,
            SourceOFLead: leadData.sourceOfLeadId,
            LeadType: leadData.leadTypeId,
            LeadStatus: leadData.leadStatusId,
            quotation: leadData.quotation,
            remarks: leadData.remarks,
            assignTo:leadData.assignTo
          });
          console.log(lead)
        
        } catch (error) {
          console.error('Failed to fetch lead data.', error);
        }
      };
      fetchLead();
    }, [id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setLead({
        ...lead,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const updatedLead = {
        companyName: lead.companyName,
        sourceOfLeadId: lead.SourceOFLead, // Use the correct field name for your backend
        leadTypeId: lead.LeadType,         // Use the correct field name for your backend
        leadStatusId: lead.LeadStatus,     // Use the correct field name for your backend
        quotation: lead.quotation,
        remarks: lead.remarks,
        assignTo:lead.assignTo
      };
        try {
          console.log("lead",lead)
          await axios.put(`http://localhost:8000/api/lead/leads/${id}`, updatedLead);
          navigate('/business/lead'); // Redirect to the leads list or another appropriate page
        } catch (error) {
          console.error('Failed to update lead data.', error);
        }
      
    };

    return (
      <>
        <div className='mb-4'>
          <h4 className='text-black font-semibold' style={{ fontSize: '30px' }}>View/Edit Lead</h4>
        </div>
        <Form onSubmit={handleSubmit} className='text-black'>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={lead.companyName}
                  onChange={handleChange}
                  placeholder="Enter Company Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="sourceOfLead">
                <Form.Label>Source Of Lead</Form.Label>
                <Form.Select
                  name="SourceOFLead"
                  value={lead.SourceOFLead}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Source Of Lead</option>
                  {sourceOfLeadOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="leadType">
                <Form.Label>Lead Type</Form.Label>
                <Form.Select
                  name="LeadType"
                  value={lead.LeadType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Lead Type</option>
                  {leadTypeOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="leadStatus">
                <Form.Label>Lead Status</Form.Label>
                <Form.Select
                  name="LeadStatus"
                  value={lead.LeadStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Lead Status</option>
                  {leadStatusOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="quotation">
                <Form.Label>Quotation</Form.Label>
                <Form.Control
                  type="text"
                  name="quotation"
                  value={lead.quotation}
                  onChange={handleChange}
                  placeholder="Enter Quotation"
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="remarks">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  type="text"
                  name="remarks"
                  value={lead.remarks}
                  onChange={handleChange}
                  placeholder="Enter Remarks"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="assignTo">
        <Form.Label>Assign To</Form.Label>
        <Form.Select
          name="assignTo"
          value={lead.assignTo}
          onChange={handleChange}
          required
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
          ))}
        </Form.Select>
      </Form.Group>
    </Col>
  </Row>
          <Button className='bg-black mt-4' type="submit">Save Changes</Button>
        </Form>
      </>
    );
  };

  export default EditLeadTable;
