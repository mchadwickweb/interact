import PageLayout from "../layouts/PageLayout";

export default function Website() {
  const meta = {
    title: "Web development specialists - Interact Digital Studio",
    description:
      "We are a digital agency that focuses on building amazing websites that convert visitors into leads for B2B businesses. We offer web design, development, SEO development, CMS and CRM development.",
    canonical: "https://www.interactstudio.co.uk",
  };

  return (
    <PageLayout meta={meta}>
      <h1>Web</h1>
    </PageLayout>
  );
}
