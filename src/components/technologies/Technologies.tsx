import styles from "./Technologies.module.css";
import { motion } from "framer-motion";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode, FaReact, FaSass } from "react-icons/fa";

import {
  SiBabel,
  SiEslint,
  SiPostman,
  SiPrettier,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";
import { Technology } from "./technology/Technology";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const technologies1 = [
  {
    icon: <RiJavascriptFill size={70} />,
    description: "JavaScript",
  },
  {
    icon: <BiLogoTypescript size={70} />,
    description: "TypeScript",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="60px"
        height="60px"
        x="0"
        y="0"
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M299.775 512c-68.38 0-132.667-26.629-181.02-74.98C70.403 388.667 43.774 324.38 43.774 256s26.628-132.667 74.98-181.02C167.107 26.629 231.395 0 299.775 0 353.959 0 405.76 16.738 449.58 48.405c20.144 14.557 24.673 42.688 10.115 62.831s-42.688 24.671-62.83 10.115C368.483 100.841 334.911 90 299.775 90c-91.533 0-166 74.467-166 166s74.467 166 166 166c35.136 0 68.708-10.841 97.09-31.352 20.142-14.555 48.272-10.029 62.83 10.115s10.028 48.274-10.115 62.831C405.76 495.262 353.959 512 299.775 512z"
            fill="#ebebeb"
            data-original="#000000"
          ></path>
        </g>
      </svg>
    ),
    description: "C",
  },
  {
    icon: (
      <svg
        viewBox="0,0,255.98959,255.98959"
        width="70px"
        height="70px"
        fillRule="nonzero"
      >
        <g
          fill="#ebebeb"
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
          textAnchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-0.71484,0 -1.42578,0.17969 -2.06641,0.53906l-16.84375,9.46484c-1.28125,0.72266 -2.08984,2.07031 -2.08984,3.53125v18.92969c0,1.46484 0.80859,2.8125 2.08984,3.53516l16.84375,9.46094c1.28125,0.72266 2.85156,0.72266 4.13281,0l16.84375,-9.46094c1.28516,-0.72266 2.08984,-2.07422 2.08984,-3.53516v-18.92969c0,-1.46094 -0.80859,-2.80859 -2.08984,-3.53125l-16.84375,-9.46484c-0.64062,-0.35937 -1.35156,-0.53906 -2.06641,-0.53906zM25,4c0.375,0 0.75391,0.09375 1.08984,0.28125l16.84375,9.46484c0.66797,0.37891 1.06641,1.05859 1.06641,1.78906v8.46484h-2v-2h-2v2h-2v2h2v2h2v-2h2v8.46484c0,0.73047 -0.39844,1.41016 -1.07031,1.78906l-16.83984,9.46484c-0.67187,0.375 -1.50781,0.375 -2.17969,0l-16.83984,-9.46484c-0.67187,-0.37891 -1.07031,-1.05469 -1.07031,-1.78906v-18.92969c0,-0.73047 0.39844,-1.41016 1.07031,-1.78906l16.83984,-9.46484c0.33594,-0.1875 0.71484,-0.28125 1.08984,-0.28125zM25,12c-7.16016,0 -13,5.83984 -13,13c0,7.16016 5.83984,13 13,13c4.08984,0 7.88672,-1.90625 10.33984,-5.13672l0.68359,-0.90234l-6.05469,-3.50781l-0.54687,0.59375c-1.12891,1.23438 -2.73047,1.95313 -4.42187,1.95313c-3.31641,0 -6,-2.68359 -6,-6c0,-3.31641 2.68359,-6 6,-6c1.69141,0 3.29297,0.71875 4.42188,1.95313l0.54688,0.59375l6.05469,-3.50781l-0.68359,-0.90234c-2.45312,-3.23047 -6.25,-5.13672 -10.33984,-5.13672zM25,14c3.07422,0 5.88672,1.31641 7.94531,3.51172l-2.74219,1.58594c-1.44531,-1.26562 -3.24219,-2.09766 -5.20312,-2.09766c-4.40234,0 -8,3.59766 -8,8c0,4.40234 3.59766,8 8,8c1.96094,0 3.75781,-0.83203 5.20313,-2.09766l2.74219,1.58594c-2.05859,2.19531 -4.87109,3.51172 -7.94531,3.51172c-6.07422,0 -11,-4.92578 -11,-11c0,-6.07422 4.92578,-11 11,-11zM33,22v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></path>
          </g>
        </g>
      </svg>
    ),
    description: "C++",
  },
  {
    icon: (
      <svg
        width="70px"
        height="70px"
        viewBox="0 -58 256 256"
        version="1.1"
        preserveAspectRatio="xMidYMid"
        fill="#EBEBEB"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path
              d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
              fill="#EBEBEB"
            >
              {" "}
            </path>{" "}
            <path
              d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
              fill="#f50521"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    description: "react-router",
  },
  {
    icon: <FaReact size={70} />,
    description: "React",
  },

  {
    icon: <SiRedux size={65} />,
    description: "Redux",
  },
  {
    icon: <FaSass size={70} />,
    description: "Sass",
  },
  {
    icon: (
      <svg
        width="70px"
        height="70px"
        viewBox="0 -31.5 256 256"
        version="1.1"
        preserveAspectRatio="xMidYMid"
        fill="#EBEBEB"
        // stroke="#EBEBEB"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path
              d="M192.440223,144.644612 L224.220111,144.644612 L224.220111,68.3393384 L188.415329,32.5345562 L165.943007,55.0068785 L192.440223,81.5040943 L192.440223,144.644612 L192.440223,144.644612 Z M224.303963,160.576482 L178.017688,160.576482 L113.451687,160.576482 L86.954471,134.079266 L98.1906322,122.843105 L120.075991,144.728464 L165.104487,144.728464 L120.746806,100.286931 L132.06682,88.9669178 L176.4245,133.324599 L176.4245,88.2961022 L154.622994,66.4945955 L165.775303,55.3422863 L110.684573,0 L56.3485097,0 L56.3485097,0 L0,0 L31.6960367,31.6960367 L31.6960367,31.7798886 L31.8637406,31.7798886 L97.4359646,31.7798886 L120.662954,55.0068785 L86.7029152,88.9669178 L63.4759253,65.7399279 L63.4759253,47.7117589 L31.6960367,47.7117589 L31.6960367,78.9046839 L86.7029152,133.911562 L64.3144448,156.300033 L100.119227,192.104815 L154.45529,192.104815 L256,192.104815 L256,192.104815 L224.303963,160.576482 L224.303963,160.576482 Z"
              fill="#EBEBEB"
            >
              {" "}
            </path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    description: "WebSocket",
  },
  {
    icon: <FaNode size={70} />,
    description: "NodeJS",
  },
  {
    icon: <SiPostman size={70} />,
    description: "Postman",
  },
  {
    icon: <SiStyledcomponents size={70} />,
    description: "styled-components",
  },
  {
    icon: <SiTailwindcss size={70} />,
    description: "Tailwind",
  },
  {
    icon: (
      <img
        width={70}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        alt="logo"
      />
    ),
    description: "Ant-Design",
  },
  {
    icon: <SiWebpack size={70} />,
    description: "Webpack",
  },
  {
    icon: <SiBabel size={70} />,
    description: "Babel",
  },
  {
    icon: <SiEslint size={70} />,
    description: "Eslint",
  },
  {
    icon: <SiPrettier size={70} />,
    description: "Prettier",
  },
];

export const Technologies = () => {
  const width = window.innerWidth;

  return (
    <section id="technologies" className={styles.section}>
      {width <= 1100 ? (
        <div className={styles.block}>
          {technologies1.map((technology) => {
            return (
              <Technology
                key={technology.description}
                icon={technology.icon}
                description={technology.description}
              />
            );
          })}
        </div>
      ) : (
        <>
          <div className={styles.block}>
            {technologies1.slice(0, 9).map((technology) => {
              return (
                <Technology
                  key={technology.description}
                  icon={technology.icon}
                  description={technology.description}
                />
              );
            })}
          </div>
          <div className={styles.block}>
            {technologies1.slice(9).map((technology) => {
              return (
                <Technology
                  key={technology.description}
                  icon={technology.icon}
                  description={technology.description}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};
