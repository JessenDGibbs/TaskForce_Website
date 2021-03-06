import Card from "@material-ui/core/Card";

import Chip from "@material-ui/core/Chip";

import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    display: "flex",
    minHeight: 500,
    justifyContent: "space-between",

    height: "100%",
    width: "80vw",
    "&:hover": {
      opacity: 0.8,
      cursor: "pointer",
    },
    padding: 0,
    marginBottom: 30,
    borderRadius: 10,
    boxShadow: "none",
  },

  innerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    flexWrap: "wrap",
    padding: 0,
    margin: 0,
  },
  imageContainer: {
    display: "flex",
    minHeight: 500,
    maxHeight: 500,
    width: "50%",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  image: {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "45%",
    margin: 0,
    height: "100%",
    marginLeft: 50,
    marginTop: 50,
  },

  title: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Playfair Display, serif",
    fontSize: "2.5vw",
    textAlign: "left",
    fontWeight: 700,
    margin: 0,
    padding: 0,
    width: "90%",
  },

  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
    marginLeft: 5,
  },
  author: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",

    margin: 0,
  },
  date: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "14px",
    margin: 0,
  },
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 300,
    fontSize: "14px",
    maxWidth: "90%",
    marginTop: 30,
  },
  chip: {
    marginRight: theme.spacing(1),
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 700,
    backgroundColor: "#E5E5E5",
  },
  chipArray: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "90%",
    marginTop: 20,
  },
  button: {
    marginTop: 25,
  },
}));

const Preview = React.forwardRef(
  ({ onClick, href, article, admin = false }, ref) => {
    const classes = useStyles();
    const [tags, setTags] = useState([]);

    console.log(article.tags);

    useEffect(() => {
      setTags(article.tags);
    }, [article]);

    return (
      <a href={href} onClick={onClick} ref={ref} className={classes.wrapper}>
        <Card className={classes.card}>
          {/* <CardContent className={classes.innerWrapper}> */}
          <div className={classes.content}>
            <div className={classes.details}>
              <h2 className={classes.author}>{article.author}</h2>
              <h2 className={classes.date}>{article.date}</h2>
            </div>
            <h1 className={classes.title}>{article.title}</h1>
            <p className={classes.description}>{article.description}</p>
            <div className={classes.chipArray}>
              {tags
                ? tags.map((tag) => {
                    return (
                      <Chip
                        size="small"
                        color="primary"
                        label={tag}
                        className={classes.chip}
                        key={tag}
                      />
                    );
                  })
                : null}
            </div>
          </div>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={article.image} />
          </div>
          {/* </CardContent> */}
        </Card>
      </a>
    );
  }
);

export default Preview;
