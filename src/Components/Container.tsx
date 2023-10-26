// import { StyledError } from "./Styles"

export default function Container({
  children,
  label,
  formik,
  onChange,
}: {
  children?: React.ReactNode;
  label?: string;
  formik?: any;
  onChange?: any;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginBottom: "10px",
      }}
    >
      <div>
        <p>{label}</p>
      </div>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {children}
      </div>
    </div>
  );
}
