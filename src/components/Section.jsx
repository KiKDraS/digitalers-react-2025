// Composición
export const Section = ({ children }) => {
  return (
    <section
      className="mx-auto"
      style={{ minWidth: "250px", maxWidth: "500px" }}
    >
      {children}
    </section>
  );
};
