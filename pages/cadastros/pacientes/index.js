/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import Link from "next/link";
import { api } from "../../../services/api";

export default function Pacientes() {
	const { push } = useRouter();
	const [pacientes, setPacientes] = useState([]);

	const handlePacientes = async () => {
		await api.get("/api/pacientes/").then((resposta) => {
			setPacientes(resposta.data);
		});
	};

	const deletePaciente = async ({ id }) => {
		console.log(id);
		await api
			.delete(`/api/pacientes/${id}`)
			.then(push("/cadastros/pacientes/"));
	};

	useEffect(() => {
		handlePacientes();
	}, []);

	return (
		<div className="">
			<HeadPage pageTitle={"[Pacientes]"} />
			<SidebarComponent
				ativo={"cadastros"}
				subitem={"pacientes"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={"Cadastros - Pacientes"}></HeaderComponent>
				<MainContent>
					<div className="d-flex justify-content-between top-container mb-4">
						<Link href={`/cadastros/pacientes/add`} replace>
							<button type="button" className="btn btn-sm btn-outline-primary">
								Novo Paciente
							</button>
						</Link>
					</div>
					<div className="card">
						<div className="card-body">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control form-control-sm"
									placeholder="Procurar paciente..."
								/>
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-addon2"
								>
									Procurar
								</button>
							</div>
							<div className="list-search overflow-auto">
								<div className="list-group">
									{pacientes.map((paciente) => (
										<Link
											key={paciente.id}
											href={`/cadastros/pacientes/${paciente.id}`}
											replace
										>
											<a
												className="list-group-item list-group-item-action text-break"
												aria-current="true"
											>
												<div className="d-flex w-100 justify-content-between align-items-center">
													<h6 className="mb-1">
														<label>Nome: {paciente.nome}</label>
														<br />
														<small>CPF: {paciente.cpf}</small>
													</h6>
												</div>
												<div className="d-flex w-100 justify-content-between align-items-center">
													<p className="mb-1">
														<label>CNS: {paciente.cartaoNacionalSaude}</label>
														<br />
													</p>
													<small>
														<div
															className="btn-group btn-group-sm"
															role="group"
															aria-label="Basic outlined example"
														>
															<Link
																href={`/cadastros/pacientes/edit/${user.id}`}
																replace
															>
																<a
																	type="button"
																	className="btn btn-outline-secondary"
																>
																	Editar
																</a>
															</Link>
															<button
																type="button"
																onClick={(e) => {
																	e.preventDefault;
																	deletePaciente(user);
																}}
																className="btn btn-outline-danger"
															>
																Excluir
															</button>
														</div>
													</small>
												</div>
											</a>
										</Link>
									))}
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
	margin-top: 50px;
	padding: 2rem 1.5rem;
	background: var(--white);
	min-height: calc(100vh - 90px);
	.card {
		width: 100%;
	}
	.list-search {
		height: 60vh;
	}
	.btn-group {
		width: 100%;
	}
`;
