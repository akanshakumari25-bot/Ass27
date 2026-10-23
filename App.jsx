import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
      <p>You are logged in successfully.</p>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginForm setIsAuthenticated={setIsAuthenticated} />
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;


