import { Table, Dropdown } from 'react-bootstrap';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
// Helper function to format date


const TableComponent = ({ data, columns, onDelete }) => {
    const navigate = useNavigate();
    const [permissions, setPermissions] = useState([]);

    const handleDelete = (id) => {
        
            onDelete(id);
    };

    const handleEdit = (id) => {
        navigate(`/lead/edit-user/${id}`);
    };

    const handleViewDetails = (id) => {
        // navigate(`/lead/view-details/${id}`);
    };

    useEffect(() => {
        const storedPermissions = localStorage.getItem('permission');
        if (storedPermissions) {
          setPermissions(JSON.parse(storedPermissions));
          
        }
      }, []);
      console.log("permsission",permissions[0]?.lead)

      const canMenu=permissions[0]?.lead?.menu
      const canEdit=permissions[0]?.lead?.update
      const canDelete=permissions[0]?.lead?.delete

    return (
        <div className="overflow-auto">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                       {canMenu && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                             {columns.map((col, index) => {
                                // Log the current item and column being processed
                                // console.log('Processing item:', item);
                                // console.log('Processing column:', col);
                                // console.log("console",col.accessor.split('.').reduce((o)=>{console.log("o",o)}),item)

                                return (
                                    <td key={index}>
                                        {col.accessor.includes('.') 
                                            ? col.accessor.split('.').reduce((o, i) => o?.[i] || 'N/A', item)
                                            : item[col.accessor] || 'N/A'}
                                    </td>
                                );
                            })}
                           {canMenu && <td>
                                <Dropdown>
                                    <Dropdown.Toggle as="div" className="dropdown-toggle-custom">
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-custom">
                                      {canEdit &&  <Dropdown.Item onClick={() => handleEdit(item.id)}>Edit</Dropdown.Item>}
                                       {canDelete && <Dropdown.Item onClick={() => handleDelete(item.id)}>Delete</Dropdown.Item>}
                                        <Dropdown.Item onClick={() => handleViewDetails(item.id)}>View Details</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;
