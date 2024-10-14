import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const Upgradation1 = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileType, setFileType] = useState('');
  const [file, setFile] = useState(null);

  // States for dropdowns
  const [auditor, setAuditor] = useState('');
  const [applyFor, setApplyFor] = useState('');
  const [scheme, setScheme] = useState('');
  const [upgradeTo, setUpgradeTo] = useState('');

  // State for scheme options (fetched from API)
  const [schemeOptions, setSchemeOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const schemeResponse = await axios.get(
          'http://localhost:8000/api/auditor/auditorStandards',
        );
        setSchemeOptions(schemeResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddToSelection = () => {
    if (file && fileType) {
      setSelectedFiles([...selectedFiles, { fileType, file }]);
      setFile(null);
      setFileType('');
    }
  };

  const handleDelete = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Upgrade Request Information
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mb-5">
        {/* Field: Select Auditor */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Select Auditor
          </label>
          <Form.Control
            as="select"
            value={auditor}
            onChange={(e) => setAuditor(e.target.value)}
          >
            <option value="">Select Auditor</option>
            <option value="Auditor 1">Auditor 1</option>
            <option value="Auditor 2">Auditor 2</option>
            <option value="Auditor 3">Auditor 3</option>
          </Form.Control>
        </div>

        {/* Field: Apply For */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Apply For
          </label>
          <Form.Control
            as="select"
            value={applyFor}
            onChange={(e) => setApplyFor(e.target.value)}
          >
            <option value="">Apply For</option>
            <option value="Application 1">Application 1</option>
            <option value="Application 2">Application 2</option>
            <option value="Application 3">Application 3</option>
          </Form.Control>
        </div>

        {/* Field: Scheme */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Scheme
          </label>
          <Form.Control
            as="select"
            value={scheme}
            onChange={(e) => setScheme(e.target.value)}
          >
            <option value="">Select Scheme</option>
            {schemeOptions.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </Form.Control>
        </div>

        {/* Field: Upgrade/Enhancement To */}
        <div className="flex flex-col">
          <label className="font-medium text-black dark:text-white mb-1">
            Upgrade/Enhancement To
          </label>
          <Form.Control
            as="select"
            value={upgradeTo}
            onChange={(e) => setUpgradeTo(e.target.value)}
          >
            <option value="">Upgrade/Enhancement To</option>
            <option value="Enhancement 1">Enhancement 1</option>
            <option value="Enhancement 2">Enhancement 2</option>
            <option value="Enhancement 3">Enhancement 3</option>
          </Form.Control>
        </div>
      </div>

      <div className="text-xl font-bold text-black mb-2">Upload Document</div>
      <hr className="mb-3 font-bold border border-black" />
      <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
        <Form.Group className="mb-3 lg:col-span-2" controlId="fileType">
          {/* 2 columns for File Type */}
          <Form.Label>File Type</Form.Label>
          <Form.Control
            as="select"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          >
            <option value="">Select File Type</option>
            <option value="Declaration of Confidentiality">
              Declaration of Confidentiality
            </option>
            <option value="Declaration of Impartiality, Conflict of Interest and Integrity">
              Declaration of Impartiality, Conflict of Interest and Integrity
            </option>
            <option value="Contract Agreement">Contract Agreement</option>
            <option value="Empanelment Letter">Empanelment Letter</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3 lg:col-span-3" controlId="formFile">
          {/* 3 columns for File Upload */}
          <Form.Label>Browse file to upload</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>

        <Form.Group className="mb-3 lg:col-span-1">
          {/* 1 column for Action Button */}
          <Form.Label>Action</Form.Label>
          <Button
            className="bg-black text-white w-full rounded-md shadow-md"
            onClick={handleAddToSelection}
          >
            Add to Selection
          </Button>
        </Form.Group>
      </Form>

      <Table responsive bordered className="mt-4">
        <thead className="bg-light">
          <tr>
            <th>File Type</th>
            <th>File Name</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {selectedFiles.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                No files selected
              </td>
            </tr>
          ) : (
            selectedFiles.map((fileData, index) => (
              <tr key={index}>
                <td>{fileData.fileType}</td>
                <td>{fileData.file.name}</td>
                <td>
                  <Button
                    className="bg-success text-white border px-4 rounded-md shadow-md"
                    size="sm"
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button
                    className="bg-danger text-white border px-4 rounded-md shadow-md"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

      <div className="flex justify-end space-x-4 p-4">
        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Close
        </Button>
        <Button
          className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Upgradation1;
