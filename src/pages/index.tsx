import Head from "next/head";
import { getSortedPostsData } from "../lib/post";

import Layout, { siteTitle } from "../components/Layout/index";
import utilStyles from "../styles/utils.module.css";

export default function Home ({ postData }) {
  return (
    <Layout isHome>
      <Head>
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
          {postData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  const postData = getSortedPostsData();

  return {
    props: {
      postData,
    },
  };
}

