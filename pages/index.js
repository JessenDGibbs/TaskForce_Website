import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import SmallCard from "../components/SmallCard";
import Chip from "@material-ui/core/Chip";
import MobileCard from "../components/MobileCard";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
// import dbConnect from "../utils/dbConnect";
// import Article from "../models/article";
import useWitdh from "../hooks/useWidth";
import { getArticles } from "./api/articles/index";

const useStyles = makeStyles((theme) => ({
  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",

    textAlign: "left",

    textAlign: "center",
    alignSelf: "center",
    maxWidth: "100%",
  },
  copy: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontSize: 18,
    textAlign: "left",
    marginTop: 1,

    textAlign: "center",
    fontWeight: 300,
    width: "80%",
  },
  copyWrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    width: "80vw",
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
    padding: 10,
  },
  chip: {
    marginRight: 15,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: 11,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  smallCardWrapper: {
    display: "flex",
    width: "80vw",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}));

export default function Home({ articles }) {
  // const [articles, setArticles] = useState([]);
  const classes = useStyles();
  const { width, setWidth } = useWitdh();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  if (width == 0) {
    return null;
  }

  if (width < 1000) {
    return (
      <div>
        <Head>
          <title>To the Core</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <h1
            style={{ fontSize: width < 500 ? 50 : 22 }}
            className={classes.title}
          >
            Core Issues, Real Analysis.
          </h1>
          <h2 className={classes.copy}>A New Type of Journalism</h2>

          <MobileCard />
        </Layout>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>To the Core</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <div className={classes.copyWrapper}>
            {/* <h1
              style={{ fontSize: width < 500 ? 50 : 16 }}
              className={classes.title}
            >
              Core Issues, Real Analysis.
            </h1> */}
            <div className={classes.chipArray}>
              <Chip
                size="small"
                color="primary"
                label={"Social Policy"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Law"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"British Imperialism"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Education"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Economy"}
                className={classes.chip}
              />
              <Chip
                size="small"
                color="primary"
                label={"Finance"}
                className={classes.chip}
              />
            </div>
            {/* <h2 className={classes.copy}>A New Type of Journalism</h2> */}
          </div>
          {/* <Card article={articles[articles.length - 1]} /> */}
          <div className={classes.smallCardWrapper}>
            {articles.map((article) => {
              return <SmallCard article={article} />;
            })}
          </div>
        </Layout>
      </div>
    );
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const result = await getArticles();
  const articles = result.map((article) => {
    article = article.toObject();
    article._id = article._id.toString();
    article.created_at = article.created_at.toString();
    article.created_at = article.updated_at.toString();
  });

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      articles: articles,
    },
  };
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:3000/api/articles`);
//   const result = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       articles: result.data,
//     },
//   };
// }
