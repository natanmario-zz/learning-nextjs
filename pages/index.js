import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
