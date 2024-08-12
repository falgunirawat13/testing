import {Table, Container, Row, Col, Form, Button } from 'react-bootstrap';

const QuotationForm = () => {
    return (
        <Container>
            
                <h1 className='pb-4 text-black font-bold ' style={{fontSize:'2rem'}}>Quotation Information</h1>

                <h5 className="text-black  pb-4"  style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                        General Information
                    </h5>
            <Form className='text-black font-bold'>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="quotationNo">
                            <Form.Label>Quotation No</Form.Label>
                            <Form.Control type="text" placeholder="IRQS/QT-00035" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="clientName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control type="text" placeholder="IRQS" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="revisionNumber">
                            <Form.Label>Revision Number</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="standards">
                            <Form.Label>Standards</Form.Label>
                            <Form.Control type="text" placeholder="BRC FOOD" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="certificationType">
                            <Form.Label>Certification Type</Form.Label>
                            <Form.Control as="select">
                                <option>Certification</option>
                                <option>Recertification</option>
                                <option>Surveillance</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="surveillanceType">
                            <Form.Label>Surveillance Type</Form.Label>
                            <Form.Control as="select">
                                <option>12 Months</option>
                                <option>24 Months</option>
                                <option>36 Months</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="requestedScope">
                            <Form.Label>Requested Scope</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="businessActivity">
                            <Form.Label>Business Activity</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Col>
                </Row>
                <h5 className="text-black  pb-4"  style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                    Mandays Information
                </h5>
                <Table bordered >
                    <thead>
                        <tr>
                            <th>Standard</th>
                            <th>Accreditation Provided</th>
                            <th>Total Stage1 OnSite Mandays</th>
                            <th>Total Stage2 OnSite Mandays</th>
                            <th>Sur.1 OnSite Mandays</th>
                            <th>Sur.2 OnSite Mandays</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BRC FOOD</td>
                            <td>IATF</td>
                            <td>0.85</td>
                            <td>1.99</td>
                            <td>0.85</td>
                            <td>1.99</td>
                        </tr>
                    </tbody>
                </Table>

                <h5 className="text-black pb-4" style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                    Payment Information
                </h5>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="applicationFees">
                            <Form.Label>Application Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="accreditationFees">
                            <Form.Label>Accreditation Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="surveillanceAudit1Fees">
                            <Form.Label>Surveillance Audit #1 Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="surveillanceAudit2Fees">
                            <Form.Label>Surveillance Audit #2 Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="surveillanceAudit3Fees">
                            <Form.Label>Surveillance Audit #3 Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="surveillanceAudit4Fees">
                            <Form.Label>Surveillance Audit #4 Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="stage1AuditFees">
                            <Form.Label>Stage 1 Audit Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="stage2AuditFees">
                            <Form.Label>Stage 2 Audit Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="totalFees">
                            <Form.Label>Total Fees</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="currencyType">
                            <Form.Label>Currency Type</Form.Label>
                            <Form.Control as="select">
                                <option>Please select</option>
                                <option>USD</option>
                                <option>EUR</option>
                                <option>INR</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <h5 className="text-black pb-4" style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                    Discount Approval
                </h5>
                <Row className="mb-3">
                    <Col md={4}>
                        <Form.Group controlId="isDiscountGiven">
                            <Form.Label>Is Any Discount Given?</Form.Label>
                            <Form.Control as="select">
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="approvedQuotationAmount">
                            <Form.Label>Approved Quotation Amount</Form.Label>
                            <Form.Control type="number" placeholder="0" />
                        </Form.Group>
                    </Col>
                </Row>

               

                <Button  type="submit"  style={{ backgroundColor: '#152238', color: '#fff' }}>
                    Save Changes
                </Button>
            </Form>
        </Container>
    );
}

export default QuotationForm;
