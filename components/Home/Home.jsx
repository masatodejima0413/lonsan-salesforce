import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/obsidian.css";
import styles from "./Home.module.scss";
import Richeditor from "../Post/Richeditor/Richeditor";
import Balloon from "../Post/Balloon/Balloon";

const Home = ({ home }) => {
  return (
    <div className={styles.container}>
      <img
        src={home.thumbnail.url}
        alt="ねこのSalesforceめも"
        className={styles.thumbnail}
      />
      {home.body.map((customField, index) => {
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

export default Home;
