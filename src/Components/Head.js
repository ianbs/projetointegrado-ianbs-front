import Head from "next/head";

export default function HeadPage({ pageTitle }) {
  return (
    <Head>
      <title>
        {pageTitle} SGCC - Sistema de Gestão de Clinica e Consultórios
      </title>
      <meta
        name="description"
        content="SGCC - Sistema de Gestão de Clinica e Consultórios"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      ></link>
    </Head>
  );
}
