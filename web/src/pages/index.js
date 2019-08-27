import React from "react";
import { Link } from "gatsby";

import Octicon, { MarkGithub } from "@githubprimer/octicons-react";

import { Container, MainLayout } from "../components/Layout";
import Button from "../components/Button";
import UserGrid from "../components/UserGrid";

const bgGray = { backgroundColor: "var(--gray)" };

const ButtonGroup = ({ children }) => (
  <div className="flex-ns justify-center">
    {children.map((child, i) => (
      <span key={i} className="w5 mt4 mh3">
        {child}
      </span>
    ))}
  </div>
);

const Main = () => (
  <MainLayout>
    {/* Usergrid + See All */}
    <Container>
      <div className="pv5">
        {/* <div className=" pb5">
          <h1 className="f2 fw7 lh-title db tc pb2">
            Find your next developer here.
          </h1>
          <p className="f4 lh-copy tc measure center">
            NOLES.DEV is a community of developers searching for their next big
            project.
          </p>
          <ButtonGroup>
            <Button style={bgGray} href={"/for/developers"} arrow>
              <span className="pl3">For Developers</span>
            </Button>
            <Button style={bgGray} href={"/for/recruiters"} arrow>
              <span className="pl3">For Recruiters</span>
            </Button>
            <Button style={bgGray} href={"/for/organizations"} arrow>
              <span className="pl3">For Student Groups</span>
            </Button>
          </ButtonGroup>
        </div> */}
        <UserGrid limit={8} />
        <Link to="/developers">
          <Button style={bgGray} arrow>
            <span>See all developers</span>
          </Button>
        </Link>
      </div>
    </Container>

    {/* Why NOLES.DEV */}
    <div
      id="about"
      className="pv5 white"
      style={{ backgroundColor: "var(--gray)" }}
    >
      <div className="mw8 ph4 center">
        <h3 className="f5 fw7 pv4 ttu tracked">About</h3>
        <div className="w-100 center mw9">
          <p className="f4 f3-m mt0 db w-100 f-subheadline-l lh-copy lh-title-l measure mb4 fw6">
            Bringing together the Florida State developer community.
          </p>
          <p className="w-100 mh0 mt0 pr0 pr3-l measure lh-copy f5 f4-l">
            FSU developers belong to different departments, colleges, and clubs.
            Our mission is to reach developers from across all of campus to find
            their next big project. From student groups to local businesses,
            there's a growing need for coders. Let's get out there and get to
            work.
          </p>
        </div>
      </div>
    </div>

    {/* Pitch */}
    <Container>
      <div className="center pv6">
        <div className="w-100 w-90-m w-70-l ph2 center contain relative">
          <h1 className="f2 fw7 tc mb4">Connect with recruiters and peers.</h1>
          <Button
            href={`${process.env.GATSBY_API_PREFIX}/oauth-init`}
            style={{
              backgroundColor: "var(--gray)",
            }}
          >
            <span className="ph2">
              <Octicon icon={MarkGithub} />
            </span>
            <span>Join with Github</span>
            <span className="ph2 graphik">→</span>
          </Button>
        </div>
      </div>
    </Container>
  </MainLayout>
);

export default Main;
