import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Sidebar from "./Sidebar";
import PageContainer from "./PageContainer";
import Navbar from "./Navbar";

const MainLayout = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return (
      <div className="min-w-screen flex min-h-screen">
        <Sidebar />
        <Navbar />
        <PageContainer />
      </div>
    );
  }
};

export default MainLayout;
