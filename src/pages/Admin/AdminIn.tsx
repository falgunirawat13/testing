import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuditor, setIsAuditor] = useState(false); // Track if the user is an auditor
  const navigate = useNavigate();

  // Check if token is present
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard'); // Redirect to dashboard if token exists
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill the fields.');
      return;
    }

    // Call the correct API based on the auditor checkbox
    if (isAuditor) {
      loginWithAuditorQualificationsApi(email, password);
    } else {
      loginWithAuthApi(email, password);
    }
  };

  // Login function using the Auth API
  const loginWithAuthApi = async (email: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
      
      // Successful login with Auth API
      storeUserData(response.data);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError('Incorrect email or password for standard user.');
      } else {
        console.error('Auth API error:', error.response?.data || error.message);
        setError('An error occurred with the Auth API. Please try again later.');
      }
    }
  };

  // Login function using the Auditor Qualifications API
  const loginWithAuditorQualificationsApi = async (email: string, password: string) => {
    try {
      console.log('Attempting login with Auditor Qualifications API...');
      const response = await axios.post('http://localhost:8000/api/auditor-qualifications/login', { email, password });
  
      if (response.data && response.data.token) {
        console.log('Login successful:', response.data);
        storeUserData(response.data, true); // Pass true to indicate Auditor API
        navigate('/dashboard');
      } else {
        console.error('Unexpected response from Auditor API:', response.data);
        setError('Unexpected response. Please contact support.');
      }
    } catch (error: any) {
      handleApiError(error);
    }
  };
  
  // Function to store user data in localStorage
  // Function to store user data in localStorage
const storeUserData = (data: any, isAuditorApi: boolean = false) => {
  if (isAuditorApi) {
    // When login comes from the Auditor API
    const auditor = data.auditor;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', auditor.name);
    localStorage.setItem('role', auditor.auditorSelectType);
    localStorage.setItem('id', auditor.id);
    setError(''); // Clear any previous errors
  } else {
    // When login comes from the Auth API
    const permission = data.existUser.permissions;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.existUser.roleName);
    localStorage.setItem('permission', JSON.stringify(permission));
    localStorage.setItem('id', data.existUser.id);
    localStorage.setItem('role', data.existUser.roleName);
    setError(''); // Clear any previous errors
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-boxdark">
      <div className="w-full max-w-md rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 sm:p-12.5 xl:p-17.5">
          <h2 className="mb-9 text-2xl font-bold text-black text-center dark:text-white sm:text-title-xl2">
            Sign In
          </h2>

          {error && (
            <div className="mb-4 text-red-500 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
               Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="6+ Characters, 1 Capital letter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAuditor}
                  onChange={(e) => setIsAuditor(e.target.checked)}
                  className="mr-2"
                />
                Log in as auditor
              </label>
            </div>

            <div className="mb-5">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary p-4 text-white transition hover:bg-opacity-90"
                style={{ backgroundColor: '#152238' }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminIn;
