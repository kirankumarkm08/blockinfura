import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { useAppDispatch } from "./app/hooks";
import { fetchChains } from "./features/deploySlice";

// Loading component
export const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E99710]"></div>
  </div>
);

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const NetworkPage = lazy(() => import("./pages/NetworkPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const DocumentationPage = lazy(() => import("./pages/DocumentationPage"));
const StatusPage = lazy(() => import("./pages/StatusPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const NodeViewPage = lazy(() => import("./pages/NodeView"));
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchChains());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="services/:service"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicePage />
              </Suspense>
            }
          />
          <Route
            path="networks/:network"
            element={
              <Suspense fallback={<PageLoader />}>
                <NetworkPage />
              </Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <Suspense fallback={<PageLoader />}>
                <PricingPage />
              </Suspense>
            }
          />
          <Route
            path="documentation"
            element={
              <Suspense fallback={<PageLoader />}>
                <DocumentationPage />
              </Suspense>
            }
          />
          <Route
            path="status"
            element={
              <Suspense fallback={<PageLoader />}>
                <StatusPage />
              </Suspense>
            }
          />
          <Route
            path="blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="careers"
            element={
              <Suspense fallback={<PageLoader />}>
                <CareersPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<PageLoader />}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="node/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <NodeViewPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
