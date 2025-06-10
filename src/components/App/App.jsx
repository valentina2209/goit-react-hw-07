import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading user...</p>; 
  }

  return (
     <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="register"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <RegisterPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="login"
                element={
                  <RestrictedRoute redirectTo="/contacts">
                    <LoginPage />
                  </RestrictedRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
  );
}