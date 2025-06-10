import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className={css.container}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}