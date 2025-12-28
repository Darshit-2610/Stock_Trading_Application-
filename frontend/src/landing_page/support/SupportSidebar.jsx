import React from "react";


function SupportSidebar() {
  return (
    <>
      {/* Latest Updates */}
      <div className="border-start ps-3 mb-4">
        <ul>
          <li>
            <a href="#" className="text-decoration-none">
              Latest intraday leverages and square-off timings
            </a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-decoration-none">
              Rights Entitlements listing in December 2025
            </a>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="border p-3">
        <h6>Quick links</h6>
        <ol className="mt-3">
          <li><a href="#">Track account opening</a></li>
          <li><a href="#">Track segment activation</a></li>
          <li><a href="#">Intraday margins</a></li>
          <li><a href="#">Kite user manual</a></li>
          <li><a href="#">Learn how to create a ticket</a></li>
        </ol>
      </div>
    </>
  );
}

export default SupportSidebar;
