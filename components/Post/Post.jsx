import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import styles from "./Post.module.scss";
import Balloon from "../../components/Post/Balloon/Balloon";
import PostHeader from "../../components/Post/PostHeader/PostHeader";
import Richeditor from "../../components/Post/Richeditor/Richeditor";

const Post = ({ post }) => {
  return (
    <div className={styles.container}>
      <PostHeader post={post} />
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
