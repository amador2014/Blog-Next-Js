import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { Client } from "../../../prismic-configuration";

import Date from "../../components/Date";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

interface PostDataProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export default function Post({ postData }: PostDataProps) {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  const reactPosts = await Client().query(
    Prismic.Predicates.at("document.type", "tecnical_content")
  );

  const nextPosts = await Client().query(
    Prismic.Predicates.at("document.type", "nextjs")
  );

  console.log(params)

  return {
    props: {
      postData
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
