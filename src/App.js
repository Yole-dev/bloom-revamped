import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/ourservices"
            element={
              <Layout>
                <OurServices />
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
