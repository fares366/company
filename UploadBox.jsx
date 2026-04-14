import React from "react";

export default function UploadBox() {
  return (
    <div className="upload-section">
      <label>Company Logo <span className="muted">(optional)</span></label>
      <div className="upload-box">
        <div className="plus-icon">+</div>
        <div className="upload-info">
          <strong>Upload a Photo</strong>
          <span>2MB max; PNG, JPG</span>
        </div>
      </div>
    </div>
  );
}