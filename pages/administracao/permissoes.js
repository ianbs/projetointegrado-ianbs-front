import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../src/Components/Head";
import SidebarComponent from "../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../src/Components/Header";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Permissoes() {
	const router = useRouter();

	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	return (
		<div className="">
			<HeadPage pageTitle={"[Adminisração]"} />
			<SidebarComponent
				ativo={"administracao"}
				subitem={"permissoes"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Administração - Definir Permissão de Usuário"}
				></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control form-control-sm"
									placeholder="Procurar usuarios"
								/>
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-addon2"
								>
									Procurar
								</button>
							</div>
							<div className="d-flex">
								<div style={{ height: "70vh" }} className="card overflow">
									<Link href={`/atendimentos/exames/`} replace>
										<a
											className="list-group-item list-group-item-action text-break"
											aria-current="true"
										>
											<div className="d-flex w-100 justify-content-between align-items-center">
												<h6 className="mb-1">
													<label>Nome: usuario</label>
													<br />
													<small>Usuário: usuarios</small>
												</h6>
												<small>
													<label>Permissão: ADMIN</label>
												</small>
											</div>
										</a>
									</Link>
								</div>
								<div style={{ height: "70vh" }} className="card h-100">
									<div className="overflow mb-4 p-2">
										<h6 className="m-3">
											Adicionar/Alterar Permissão de Usuário
										</h6>
										<form>
											<div className="mb-1 col">
												<label
													htmlFor="usuario"
													className="form-label form-label-sm"
												>
													Usuário
												</label>
												<input
													type="text"
													{...register("usuario")}
													name="usuario"
													className="form-control form-control-sm"
													id="usuario"
												/>
											</div>
											<div className="mb-1 col">
												<label
													htmlFor="tipoConsulta"
													className="form-label form-label-sm"
												>
													Permissões
												</label>
												<select
													className="form-select form-select-sm"
													aria-label=".form-select-sm example"
													{...register("item")}
												>
													<option value={0}>Admin</option>
													<option value={1}>Colaborador</option>
													<option value={2}>Médico</option>
												</select>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MainContent>
			</Main>
		</div>
	);
}

export async function getServerSideProps(ctx) {
	const { projintegtoken: token } = parseCookies(ctx);
	if (!token) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return {
		props: {},
	};
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
