import React from "react";
import 'boxicons/css/boxicons.min.css'; // Ensure you have Boxicons installed or linked in your project
import "../css/app.css"; // Your custom styles

const PostHeader = ({ userName, userImage, postTime }) => {
  return (
    <div className="media text-muted pt-3">
      <img
        src={userImage}
        alt="Online user"
        className="mr-3 post-user-image"
      />
      <div className="media-body pb-3 mb-0 small lh-125">
        <div className="d-flex justify-content-between align-items-center w-100">
          <a href="#" className="text-gray-dark post-user-name">{userName}</a>
          <div className="dropdown">
            <a
              href="#"
              className="post-more-settings"
              role="button"
              data-toggle="dropdown"
              id="postOptions"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="bx bx-dots-horizontal-rounded"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left post-dropdown-menu">
              <a href="#" className="dropdown-item" aria-describedby="savePost">
                <div className="row">
                  <div className="col-md-2">
                    <i className="bx bx-bookmark-plus post-option-icon"></i>
                  </div>
                  <div className="col-md-10">
                    <span className="fs-9">Save post</span>
                    <small id="savePost" className="form-text text-muted">
                      Add this to your saved items
                    </small>
                  </div>
                </div>
              </a>
              <a href="#" className="dropdown-item" aria-describedby="hidePost">
                <div className="row">
                  <div className="col-md-2">
                    <i className="bx bx-hide post-option-icon"></i>
                  </div>
                  <div className="col-md-10">
                    <span className="fs-9">Hide post</span>
                    <small id="hidePost" className="form-text text-muted">
                      See fewer posts like this
                    </small>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="dropdown-item"
                aria-describedby="snoozePost"
              >
                <div className="row">
                  <div className="col-md-2">
                    <i className="bx bx-time post-option-icon"></i>
                  </div>
                  <div className="col-md-10">
                    <span className="fs-9">Snooze {userName} for 30 days</span>
                    <small
                      id="snoozePost"
                      className="form-text text-muted"
                    >
                      Temporarily stop seeing posts
                    </small>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="dropdown-item"
                aria-describedby="reportPost"
              >
                <div className="row">
                  <div className="col-md-2">
                    <i className="bx bx-block post-option-icon"></i>
                  </div>
                  <div className="col-md-10">
                    <span className="fs-9">Report</span>
                    <small id="reportPost" className="form-text text-muted">
                      I'm concerned about this post
                    </small>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <span className="d-block">
          {postTime} <i className="bx bx-globe ml-3"></i>
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
