import styles from "./PostHeader.module.scss";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const PostHeader = ({ post }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return (
    <div className={styles.wrapper}>
      {post.thumbnail && (
        <img
          src={post.thumbnail.url}
          alt={post.title}
          className={styles.thumbnail}
        />
      )}
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.tags}>
        {post.tag.map((item, index) => {
          return (
            <div key={index} className={styles.tag}>
              {item}
            </div>
          );
        })}
      </div>
      <div className={styles.revisedAt}>
        最終更新日:
        {dayjs.utc(post.rivisedAt).tz("Asia/Tokyo").format("YYYY-MM-DD")}
      </div>
    </div>
  );
};

export default PostHeader;
