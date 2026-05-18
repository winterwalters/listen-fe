import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { Auth0Provider } from "@auth0/auth0-react";
import { router } from "./router";
import "@mantine/core/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-meq6rrk8na50v2lf.uk.auth0.com"
      clientId="yiqsfA2Y7ahsDfAzW5GHiLXdlfSKnHjZ"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
);
