require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    email: "OmarAwwad@google.com",
    name: "Omar Awwad",
    age: "24",
    phone: "+2 01116409608",
    education: "Bsc. Information Technology",
    speaks: "English/Arabic",
    university: "Eastern Mediterranean University (Northern Cyprus)",
    skills: [
      "html5",
      "css3",
      "sass",
      "git/github",
      "Javascript",
      "typescript",
      "react",
      "redux",
      "redux-saga",
      "redux-thunk",
      "gatsby",
      "next.js",
      "styled-components",
    ],
    learning: ["react-native", "vue.js"],
    aboutMe:
      "I have been playing with react for a little over 2 years after one of my college professors advised me to give it a try and I have been in love with it ever since. After I graduated in july 2019 with a Bachelor's degree in IT, I got a scholarship to pursue a master's degree in management information system. However after only one semester I decided to stop and work full-time instead.",
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
