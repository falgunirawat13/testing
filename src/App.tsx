import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AdminIn from './pages/Admin/AdminIn';
import Lead from './pages/Lead/Lead';
import Contract from './pages/contract/Contract';
import Quotation from './pages/Quotation/Quotation';
import QuotationForm from './pages/Quotation/QuotationForm';
import EditUserTable from './pages/EditUserTable';
import EditLead from './pages/Lead/EditLead';
import HistoryLead from './pages/Lead/HistoryLead';
import LeadDetail from './pages/Lead/LeadDetail';
import AuditorTable from './pages/Auditor/AuditorTable';
import AuditPlan from './pages/Auditor/CreateNewAudit';
import NonConfirmity from './pages/Auditor/NonConfirmity';
import FileDropdown from './pages/Auditor/MyAudits';
import NoticeOfChange from './pages/Auditor/NoticeOfChange';
import ScopeOfCertification from './pages/Auditor/ScopeOfCertification';
import AdequacyInformation from './pages/Auditor/AdequacyInformation';
import BiodataInfo from './pages/Auditor/BiodataInfo';
import CertificateInfo from './pages/Auditor/CertificateInfo';
import DraftCertificate from './pages/Auditor/DraftCertificate';
import MonitoringEvaluation from './pages/Auditor/MonitoringEvaluation';
import UploadDocuments from './pages/Auditor/UploadDocuments';
import UpgradeRequest from './pages/Auditor/UpgradeRequest';
import RegistrationApproval from './pages/Auditor/RegistrationApproval';
import SubmittedBiodata from './pages/AuditorSubmit/SubmittedBiodata';
import SubmitAdequacy from './pages/AuditorSubmit/SubmitAdequacy';
import RegApprovalSubmit from './pages/AuditorSubmit/RegApprovalSubmit';
import UpgradeRequestSubmit from './pages/AuditorSubmit/UpgradeRequestSubmit';
import ApprovalRequest from './pages/Auditor/AuditorQualification';
import QualificationView from './pages/AuditorSubmit/QualificationView';
import ApproveAuditorQualification from './pages/AuditorSubmit/ApproveAuditorQualification';
import AuditorInformation from './pages/Auditor/AuditorInformation';
import ZonalHeadViewList from './pages/AuditorSubmit/ZonalHeadViewList';
import AuditorLogin from './pages/Auditor/AuditorLogin';
import Validation from './pages/Auditor/Validation';
import Validation1 from './pages/Auditor/Validation1';
import CodeComponent from './pages/Auditor/CodeComponent';
import UploadDocs from './pages/Auditor/UploadDocs';
import Validation2 from './pages/Auditor/Validation2';
import Upgradation from './pages/Auditor/Upgradation';
import Upgradation1 from './pages/Auditor/Upgradation1';
import Upgradation2 from './pages/Auditor/Upgradation2';
import Upgradation3 from './pages/Auditor/Upgradation3';
import Upgradation4 from './pages/Auditor/Upgradation4';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/opportunity"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/auditorTables"
          element={
            <>
              <PageTitle title="AuditorTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AuditorTable />
            </>
          }
        />

        <Route
          path="/form-elements"
          element={
            <>
              <PageTitle title="AuditorTable | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AuditPlan />
            </>
          }
        />

        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />

        {/* admin */}
        <Route
          index
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <AdminIn />
            </>
          }
        />
        <Route
          path="/business/lead"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Lead />
            </>
          }
        />
        <Route
          path="/business/contract"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Contract />
            </>
          }
        />
        <Route
          path="/business/Quotation"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              {/* <Contract/> */}
              <Quotation />
            </>
          }
        />

        {/* /business/quotation/form */}
        <Route
          path="/business/quotation/form"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              {/* <Contract/> */}
              <QuotationForm />
            </>
          }
        />

        <Route
          path="/tables/edit-user/:id"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              {/* <Contract/> */}
              <EditUserTable />
            </>
          }
        />
        <Route
          path="/lead/edit-user/:id"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <EditLead />
            </>
          }
        />

        <Route
          path="/lead/history"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <HistoryLead />
            </>
          }
        />

        <Route
          path="/detail"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <LeadDetail />
            </>
          }
        />
        <Route
          path="/nonConfirmity"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <NonConfirmity />
            </>
          }
        />
        <Route
          path="/fileDropdown"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <FileDropdown user={undefined} />
            </>
          }
        />
        <Route
          path="/noticeOfChange"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <NoticeOfChange />
            </>
          }
        />
        <Route
          path="/scopeOfCertification"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <ScopeOfCertification />
            </>
          }
        />
        <Route
          path="/adequacyInformation"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <AdequacyInformation />
            </>
          }
        />
        <Route
          path="/biodataInfo"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <BiodataInfo />
            </>
          }
        />
        <Route
          path="/certificateInfo"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <CertificateInfo />
            </>
          }
        />
        <Route
          path="/draftCertificate"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <DraftCertificate />
            </>
          }
        />
        <Route
          path="/monitoringEvaluation"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <MonitoringEvaluation />
            </>
          }
        />
        <Route
          path="/uploadDocuments"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <UploadDocuments />
            </>
          }
        />
        <Route
          path="/upgradeRequest"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <UpgradeRequest />
            </>
          }
        />
        <Route
          path="/registrationApproval"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <RegistrationApproval />
            </>
          }
        />
        <Route
          path="/subdata"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <SubmittedBiodata />
            </>
          }
        />
        <Route
          path="/submitAdequacy"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <SubmitAdequacy />
            </>
          }
        />
        <Route
          path="/regApprovalSubmit"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <RegApprovalSubmit />
            </>
          }
        />
        <Route
          path="/upgradeRequestSubmit"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <UpgradeRequestSubmit />
            </>
          }
        />
        <Route
          path="/approvalRequest"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <ApprovalRequest />
            </>
          }
        />
        <Route
          path="/qualificationView/:auditorId"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <QualificationView />
            </>
          }
        />
        <Route
          path="/approvalList"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <ApproveAuditorQualification />
            </>
          }
        />
        <Route
          path="/auditorInformation"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <AuditorInformation />
            </>
          }
        />
        <Route
          path="/ZonalHeadViewList"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <ZonalHeadViewList />
            </>
          }
        />

        <Route
          path="/validation"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Validation />
            </>
          }
        />

        <Route
          path="/view/:index"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <CodeComponent />
            </>
          }
        />

        <Route
          path="/validation1"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Validation1 />
            </>
          }
        />

        <Route
          path="/upload"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <UploadDocs />
            </>
          }
        />
        <Route
          path="/validation2"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Validation2 />
            </>
          }
        />
        <Route
          path="/Upgradation"
          element={
            <>
              <PageTitle title="Upgradation| TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Upgradation />
            </>
          }
        />

        <Route
          path="/Upgradation1"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Upgradation1 />
            </>
          }
        />

        <Route
          path="/Upgradation2"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Upgradation2 />
            </>
          }
        />

        <Route
          path="/Upgradation3"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Upgradation3 />
            </>
          }
        />

        <Route
          path="/Upgradation4"
          element={
            <>
              <PageTitle title="Validation | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <Upgradation4 />
            </>
          }
        />

        <Route
          path="/auditorLogin"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />

              <AuditorLogin />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
