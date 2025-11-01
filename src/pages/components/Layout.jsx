import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
};
// export const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <main className="container mt-4">{children}</main>
//     </>
//   );
// };
