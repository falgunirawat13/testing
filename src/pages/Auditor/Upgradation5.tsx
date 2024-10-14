import { Form, Row, Col, Button, Table } from 'react-bootstrap';

const Upgradation5 = () => {
  const eafIafData = [
    { standard: 'ISO 45001:2018', role: 'Provisional Auditor' },
    { standard: 'ISO 45001:2018', role: 'Provisional Auditor' },
    { standard: 'ISO 45001:2018', role: 'Provisional Auditor' },
  ];

  const naceCodeData = [
    { naceRev1: 'A01', naceRev2: 'B02' },
    { naceRev1: 'C03', naceRev2: 'D04' },
    { naceRev1: 'E05', naceRev2: 'F06' },
  ];

  const categoryData = [
    {
      standard: 'ISO 45001:2018',
      category: 'Quality',
      subCategory: 'Manufacturing',
    },
    {
      standard: 'ISO 45001:2018',
      category: 'Environment',
      subCategory: 'Energy',
    },
    {
      standard: 'ISO 45001:2018',
      category: 'Food Safety',
      subCategory: 'Agriculture',
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-2 mt-4">
        Auditor Biodata Information
      </h1>
      <Form>
        <Row className="mb-3">
          {/* Registration No */}
          <Form.Group as={Col} controlId="registrationNo" sm={12} md={6}>
            <label className="font-medium text-black dark:text-white mb-1">
              Registration No
            </label>
            <Form.Control type="text" defaultValue="PWZ/1088" readOnly />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Salutation */}
          <Form.Group as={Col} controlId="salutation" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Salutation
            </label>
            <Form.Control as="select" defaultValue="Ms.">
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </Form.Control>
          </Form.Group>

          {/* Name */}
          <Form.Group as={Col} controlId="name" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Name
            </label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              defaultValue="XYZ ABC"
            />
          </Form.Group>

          {/* Address */}
          <Form.Group as={Col} controlId="address" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Address
            </label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              defaultValue="Vikhroli, Mumbai"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Education Details */}
          <Form.Group as={Col} controlId="educationDetails" sm={12}>
            <label className="font-medium text-black dark:text-white mb-1">
              Education Details
            </label>
            <Form.Control type="text" placeholder="Education Details" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Zone */}
          <Form.Group as={Col} controlId="zone" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Zone
            </label>
            <Form.Control as="select" defaultValue="West Zone">
              <option>North Zone</option>
              <option>South Zone</option>
              <option>East Zone</option>
              <option>West Zone</option>
            </Form.Control>
          </Form.Group>

          {/* Is part of ISSPL? */}
          <Form.Group as={Col} controlId="isspl" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Is part of ISSPL?
            </label>
            <Form.Control as="select" defaultValue="No">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          {/* Is part of IRS? */}
          <Form.Group as={Col} controlId="irs" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Is part of IRS?
            </label>
            <Form.Control as="select" defaultValue="No">
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          {/* Date of Birth */}
          <Form.Group as={Col} controlId="dob" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Date of Birth
            </label>
            <Form.Control type="date" defaultValue="1982-01-10" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* Nationality */}
          <Form.Group as={Col} controlId="nationality" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Nationality
            </label>
            <Form.Control type="text" defaultValue="Indian" />
          </Form.Group>

          {/* Contact No */}
          <Form.Group as={Col} controlId="contactNo" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Contact No
            </label>
            <Form.Control type="text" defaultValue="9690316208" />
          </Form.Group>

          {/* Fax No */}
          <Form.Group as={Col} controlId="faxNo" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Fax No
            </label>
            <Form.Control type="text" defaultValue="9690316208" />
          </Form.Group>

          {/* Mobile No */}
          <Form.Group as={Col} controlId="mobileNo" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Mobile No
            </label>
            <Form.Control type="text" defaultValue="9690316208" />
          </Form.Group>

          {/* Email ID */}
          <Form.Group as={Col} controlId="email" sm={12} md={4}>
            <label className="font-medium text-black dark:text-white mb-1">
              Email ID
            </label>
            <Form.Control type="email" defaultValue="xyz.abc@gmail.com" />
          </Form.Group>
        </Row>

        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Change Email
        </Button>

        <h3 className="font-medium text-black dark:text-white mb-1 mt-4">
          Standard-wise Auditor Roles
        </h3>
        <Table bordered responsive="sm">
          <thead>
            <tr>
              <th>Standard</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {eafIafData.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3 className="font-medium text-black dark:text-white mb-1 mt-4">
          Existing NaceCodes
        </h3>
        <Table bordered responsive="sm">
          <thead>
            <tr>
              <th>NaceCode (Rev 1)</th>
              <th>NaceCode (Rev 2)</th>
            </tr>
          </thead>
          <tbody>
            {naceCodeData.map((item, index) => (
              <tr key={index}>
                <td>{item.naceRev1}</td>
                <td>{item.naceRev2}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h3 className="font-medium text-black dark:text-white mb-1 mt-4">
          Existing Category Codes
        </h3>
        <Table bordered responsive="sm">
          <thead>
            <tr>
              <th>Standard</th>
              <th>Category</th>
              <th>Sub-Category</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.standard}</td>
                <td>{item.category}</td>
                <td>{item.subCategory}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="flex justify-between">
          {/* Left-aligned button */}
          <div className="flex justify-start space-x-4">
            <Button
              className="bg-black text-white px-6 py-2 rounded-md shadow-md"
              type="button"
            >
              Deactivate
            </Button>
          </div>

          {/* Right-aligned buttons */}
          <div className="flex justify-end space-x-2">
            <Button
              className="bg-white text-black border-black border px-4 py-2 rounded-md shadow-md"
              type="button"
            >
              Save Changes
            </Button>
            <Button
              className="bg-black text-white px-4 py-2 rounded-md shadow-md"
              type="button"
            >
              Close
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Upgradation5;
