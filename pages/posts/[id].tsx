/*
 * @Date: 2023-01-13 17:31:43
 * @LastEditors: Lamwolff wangning13@corp.netease.com
 * @LastEditTime: 2023-01-17 10:33:39
 * @FilePath: /yanxuan-ic-plan-web/home/netease/core/nextjs-blog/pages/posts/[id].tsx
 * @Description: 
 * @Author: Lamwolff wangning13@corp.netease.com
 */
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
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