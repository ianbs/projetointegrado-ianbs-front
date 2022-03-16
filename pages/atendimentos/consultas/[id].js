/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import { api } from "../../../services/api";
import { useFieldArray, useForm } from "react-hook-form";
import Link from "next/link";

export default function ColaboradorAlter() {
	const { register, control, reset } = useForm();
	const { query, push } = useRouter();
	const { id } = query;

	// const buscaUsuario = useCallback(() => {
	// 	api.get(`/api/colaborador/${id}`).then((response) => {
	// 		console.log(1);
	// 		reset(response.data);
	// 	});
	// }, [id, reset]);

	// useEffect(() => {
	// 	buscaUsuario();
	// }, [buscaUsuario]);

	return (
		<div className="">
			<HeadPage pageTitle={"[Consultas]"} />
			<SidebarComponent
				ativo={"atendimento"}
				subitem={"consulta"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={"Atendimentos - Consultas"}></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between top-container mb-4">
								<h6 className="">Consultas</h6>
								<Link href={`/atendimentos/consultas/`} passHref>
									<button
										type="button"
										className="btn btn-sm btn-outline-danger"
									>
										Voltar
									</button>
								</Link>
							</div>
							<div className="list-search overflow-auto border-top">
								<input type="hidden" name="id" {...register("id")} />
								<div className="mb-1 col">
									<label
										htmlFor="paciente"
										className="form-label form-label-sm"
									>
										Paciente
									</label>
									<input
										type="text"
										{...register("paciente")}
										name="paciente"
										className="form-control form-control-sm"
										id="paciente"
										disabled
									/>
								</div>

								<div className="mb-1 col">
									<label
										htmlFor="profissional"
										className="form-label form-label-sm"
									>
										Profissional
									</label>
									<input
										type="text"
										name="profissional"
										{...register("profissional")}
										className="form-control form-control-sm"
										id="profissional"
										disabled
									/>
								</div>
								<div className="mb-1 col">
									<label
										htmlFor="convenio"
										className="form-label form-label-sm"
									>
										Convênio
									</label>
									<input
										type="text"
										name="convenio"
										{...register("convenio")}
										className="form-control form-control-sm"
										id="convenio"
										disabled
									/>
								</div>
								<div className="mb-1 col">
									<label
										htmlFor="procedimento"
										className="form-label form-label-sm"
									>
										Procedimento
									</label>
									<input
										type="text"
										name="procedimento"
										{...register("procedimento")}
										disabled
										className="form-control form-control-sm"
										id="procedimento"
									/>
								</div>
								<div className="mb-1 col">
									<label
										htmlFor="tipoConsulta"
										className="form-label form-label-sm"
									>
										Tipo Consulta
									</label>
									<select
										className="form-select form-select-sm"
										aria-label=".form-select-sm example"
										{...register("tipoConsulta")}
										disabled
									>
										<option value={0}>Primeira Consulta</option>
										<option value={1}>Retorno</option>
										<option value={2}>Pré-Natal</option>
										<option value={3}>Encaminhamento</option>
									</select>
								</div>
								<div className="mb-1 col">
									<label
										htmlFor="tipoConsulta"
										className="form-label form-label-sm"
									>
										Indicação de Acidente
									</label>
									<select
										className="form-select form-select-sm"
										aria-label=".form-select-sm example"
										{...register("indicacaoAcidente")}
										disabled
									>
										<option value={0}>Não Acidente </option>
										<option value={1}>Pessoal</option>
										<option value={2}>Trabalho</option>
										<option value={3}>Transito</option>
										<option value={4}>Outros</option>
									</select>
								</div>
								<div className="mb-1 col">
									<label
										htmlFor="tipoConsulta"
										className="form-label form-label-sm"
									>
										Caracter de Atendimento
									</label>
									<select
										className="form-select form-select-sm"
										aria-label=".form-select-sm example"
										{...register("caracterAtendimento")}
										disabled
									>
										<option value={0}>Eletivo</option>
										<option value={1}>Urgencia</option>
									</select>
								</div>
								<div className="mb-4 col mt-4 form-check">
									<input
										type="checkbox"
										className="form-check-input"
										aria-label=".form-select-sm example"
										{...register("atendimentoRecemNascido")}
										disabled
									/>
									<label
										htmlFor="tipoConsulta"
										className="form-label form-label-sm"
									>
										Atendimento Recém-Nascido
									</label>
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
	margin-top: 60px;
	padding: 2rem 1.5rem;
	background: var(--white);
	min-height: calc(100vh - 90px);
	display: flex;
	align-items: center;
	justify-content: center;
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
