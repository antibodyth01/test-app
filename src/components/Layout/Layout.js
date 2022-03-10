import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

const Layout = ({ children}) => {
 

  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
      </header>

      <main className={styles.main}>{children}</main>

    </div>
  );
};

export default Layout;
