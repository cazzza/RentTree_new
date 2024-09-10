import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import OverviewPage from './OverviewPage';
import PropertyDetailPage from './PropertyDetailPage';
import MoreInfoPage from './MoreInfoPage';
import Layout from './Layout';

const App = () => {
  // This would typically come from your authentication system
  const isAuthenticated = false;
  const userType = 'landlord'; // or 'renter'

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/overview" element={<OverviewPage userType={userType} />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
          <Route path="/info/:appliance" element={<MoreInfoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

// A wrapper component to protect routes that require authentication
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default App;