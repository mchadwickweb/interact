import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Metadata, SocialSharing } from "../components/Meta";

interface PageLayoutProps {
  children: React.ReactNode;
  meta: Metadata;
}

export default function PageLayout({ children, meta }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.canonical ? <link rel="canonical" href={meta.canonical} /> : null}
        <SocialSharing
          title={meta.title}
          description={meta.description}
          canonical={meta.canonical}
        />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
