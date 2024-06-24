import Head from 'next/head';

const metadata = {
  title: 'Oskar Herman Sollenberg - School Projects',
  description:
    'A showcase of my school projects, demonstrating my skills and knowledge in web development.',
};
//

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <div>{children}</div>
    </>
  );
}
