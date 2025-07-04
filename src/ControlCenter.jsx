// src/ControlCenter.jsx
import { useState, useEffect } from "react";

export default function ControlCenter() {
  const [msg, setMsg] = useState("Olá, Emmer. A Autonoma já está online!");

  useEffect(() => {
    console.log("Autonoma carregada");
  }, []);

  return (
    <div style={{
      fontFamily: "sans-serif",
      background: "linear-gradient(to right, #1e293b, #9333ea)",
      minHeight: "100vh",
      color: "#f1f5f9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem"
    }}>
      <p>{msg}</p>
    </div>
  );
}
