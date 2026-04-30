import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './layout/Layout';
import Home from './Home/Home';
import Timeline from './pages/Timeline';
import Stats from './pages/Stats';
import CardDetails from './components/CardDetails';
import TimelineProvider from './contexts/TimelineProvider';
import { ToastContainer } from 'react-toastify';
import NotFund from './Component/NotFund/NotFund';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/timeline", Component: Timeline },
      { path: "/stats",Component:Stats },
      {path :"/details/:id", Component:CardDetails}
    ],
  },
  {
    path:"*",
    Component:NotFund
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </TimelineProvider>
  </StrictMode>,
);
