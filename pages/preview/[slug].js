import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

export default function Preview({ post }) {
  if (!post) {
    return <div>エラー</div>;
  }
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
  const paths = [];
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const draftKey = context.previewData.draftKey;
  const data = await fetch(
    `https://lonsan-salesforce.microcms.io/api/v1/post/${slug}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ""
    }`,
    { headers: { "X-API-KEY": process.env.API_KEY || "" } }
  ).then((res) => res.json());
  return {
    props: {
      post: data,
    },
  };
};
