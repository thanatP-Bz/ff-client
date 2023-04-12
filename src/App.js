import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Profile,
  Gallery,
  About,
  ProtectedRoutes,
} from "./pages/index";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/gallery"
        element={
          <ProtectedRoutes>
            <Gallery />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoutes>
            <About />
          </ProtectedRoutes>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
