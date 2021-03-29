import Head from "next/head";

import Layout from "../../components/Layout/index";

const FirstPost = () => {
  return (
    <Layout isHome={false}>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <p>Preparando conteúdo..</p>
    </Layout>
  );
};

export default FirstPost;
