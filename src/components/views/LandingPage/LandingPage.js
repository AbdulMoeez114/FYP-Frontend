import React from "react";
import VideoDeleteComponent from "./../Video/VideoDeleteComponent";

function LandingPage() {
  return (
    <div>
      {/* <h3 style={{ paddingTop: 0 }}>Dashboard</h3>
      <br />
      <hr />
      <div class="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Delete Video</h5>
          <a href="/video/delete" className="btn btn-primary">
            Delete.
          </a>
        </div>
      </div> */}
      <VideoDeleteComponent />
    </div>
    // {/* <div style={{ float: "right" }}></div> */}
  );
}

export default LandingPage;
