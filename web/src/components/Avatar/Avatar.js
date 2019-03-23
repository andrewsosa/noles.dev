import React from "react";

const Avatar = ({ url }) => {
  return (
    <div
      className="aspect-ratio aspect-ratio--1x1"
      style={{
        gridColumn: "1/2",
        gridRow: "1/3",
        alignSelf: "start",
      }}
    >
      <img
        className="db bg-center cover aspect-ratio--object"
        src={url}
        alt="Closeup of a tabby cat yawning."
      />
    </div>
  );
};

export default Avatar;
