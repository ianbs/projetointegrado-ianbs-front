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

		</Head>
	);
}
