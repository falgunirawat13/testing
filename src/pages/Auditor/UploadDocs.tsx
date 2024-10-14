import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const UploadDocs = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileType, setFileType] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAddToSelection = () => {
    if (file && fileType) {
      setSelectedFiles([...selectedFiles, { fileType, file }]);
      setFile(null); // Reset file input after adding
      setFileType(''); // Reset file type after adding
    }
  };

  const handleDelete = (index) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black mb-4">
        Upload Signed Documents
      </h1>
      <div className="text-l font-bold text-black mb-2">Upload Document</div>
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
            className="bg-black text-white w-full rounded-md shadow-md" // Use w-full to make the button full width
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
            <tr></tr>
          ) : (
            selectedFiles.map((fileData, index) => (
              <tr key={index}>
                <td>{fileData.fileType}</td>
                <td>{fileData.file.name}</td>
                <td>
                  <Button
                    className="bg-success text-white  border px-4  rounded-md shadow-md"
                    size="sm"
                  >
                    View
                  </Button>
                </td>
                <td>
                  <Button
                    className="bg-danger text-white  border px-4 rounded-md shadow-md"
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
          className="bg-white text-black border-black border px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Send for Approval
        </Button>
        <Button
          className="bg-black text-white px-6 py-2 rounded-md shadow-md"
          type="button"
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default UploadDocs;
