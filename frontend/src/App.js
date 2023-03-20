// General Imports
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Pages Imports
import BookshelfPage from "./pages/BookshelfPage/BookshelfPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/bookshelf"
          element={
            <PrivateRoute>
              <BookshelfPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
