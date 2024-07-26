// import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/TableTwo';
import { Button } from 'react-bootstrap';

import { useState } from 'react';
import Popup from './Modal/Popup';
import PopupForm from './Modal/Poper';
const Tables = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPopup, setIsPopup] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
    
  };

  const show=()=>{
    setIsPopup(true)

  }
  const hidePopup = () => {
    setIsPopupVisible(false);
   
  };
  const hide=()=>{
    setIsPopup(false)

  }

  return (
    <>
      {/* <Breadcrumb pageName="Tables" /> */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        Tables
      </h2>
     

      <nav>
        <div className="flex items-center gap-2">
         <Button className="bg-black text-white p-3 dark:bg-white dark:text-black" onClick={showPopup}>
          Create New Opportunities
         </Button>
         {/* <Button className="bg-black text-white p-3 dark:bg-white dark:text-black" onClick={show}>
          abcd
         </Button> */}
        </div>
      </nav>
      </div>

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>


      {isPopupVisible && <Popup onClose={hidePopup} />}
      {/* {isPopup &&   <PopupForm onClose={hide}/>} */}
    </>
  );
};

export default Tables;
