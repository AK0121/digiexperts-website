import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      {/* Favicon + Theme */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#0f172a" />

      {/* Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "LocalBusiness",
            name: "DigiExperts",
            image: "https://digiexperts.solutions/images/digiexperts-mockup.png",
            "@id": "https://digiexperts.solutions",
            url: "https://digiexperts.solutions",
            telephone: "+916350617334",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Central Tower, Vidhyadhar Nagar",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              postalCode: "302039",
              addressCountry: "IN",
            },
            description:
              "Professional websites, landing pages, Facebook ads & Meta marketing for businesses in Jaipur and across India.",
            sameAs: [
              "https://instagram.com/digiexperts_info",
              "https://www.facebook.com/profile.php?id=61577597884573"
            ],
          }),
        }}
      />
    </Head>
  );
};

export default CustomHead;
