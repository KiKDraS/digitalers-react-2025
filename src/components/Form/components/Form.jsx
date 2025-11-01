// Composición
export const Form = ({ children, title, onSubmit }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="card-title text-center mb-4">{title}</h2>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
};
