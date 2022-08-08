import { useState } from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";
import Image from "next/image";

function MainLayout({ children }) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (bool) => {
    if (bool) {
      setIsShown(bool);
    } else {
      setIsShown(!isShown);
    }
  };

  return (
    <>
      <Head>
        <title>Planet Facts</title>
        <meta name="description" content="A website aut Planets" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <div className="relative">
        <Image
          src="/images/background-stars.svg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <Navbar handleOpen={handleClick} isShown={isShown} />
        {!isShown && <main className="relative z-30">{children}</main>}
      </div>
    </>
  );
}

export default MainLayout;
