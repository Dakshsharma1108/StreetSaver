import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import HomePage  from './pages/HomePage.jsx';
import AuthPage from './pages/AuthPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MarketPlace from './pages/MarketPlace.jsx';
import CreatePool from './pages/CreatePool.jsx';
import PoolPage from './pages/PoolPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import WalletPage from './pages/WalletPage.jsx';
import AddProduct from './pages/AddProduct.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Nearby from './pages/NearbyPage.jsx';
import { setNavigateRef } from './utils/authRedirect.js';

function AppRoutes() {
  const navigate = useNavigate();
  
  useEffect(() => {
    setNavigateRef(navigate);
  }, [navigate]);

  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/create-pool" element={
            <ProtectedRoute>
              <CreatePool />
            </ProtectedRoute>
          } />
          <Route path="/pool/:id" element={
            <ProtectedRoute>
              <PoolPage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/wallet" element={
            <ProtectedRoute>
              <WalletPage />
            </ProtectedRoute>
          } />
          <Route path="/add-product" element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          } />
          <Route path="/product/:productId" element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          } />
          <Route path="/nearby" element={
            <ProtectedRoute>
              <Nearby />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

function App() {
  return (
    <Router basename='/'>
      <AppRoutes />
    </Router>
  );
}

export default App;
