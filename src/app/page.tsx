/* eslint-disable @typescript-eslint/no-unused-vars */
import Landing from "@/components/Header/Landing";
import Navbar from "../components/Header/Navbar";
import Head from "next/head"; // Correct import
import Traveling from "@/components/Traveling/Traveling";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
      </Head>
      <main className="font-Cairo">
        <Landing />
        <Traveling/>
        <Services/>
      </main>
    </div>
  );
}
