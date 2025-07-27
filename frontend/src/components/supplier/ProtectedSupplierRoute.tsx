import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedSupplierRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/supplier/check-session`);
        setIsAuth(res.data.authenticated);
      } catch {
        setIsAuth(false);
      }
    };
    checkSession();
  }, []);

  if (isAuth === null) return <div className="text-center mt-10">Checking session...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/supplier/login" />;
};

export default ProtectedSupplierRoute;
