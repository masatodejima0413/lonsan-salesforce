import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import styles from "./Post.module.scss";
import Balloon from "../../components/Post/Balloon/Balloon";
import PostHeader from "../../components/Post/PostHeader/PostHeader";
import Richeditor from "../../components/Post/Richeditor/Richeditor";
import TableOfContents from "./TableOfContents/TableOfContents";

const Post = ({ post }) => {
  let combinedToc = [];
  post.body.map((customField) => {
    if (customField.fieldId === "richeditor") {
      const $ = cheerio.load(customField.richeditor);
      const headings = $("h1,h2,h3").toArray();
      const toc = headings.map((data) => {
        return {
          text: data.children[0].data,
          id: data.attribs.id,
          name: data.name,
        };
      });
      combinedToc = [...combinedToc, ...toc];
    }
  });
  console.log(combinedToc);

  return (
    <div className={styles.container}>
      <PostHeader post={post} />
      <TableOfContents combinedToc={combinedToc} />
      {post.body.map((customField, index) => {
        switch (customField.fieldId) {
          case "richeditor":
            const $ = cheerio.load(customField.richeditor);
            $("pre code").each((_, elm) => {
              const result = hljs.highlightAuto($(elm).text());
              $(elm).html(result.value);
              $(elm).addClass("hljs");
            });
            return <Richeditor key={"key" + index} content={$.html()} />;

          case "balloon":
            return <Balloon key={"key" + index} balloonInfo={customField} />;
        }
      })}
    </div>
  );
};

export default Post;
