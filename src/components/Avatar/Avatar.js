import React from "react";

const Avatar = ({ url }) => {
  return (
    <div className="aspect-ratio aspect-ratio--1x1">
      <img
        className="db bg-center cover aspect-ratio--object"
        src={url}
        alt="Closeup of a tabby cat yawning."
      />
    </div>
  );
};

export default Avatar;
