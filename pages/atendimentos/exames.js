import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import nookies, { parseCookies } from "nookies";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";

export default function Exames() {
	const router = useRouter();

	return (
		<div className="">
			<HeadPage pageTitle={"[Exames]"} />
			<SidebarComponent
				ativo={"atendimento"}
				subitem={"exames"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={"Atendimentos - Exames"}></HeaderComponent>
				<MainContent>Exames</MainContent>
			</Main>
		</div>
	);
}

const Main = styled.main`
	margin-left: 345px;
`;

const MainContent = styled.main`
	margin-top: 80px;
	padding: 2rem 1.5rem;
	background: var(--white);
	min-height: calc(100vh - 90px);
`;
