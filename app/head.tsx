export default function Head() {
  const banner = "https://rove-website.vercel.app/logos/amethyst-banner.png";
  const title =
    "Amethyst Realms | Next-Generation Minecraft Experience Creation Studio";
  const description =
    "At Amethyst Realms, creates Minecraft experiences that delight, like Rove. Rove is an open-world Minecraft zombie survival experience. Play now at play.amethystrealms.com.";

  return (
    <>
      {/* <!-- Primary Meta Tags --> */}
      <title>
        Amethyst Realms | Next-Generation Minecraft Experience Creation Studio
      </title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="https://metatags.io/"> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={banner} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={banner} />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
