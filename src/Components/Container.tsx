// import { StyledError } from "./Styles"

export default function Container({
  children,
  label,
}: {
  children?: React.ReactNode
  label?: string
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
  )
}
