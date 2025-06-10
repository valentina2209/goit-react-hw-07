 import React from "react";
 import ReactDOM from "react-dom/client";
 import { BrowserRouter } from "react-router-dom";
 import { Provider } from "react-redux";
 import { PersistGate } from "redux-persist/integration/react";
 import { Toaster } from "react-hot-toast";
 import App from "./components/App/App.jsx";
 import { store, persistor } from "./redux/store.js";
 import { ThemeProvider, CssBaseline } from "@mui/material";
 import theme from "./theme";


 ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
           <BrowserRouter>
             <App />
             <Toaster position="top-right" />
           </BrowserRouter>
         </PersistGate>
       </Provider>
     </ThemeProvider>
   </React.StrictMode>
  );
