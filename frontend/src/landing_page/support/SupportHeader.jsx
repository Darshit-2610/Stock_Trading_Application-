
import React from "react";

function SupportHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2>Support Portal</h2>
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
          style={{ width: "450px" }}
        />
      </div>

      <button className="btn btn-primary h-25">My tickets</button>
    </div>
  );
}

export default SupportHeader;
