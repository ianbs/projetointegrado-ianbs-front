/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import FormModal from "../../../src/Components/FormModalConsulta";
import Link from "next/link";

export default function Consultas() {
	const [consultas, setConsultas] = useState([
		{
			id: 1,
			paciente: "Gris Gerwood",
			medico: "Graig Matheson",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Gelato Topical Anesthetic",
		},
		{
			id: 2,
			paciente: "Stephine Kitcherside",
			medico: "Maynord Demcik",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Perfect Truth cc Broad Spectrum SPF 30",
		},
		{
			id: 3,
			paciente: "Wilhelmine Epp",
			medico: "Wini Cattini",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Amlodipine besylate and Atorvastatin calcium",
		},
		{
			id: 4,
			paciente: "Rodie Fremantle",
			medico: "Tiphani Vogele",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Meperidine HCl",
		},
		{
			id: 5,
			paciente: "Genevieve Crab",
			medico: "Fergus Millwall",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Oxytocin",
		},
		{
			id: 6,
			paciente: "Genevieve Crab",
			medico: "Fergus Millwall",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Oxytocin",
		},
		{
			id: 7,
			paciente: "Genevieve Crab",
			medico: "Fergus Millwall",
			dataAtendimento: "2022-01-26T00:00:00.000Z",
			especialidade: "Oxytocin",
		},
	]);
	const [showModal, setShowModal] = useState(false);
	const [tipoModal, setTipoModal] = useState("");
	const [itemModal, setItemModal] = useState([]);

	const handleClickNovoAtendimento = () => {
		setShowModal(!showModal);
		setTipoModal("create");
	};

	const handleClickAlterarAtendimento = (item) => {
		setShowModal(!showModal);
		setTipoModal("alter");
		setItemModal(item);
	};

	const deleteConsulta = () => {
		console.log("delete");
	};

	return (
		<div className="">
			<HeadPage pageTitle={"[Consultas]"} />
			<SidebarComponent
				ativo={"atendimentos"}
				subitem={"consulta"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={"Atendimentos - Consultas"}></HeaderComponent>
				<MainContent>
					<div className="d-flex justify-content-between top-container mb-4">
						<Link href={`/atendimentos/consultas/add`} replace>
							<button type="button" className="btn btn-sm btn-outline-primary">
								Nova Consulta
							</button>
						</Link>
					</div>
					<div className="card">
						<div className="card-body">
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control form-control-sm"
									placeholder="Procurar atendimento"
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
									{consultas.map((consulta) => (
										<Link
											key={consulta.id}
											href={`/atendimentos/consultas/${consulta.id}`}
											replace
										>
											<a
												className="list-group-item list-group-item-action text-break"
												aria-current="true"
											>
												<div className="d-flex w-100 justify-content-between align-items-center">
													<h6 className="mb-1">
														<label>Nome: {consulta.paciente}</label>
														<br />
														<small>Usuário: {consulta.medico}</small>
													</h6>
												</div>
												<div className="d-flex w-100 justify-content-between align-items-center">
													<p className="mb-1">
														<label>Tipo: {consulta.especialidade}</label>
														<br />
														<label>Data: {consulta.dataAtendimento}</label>
													</p>
													<small>
														<div
															className="btn-group btn-group-sm"
															role="group"
															aria-label="Basic outlined example"
														>
															<Link
																href={`/atendimentos/consultas/edit/${consulta.id}`}
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
																	deleteConsulta(user);
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
