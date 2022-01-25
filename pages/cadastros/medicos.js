import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import nookies, { parseCookies } from "nookies";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";

export default function Medico() {
	const router = useRouter();

	return (
		<div className="">
			<HeadPage pageTitle={"[Médico]"} />
			<SidebarComponent
				ativo={"cadastros"}
				subitem={"medico"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={"Cadastros - Médicos"}></HeaderComponent>
				<MainContent>Médico</MainContent>
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
