import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import nookies, { parseCookies } from "nookies";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";

export default function Consultas() {
	const router = useRouter();

	return (
		<div className="">
			<HeadPage pageTitle={"[Financeiro]"} />
			<SidebarComponent
				ativo={"financeiro"}
				subitem={"faturaconsulta"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Financeiro - Faturamento - Consultas"}
				></HeaderComponent>
				<MainContent>Faturamento Consultas</MainContent>
			</Main>
		</div>
	);
}

const Main = styled.main`
	margin-left: 260px;
`;

const MainContent = styled.main`
	margin-top: 80px;
	padding: 2rem 1.5rem;
	background: var(--white);
	min-height: calc(100vh - 90px);
	display: flex;
	.card {
		width: 100%;
	}
	.list-search {
		height: 70vh;
	}
	.btn-group {
		width: 100%;
	}
`;
