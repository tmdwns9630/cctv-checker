import type { NextPage } from "next";
import Layout from "../components/Layout";
import Map from "../components/map";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout title="CCTV MAP">
      <div>
        <div>홈페이지</div>
        <Map />
      </div>
    </Layout>
  );
};

export default Home;
