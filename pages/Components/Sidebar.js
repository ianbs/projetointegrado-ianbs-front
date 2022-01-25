import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function SidebarComponent({ ativo, subitem }) {
	const [atendimentoCollapse, setAtendimentoCollapse] = useState(false);
	const [cadastroCollapse, setCadastroCollapse] = useState(false);

	return (
		<Sidebar>
			<div className="sidebar-brand">
				<h1>
					<span className="las la-stethoscope"></span> SGCC
				</h1>
			</div>
			<div className="sidebar-profile">
				<Image
					src="https://randomuser.me/api/portraits/men/73.jpg"
					width={"100px"}
					height={"100px"}
					className="profile-photo"
					alt="profile photo"
				></Image>
				<h3>Jonh Doe</h3>
				<small>Super Admin</small>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li>
						<Link href={`/`}>
							<a
								onClick={() => {
									setAtendimentoCollapse(false);
									setCadastroCollapse(false);
								}}
								className={ativo === "inicio" ? "active" : ""}
							>
								<i className="las la-home"></i>
								Início
							</a>
						</Link>
					</li>
					<li>
						<a
							onClick={() => {
								setAtendimentoCollapse(true);
								setCadastroCollapse(false);
							}}
							className={ativo === "atendimento" ? "active" : ""}
						>
							<i className="las la-comment-medical"></i>
							Atendimentos
						</a>

						<ul
							className={
								atendimentoCollapse
									? "subitem-menu show"
									: "subitem-menu hidden"
							}
						>
							<li>
								<Link href={`/atendimentos/consultas`}>
									<a
										className={subitem === "consulta" ? "sub-item-active" : ""}
									>
										Consultas
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/atendimentos/exames`}>
									<a className={subitem === "exames" ? "sub-item-active" : ""}>
										Exames
									</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<a
							onClick={() => {
								setCadastroCollapse(true);
								setAtendimentoCollapse(false);
							}}
							className={ativo === "cadastros" ? "active" : ""}
						>
							<i className="las la-users"></i>
							Cadastros
						</a>
						<ul
							className={
								cadastroCollapse ? "subitem-menu show" : "subitem-menu hidden"
							}
						>
							<li>
								<Link href={`/cadastros/convenios`}>
									<a
										className={subitem === "convenio" ? "sub-item-active" : ""}
									>
										Convênios
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/cadastros/medicos`}>
									<a className={subitem === "medico" ? "sub-item-active" : ""}>
										Médicos
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/cadastros/pacientes`}>
									<a
										className={subitem === "pacientes" ? "sub-item-active" : ""}
									>
										Pacientes
									</a>
								</Link>
							</li>
							<li>
								<Link href={`/cadastros/usuarios`}>
									<a
										className={subitem === "usuarios" ? "sub-item-active" : ""}
									>
										Usuários
									</a>
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link href={`/financeiro`}>
							<a className={ativo === "financeiro" ? "active" : ""}>
								<i className="las la-hand-holding-usd"></i>
								Financeiro
							</a>
						</Link>
					</li>
					<li>
						<Link href={`/administracao`}>
							<a className={ativo === "administracao" ? "active" : ""}>
								<i className="las la-suitcase"></i>
								Administração
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</Sidebar>
	);
}

const Sidebar = styled.aside`
	width: 250px;
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	background: var(--main-color);
	z-index: 100;
	.sidebar-profile {
		text-align: center;
		margin-bottom: 1.5rem;
		margin-top: 10px;
		h3 {
			margin-top: 1rem;
			margin-bottom: 1;
		}
		.profile-photo {
			border-radius: 50%;
		}
	}

	.sidebar-brand {
		height: 80px;
		padding: 1rem 0rem 1rem 1rem;
		text-align: center;
		font-size: 1.5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);

		span {
			display: inline-block;
			padding-right: 1rem;
		}
	}

	.sidebar-menu {
		margin-top: 1rem;
		font-size: 1rem;
		overflow: hidden;
		li {
			width: 100%;
			/* margin-bottom: 1rem; */

			padding-left: 1rem;
			.active {
				background: var(--text-grey);
				padding-top: 0.8rem;
				padding-bottom: 0.8rem;
				color: var(--white);
				border-radius: 1rem 0 0 1rem;
			}
			.sub-item-active {
				background: var(--white);
				color: var(--text-grey);
				border-radius: 1rem 0 0 1rem;
			}
			.subitem-menu {
				width: 100%;
				height: 100%;
				a {
					padding-top: 0.8rem;
					padding-bottom: 0.8rem;
				}
			}
		}

		.hidden {
			display: none;
		}

		.show {
			display: block;
		}

		a {
			display: block;
			padding-left: 1rem;
			text-decoration: none;
			padding-top: 0.8rem;
			padding-bottom: 0.8rem;
			color: var(--color-dark);
			&:first-child {
				font-size: 1rem;
				padding-right: 1.5rem;
			}
			&:hover {
				background-color: var(--text-grey);
				padding-top: 1rem;
				padding-bottom: 1rem;
				color: var(--white);
				border-radius: 1rem 0 0 1rem;
			}
		}
		i {
			&:first-child {
				font-size: 1.2rem;
				padding-right: 1.5rem;
			}
		}
	}
`;
