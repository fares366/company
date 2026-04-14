import React from "react";

export default function FormCard({ title, icon, children }) {
  return (
    <div className="form-card">
      <div className="card-header">
        <div className="icon-box">{icon}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}