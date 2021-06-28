import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from "./TableOfContents.module.scss";

const TableOfContents = ({ combinedToc }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>目次</label>
      <ul>
        {combinedToc.map((toc, index) => {
          return (
            <li key={index} className={styles.link} name={toc.name}>
              <AnchorLink href={`#${toc.id}`}>
                <a>{toc.text}</a>
              </AnchorLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContents;
