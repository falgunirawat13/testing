import React from 'react';
import Form from 'react-bootstrap/Form';

const MonitoringEvaluation = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-4">Auditor Monitoring/Evaluation</h1>
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
        {/* Auditor Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield2" className="font-medium text-black dark:text-white mb-1">
            Auditor
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Auditor"
            placeholder="Auditor Name"
          />
        </div>
        
        {/* Evaluation Upload Date */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield2" className="font-medium text-black dark:text-white mb-1">
            Evaluation Upload Date
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Evaluation Upload Date"
            placeholder="Date"
          />
        </div>
        
        {/* Client Name */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield1" className="font-medium text-black dark:text-white mb-1">
            Client Name
          </label>
          <Form.Control
            id="textfield1"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Client Name"
            placeholder="Client Name"
          />
        </div>
      </div>

      {/* Section for Scheme, Audit Start and End Dates */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
        {/* Scheme */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield2" className="font-medium text-black dark:text-white mb-1">
            Scheme
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Scheme"
            placeholder="Scheme"
          />
        </div>

        {/* Audit Start Date */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield2" className="font-medium text-black dark:text-white mb-1">
            Audit Start Date
          </label>
          <Form.Control
            id="textfield2"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Audit Start Date"
            placeholder="Date"
          />
        </div>

        {/* Audit End Date */}
        <div className="flex flex-col w-full">
          <label htmlFor="textfield1" className="font-medium text-black dark:text-white mb-1">
            Audit End Date
          </label>
          <Form.Control
            id="textfield1"
            type="text"
            className="p-2 border rounded-lg"
            aria-label="Audit End Date"
            placeholder="Date"
          />
        </div>
      </div>

      {/* Textareas for Scheme, Area of Experience, etc. */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
        <div className="flex flex-col w-full">
          <label htmlFor="areaExperience" className="font-medium text-black dark:text-white mb-1">
            Area of Experience
          </label>
          <textarea
            id="areaExperience"
            className="p-2 border rounded-lg"
            aria-label="Area of Experience"
            placeholder="Area of Experience"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="areaImprovement" className="font-medium text-black dark:text-white mb-1">
            Area of Improvement
          </label>
          <textarea
            id="areaImprovement"
            className="p-2 border rounded-lg"
            aria-label="Area of Improvement"
            placeholder="Area of Improvement"
            rows="2"
          ></textarea>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="clarificationDetails" className="font-medium text-black dark:text-white mb-1">
            Clarification Details
          </label>
          <textarea
            id="clarificationDetails"
            className="p-2 border rounded-lg"
            aria-label="Clarification Details"
            placeholder="Clarification Details"
            rows="2"
          ></textarea>
        </div>
      </div>
  
      {/* Additional Textareas for Clarification Details, Training Needs, etc. */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
       

        <div className="flex flex-col w-full">
          <label htmlFor="trainingNeeds" className="font-medium text-black dark:text-white mb-1">
            Identify Training Needs
          </label>
          <textarea
            id="trainingNeeds"
            className="p-2 border rounded-lg"
            aria-label="Identify Training Needs"
            placeholder="Identify Training Needs"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="appraiserComments" className="font-medium text-black dark:text-white mb-1">
            Appraiser Comments
          </label>
          <textarea
            id="appraiserComments"
            className="p-2 border rounded-lg"
            aria-label="Appraiser Comments"
            placeholder="Appraiser Comments"
            rows="2"
          ></textarea>
        </div>
      </div>

      {/* More Textareas for Recommendations and Input */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
        <div className="flex flex-col w-full">
          <label htmlFor="recommendationEvaluation" className="font-medium text-black dark:text-white mb-1">
            Recommendation of Evaluation
          </label>
          <textarea
            id="recommendationEvaluation"
            className="p-2 border rounded-lg"
            aria-label="Recommendation of Evaluation"
            placeholder="Recommendation of Evaluation"
            rows="2"
          ></textarea>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="inputIRQS" className="font-medium text-black dark:text-white mb-1">
            Input Provided by IRQS
          </label>
          <textarea
            id="inputIRQS"
            className="p-2 border rounded-lg"
            aria-label="Input Provided by IRQS"
            placeholder="Input Provided by IRQS"
            rows="2"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mt-3">
  {/* Accreditation Identified Training */}
  <div className="flex flex-col w-full">
    <label htmlFor="recommendationEvaluation" className="font-medium text-black dark:text-white mb-1">
      Accreditation Identified Training
    </label>
    <textarea
      id="recommendationEvaluation"
      className="p-2 border rounded-lg"
      aria-label="Accreditation Identified Training"
      placeholder="Enter training identified for accreditation"
      rows="2"
    ></textarea>
  </div>

  {/* Conclusion on Recommendation */}
  <div className="flex flex-col w-full">
    <label htmlFor="inputIRQS" className="font-medium text-black dark:text-white mb-1">
      Conclusion on Recommendation
    </label>
    <textarea
      id="inputIRQS"
      className="p-2 border rounded-lg"
      aria-label="Conclusion on Recommendation"
      placeholder="Enter conclusion on recommendation"
      rows="2"
    ></textarea>
  </div>
</div>


      {/* Action Buttons */}
      <div className="flex flex-col space-y-4 md:flex-row md:justify-end md:items-end mt-2">
        <button
          className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-md dark:border-strokedark dark:text-white"
          type="submit"
        >
          Close
        </button>
        <button
          className="flex justify-center rounded bg-[#152238] py-2 px-4 font-medium text-white hover:bg-opacity-90"
          type="submit"
        >
          Save 
        </button>
      </div>
    </>
  );
};

export default MonitoringEvaluation;
