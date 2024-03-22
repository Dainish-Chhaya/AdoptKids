import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import RouterProvider, createBrowserRouter from 'react-router-dom'
import {
  RouterProvider,
  createBrowserRouter,
  redirectDocument,
} from "react-router-dom";
import Homepage from "./components/HomePage";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import JoinOurTeam from "./components/JoinOurTeam";
import AboutUsPage from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AdoptChild from "./components/AdoptChild";
import MoreInfo from "./components/MoreInfo";
import PostAdoption from "./components/PostAdoption";
import FosterChildForm from "./components/FosterChildForm";
import Faq from "./components/Faq";
import Login from "./components/Login";
import Registers from "./components/Register";
import Register from "./components/Register";
import Request from "./components/Request";
import UserResponses from "./components/UserResponses";
import { Provider } from "react-redux";
import store from "../src/Store/Store.js";
import AdminDashboard from "./components/AdminDashboard";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import AdminMoreInfo from "./components/AdminMoreInfo";

const router = createBrowserRouter([
  {
    path: "/service-worker.js",
    loader: () => redirectDocument("/service-worker.js"),
  },

  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/Services", element: <Services></Services> },
      { path: "/Testimonials", element: <Testimonials /> },
      { path: "/JoinOurTeam", element: <JoinOurTeam /> },
      { path: "/AboutUs", element: <AboutUsPage /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Faq", element: <Faq /> },
      { path: "/Login", element: <Login /> },
      {
        path: "/Services/FosterChildForm/Request",
        element: <Request></Request>,
      },
      {
        path: "/register",
        element: (
          <Register
            onRegister={() => {
              /* handle registration success */
            }}
          />
        ),
      },
      { path: "/Services/AdoptChild", element: <AdoptChild /> },
      { path: "/Services/FosterChildForm", element: <FosterChildForm /> },
      { path: "/Services/PostAdoption", element: <PostAdoption /> },
      {
        path: "/Services/PostAdoption/UserResponses",
        element: <UserResponses />,
      },
      { path: "/Services/AdoptChild/MoreInfo", element: <MoreInfo /> },
      { path: "/AdminDashboard/AdminMoreInfo", element: <AdminMoreInfo /> },

      {
        path: "/AdminDashboard",
        element: <AdminDashboard submittedData={undefined} />,
      },
    ],
  },
]);
//tsconfig.json
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

serviceWorkerRegistration.register();

reportWebVitals();
