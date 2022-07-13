import { Metadata } from ".";

export default function SocialSharing({
  title,
  description,
  canonical,
}: Metadata) {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:image"
        content="https://interactstudio.co.uk/social.png"
      />
      <meta
        property="og:image:alt"
        content="Interact Digital Studio Social Sharing Image"
      />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="interactstudio.co.uk" />
      <meta property="twitter:url" content={canonical} />
      <meta name="twitter:site" content="@heyinteract" />
      <meta name="twitter:creator" content="@heyinteract" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://interactstudio.co.uk/social.png"
      />
      <meta
        name="twitter:image:alt"
        content="Interact Digital Studio Social Sharing Image"
      />
    </>
  );
}
