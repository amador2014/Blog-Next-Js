import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Date from "../../components/Date";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

interface IPostData {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export default function Post({
  postData,
}:IPostData ) {
  return (
    <Layout isHome={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  console.log(2);
  return {
    props: {
      postData,
    },
  };
};
