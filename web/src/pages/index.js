import React from "react";
// import { Link } from "gatsby";

// import Octicon, { MarkGithub } from "@githubprimer/octicons-react";

import { Container, MainLayout } from "../components/Layout";
// import Button from "../components/Button";
// import UserGrid from "../components/UserGrid";

// const bgGray = { backgroundColor: "var(--gray)" };
import screencap from "../images/noles.dev.png";

const Main = () => (
  <MainLayout>
    {/* <Container> */}
    <article className="content fw4">
      <h1>noles.dev is retired. </h1>
      <p>Why though?</p>
      <p>{`Frankly, because nobody is using this site, I don't think enough
           people could be made care about this site, and the backend with
           AWS has upkeep costs.`}</p>
      <p>{`The original goal was to help FSU students (hence noles.dev) get
           discovered by their employers and peers. The trouble is that I
           made the site after I had left school. `}</p>
      <p>
        {`This site operates under voluntary enrollement. The original
        inspiration for this site, `}
        <a className="b underline-hover" href="https://womenwho.design">
          womenwho.design
        </a>
        {`, operated on a nomination system. However, I did not feel it was
        ethical to scrape Github profiles without user consent, or figure out
        who was an FSU student from those scraped profiles. `}
      </p>
      <p>
        {`And so, we're putting noles.dev to bed. It was an excellent learning
        experience for React, Gatsby, Netlify, and AWS. You can find a screencap
        of the original site below, and naturally, the source is on `}
        <a href="https://github.com/andrewsosa/noles.dev">Github</a>.
      </p>
      <p>Cheers,</p>
      <p>Andrew</p>

      <img className="b--black-10 bw1 b--solid" src={screencap} />
    </article>
    {/* </Container> */}
  </MainLayout>
);

export default Main;
