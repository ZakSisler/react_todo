import logo from "./logo.svg";
import "./App.css";

import Navigation from "./Components/Navigation";
//Below we are going to import a few mechanisms from react-router-dom

//1. Router 2. Routes (kind of like a switch) 3. Route (gives instructions on which component tree to display as different routes are encountered. )
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Login from "./Components/Auth/Login";
import Categories from "./Components/Resources/Categories";
import ToDo from "./Components/Resources/ToDo";
import ProtectedRoute from "./Components/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import Logout from "./Components/Auth/Logout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <ToDo />
                </ProtectedRoute>
              }
            />
            <Route
              path="categories"
              element={
                <ProtectedRoute>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path="todo"
              element={
                <ProtectedRoute>
                  <ToDo />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route
              path="todo"
              element={
                <ProtectedRoute>
                  <ToDo />
                </ProtectedRoute>
              }
            />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
