import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Branding from "./pages/Branding";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import Ecommerce from "./pages/Ecommerce";

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

          <Route
            path="/contactus"
            element={
              <Layout>
                <ContactUs />
              </Layout>
            }
          />

          <Route
            path="/branding"
            element={
              <Layout>
                <Branding />
              </Layout>
            }
          />

          <Route
            path="/webdevelopment"
            element={
              <Layout>
                <WebDevelopment />
              </Layout>
            }
          />

          <Route
            path="/ui_ux"
            element={
              <Layout>
                <UiUx />
              </Layout>
            }
          />

          <Route
            path="/ecommerce"
            element={
              <Layout>
                <Ecommerce />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
