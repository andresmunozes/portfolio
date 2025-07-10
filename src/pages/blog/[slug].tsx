// Ubicación: src/pages/blog/[slug].tsx

import { getAllPostSlugs, getPostData } from '@/utils/getPosts';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '@/Layout/Main.Layout';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image'; // <-- IMPORTAMOS EL COMPONENTE DE IMAGEN

type PostProps = {
  source: MDXRemoteSerializeResult;
  frontmatter: { [key: string]: any };
};

const Post = ({ source, frontmatter }: PostProps) => {
  return (
    <Layout>
      <article className="prose prose-invert lg:prose-xl mx-auto py-10 px-5">
        
        {/* === IMAGEN DE PORTADA AÑADIDA AQUÍ === */}
        <div className="w-full mb-8">
          <Image
            alt={frontmatter.title}
            src={frontmatter.cover_image}
            width={420}
            height={270} // Ajusta este valor según tu necesidad
            className="rounded-lg"
            layout="contain"
            objectFit="contain"
            />
          </div>
        {/* ======================================= */}
        
        <h1 className="text-text">{frontmatter.title}</h1>
        <div className="text-gray-400">{frontmatter.date}</div>
        <hr className="my-4 border-gray-600" />
        <div className="prose-p:text-textDark prose-h2:text-text prose-h3:text-text prose-strong:text-text">
          <MDXRemote {...source} />
        </div>
      </article>
    </Layout>
  );
};

export default Post;

// --- Las funciones de abajo se mantienen igual ---

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as { slug: string };
  const { content, frontmatter } = await getPostData(slug);
  const mdxSource = await serialize(content);
  return {
    props: {
      source: mdxSource,
      frontmatter,
    },
  };
}