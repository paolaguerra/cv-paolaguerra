import React from "react";
import profile from "../img/profile.jpg";

export const Body = () => {
  return (
    <>
      <div className="animate__animated animate__fadeInDown">
        <h1 className="main-title">
          Hi. 👋 I'm Paola.
          <br />
          a React Developer,
          <br />
          and Web Designer.
        </h1>
      </div>

      <div className="content-2">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img className="img-card" alt="profile" src={profile}></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  I'm passionate about creating interfaces that are fun, useful,
                  and user-centric. ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
