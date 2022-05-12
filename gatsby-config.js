require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/gatsby-portfolio",
  siteMetadata: {
    email: "OmarAwwad010@gmail.com",
    name: "Omar Awwad",
    age: "25",
    phone: "07435240816",
    education: "Msc. Artificial Intelligence",
    speaks: "English/Arabic",
    university: "Huddersfield University",
    // skills: [
    //   "Javascript",
    //   "typescript",
    //   "sass",
    //   "git/github",
    //   "react",
    //   "redux",
    //   "redux-saga",
    //   "redux-thunk",
    //   "gatsby",
    //   "next.js",
    //   "react-spring",
    //   "framer-motion",
    //   "styled-components",
    //   "material-ui",
    //   "webpack",
    // ],
    skills: [
      "python",
      "Html/Css",
      "javascript",
      "typescript",
      "react.js",
      "redux",
      "next.js",
      "matlab",
      "numpy",
      "pandas",
      "sci-kit-learn",
      "tensorflow",
      "git",
      "sql",
    ],
    // learning: ["Panda", "NumPy", "scikit-learn", "PyTorch", "MATLAB"], , , AWS
    learning: ["Node.js", "Mongo dB", "AWS"],
    // aboutMe:
    //   "I have been playing with react for a little over 2 years after one of my college professors advised me to give it a try and I have been in love with it ever since. After I graduated in july 2019 with a Bachelor's degree in IT, I got a scholarship to pursue a master's degree in management information system. However after only one semester I decided to stop and work full-time instead.",
    aboutMe:
    
      "I have worked on a few web projects as a freelancer during my university years, I also had summer training for 2 months during the last year of my undergraduate studies. I mainly used to work with MERN stack. However, I gradually acquired an interest in Artificial Intelligence which pushed me to pursue a master's degree in AI. I'm currently looking for work as a software engineer",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0zsg8vnc1b0z`,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
