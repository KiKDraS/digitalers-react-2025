import { Navbar } from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">{children}</main>
    </>
  );
};
