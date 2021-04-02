import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/Layout/index";
import Date from "../components/Date/index";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/post";

export default function Home({ allPostData }) {
  return (
    <Layout isHome>
      <Head>
        <meta name="keywords" content="Blog, FrontEnd" />
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Olá, me chamo Gabriel. Sou estudante e desenvolvedor frontend com foco
          em React e aqui você encontra conteúdos desse tipo. =)
        </p>
        <p>
          [Esse site ainda está em desenvolvimento, logo mais estará pronto com
          muito 💙]
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({ id, date, title, description, tags }) => (
            <li className={utilStyles.listItem} key={id}>
              <small className={utilStyles.lightText} style={{display: 'block'}}>
                {tags.map((tag:string) => `#${tag} `)}
              </small> 
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.grayText}>
                {description}
              </small>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData();

  return {
    props: {
      allPostData,
    },
  };
};
