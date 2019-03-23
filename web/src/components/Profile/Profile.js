/* eslint-disable camelcase */
import React from "react";
import Octicon, {
  Link,
  Location,
  MarkGithub,
} from "@githubprimer/octicons-react";
import ImagePalette from "react-image-palette";
import tinycolor from "tinycolor2";

import styles from "./Profile.module.scss";
import Avatar from "../Avatar";

const Profile = ({ user }) => {
  const { avatar_url, name, login, blog, location, bio } = user;

  const blogDisplay = url => url.replace(/https?:\/\//, "");
  const blogHref = url => `http://${blogDisplay(url)}`;

  return (
    <ImagePalette image={avatar_url} crossOrigin={true}>
      {({ backgroundColor, color, alternativeColor }) => {
        const profileColor =
          [color, backgroundColor, alternativeColor]
            .map(raw =>
              (col => ({ col, darkEnough: col.getBrightness() <= 220 }))(
                tinycolor(raw),
              ),
            )
            .find(el => el.darkEnough)
            .col.toHexString() || "#000000";

        return (
          <div
            className={styles.profile}
            style={{
              "--profile-theme-color": profileColor,
            }}
          >
            {/* Github Avatar */}
            <div className={styles.image}>
              <Avatar url={avatar_url} />
            </div>

            {/* Display Name & Github handle */}
            <h2 className={styles.name}>{name || login}</h2>
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
            <p className={`black-90 ${styles.bio}`}>{bio}</p>

            {/* Github Link Button */}
            <a
              href={`https://github.com/${login}`}
              className={styles.linkContainer}
            >
              <span className={styles.linkText}>
                <Octicon className={styles.octicon} icon={MarkGithub} />
                <span>Github</span>
                <span className={styles.linkArrow}>→</span>
              </span>
            </a>
          </div>
        );
      }}
    </ImagePalette>
  );
};

export default Profile;
