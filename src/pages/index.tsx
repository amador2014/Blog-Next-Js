import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/Layout/index";
import utilStyles from "../styles/utils.module.css";

const Home = () => {
  return (
    <Layout isHome>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>this Post!</a>
          </Link>
        </h1>
        
        <p>Olá, me chamo Gabriel. Sou estudante e desenvolvedor frontend com foco em React e aqui você encontra conteúdos desse tipo.  =)</p>
        <p>
          [Esse site ainda está em desenvolvimento, logo mais estará pronto com muito 💙]
        </p>
      </section>
    </Layout>
  );
};

export default Home;
