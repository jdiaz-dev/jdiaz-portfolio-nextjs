"use client";
import { makeStyles } from "tss-react/mui";

const styles = makeStyles()(() => {
  return {
    ornament: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      paddingTop: "24%",
    },
    verticalOrnament: {
      height: "50%",
      borderLeft: "1px solid rgb(212, 202, 202)",
      margin: "0 auto",
    },
    techIcons: {
      listStyle: "none",
      textAlign: "center",
    },
    techIconItem: {
      fontSize: "150%",
      marginBottom: "11px",
    },
  };
});

function TechOrnamentsLeft() {
  const { classes } = styles();

  const icons = [
    "fab fa-aws",
    "fab fa-node-js",
    "fab fa-js",
    "fab fa-cloudflare",
  ];
  return (
    <div
      className={classes.ornament}
      style={{
        position: "fixed",
        top: "0px",
        left: "5%",
      }}
    >
      <ul className={classes.techIcons}>
        {icons.map((icon, index) => (
          <li key={index} className={classes.techIconItem}>
            <i className={icon}></i>
          </li>
        ))}
      </ul>
      <div className={classes.verticalOrnament}></div>
    </div>
  );
}

function TechOrnamentsRight() {
  const { classes } = styles();
  const icons = [
    "fab fa-git",
    "fab fa-gitlab",
    "fas fa-database",
    "fab fa-git-alt",
  ];
  return (
    <div
      className={classes.ornament}
      style={{
        position: "fixed",
        right: "5%",
        display: "flex",
        paddingTop: "19%",
      }}
    >
      <ul className={classes.techIcons}>
        {icons.map((icon, index) => (
          <li key={index} className={classes.techIconItem}>
            <i className={icon}></i>
          </li>
        ))}
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="36"
            height="36"
            viewBox="0 0 172 172"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,172v-172h172v172z" fill="#0a192f"></path>
              <g fill="#d4caca">
                <path d="M78.83333,21.5v36.96712c-2.48683,-1.0105 -7.85355,-1.13379 -10.49805,-1.13379c-19.89467,0 -38.31087,9.35967 -38.31087,35.83333c0,31.67667 24.94392,35.83333 41.64225,35.83333c6.59333,0 21.5,-0.65116 28.66667,-2.72949v-104.77051zM114.66667,21.5v21.5h21.5v-21.5zM114.66667,57.33333v62.3584c0,10.86467 -6.60767,22.17367 -21.5,28.66667l20.49219,9.28027c20.82633,-7.16667 22.50781,-30.78027 22.50781,-37.94694v-62.3584zM71.45671,75.61393c2.29333,0 4.86829,0.42048 7.37663,0.99382v33.70573c-2.50833,0.57333 -5.0833,1.00781 -7.37663,1.00781c-9.38833,0 -18.49056,-2.96129 -18.49056,-18.15462c0,-15.19333 9.10223,-17.55274 18.49056,-17.55274z"></path>
              </g>
            </g>
          </svg>
        </li>
      </ul>
      <div className={classes.verticalOrnament}></div>
    </div>
  );
}

function TechOrnaments() {
  return (
    <div>
      <TechOrnamentsLeft />
      <TechOrnamentsRight />
    </div>
  );
}

export default TechOrnaments;
