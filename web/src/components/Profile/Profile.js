/* eslint-disable camelcase */
import React from "react";
import Octicon, { Link, Location } from "@githubprimer/octicons-react";

import styles from "./Profile.module.sass";

import Avatar from "../Avatar";
import Button from "../Button";

const Profile = ({ user }) => {
  console.log(user);
  const { avatar_url, name, login, blog, location, bio } = user;

  const blogDisplay = url => url.replace(/https?:\/\//, "");
  const blogHref = url => `http://${blogDisplay(url)}`;

  return (
    <div className={styles.profile}>
      {/* Github Avatar */}
      <Avatar url={avatar_url} />

      {/* Display Name & Github handle */}
      <h2 className={`f5 f5-ns mb0 black-90 ${styles.name}`}>
        {name || login}
      </h2>
      <p className={styles.handle}>@{login}</p>

      {/* Location */}
      <p className={styles.location}>
        <Octicon className={styles.octicon} icon={Location} />
        {location || "N/A"}
      </p>

      {/* Website Link */}
      <p className={styles.website}>
        <Octicon className={styles.octicon} icon={Link} />
        {blog ? <a href={blogHref(blog)}>{blogDisplay(blog)}</a> : "N/A"}
      </p>

      {/* Bio */}
      <p className={`black-90 ${styles.notes}`}>{bio}</p>

      {/* Github Link Button */}
      <Button
        href={`https://github.com/${login}`}
        style={{
          marginTop: "auto",
        }}
      >
        <span>Github</span>
      </Button>
    </div>
  );
};

export default Profile;
