import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

export default function PostId({ post }) {
  return (
    <>
      <Header />
      <Post post={post} />
      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://lonsan-salesforce.microcms.io/api/v1/post",
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  const paths = data.contents.map((content) => `/post/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY },
  };
  const data = await fetch(
    "https://lonsan-salesforce.microcms.io/api/v1/post/" + id,
    key
  )
    .then((res) => res.json())
    .catch(() => null);
  return {
    props: {
      post: data,
    },
  };
};
