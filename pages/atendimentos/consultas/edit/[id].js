/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../../src/Components/Head";
import SidebarComponent from "../../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../../src/Components/Header";
import { api } from "../../../../services/api";
import { useFieldArray, useForm } from "react-hook-form";
import EnderecoForm from "../../../../src/Components/EnderecoForm";
import Link from "next/link";

export default function ColaboradorAlter() {
	const { register, control, handleSubmit, reset } = useForm();
	const { query, push } = useRouter();
	const { id } = query;

	const handleConsultaAlterSubmit = async (data) => {
		await api
			.put(`/api/consultas/${id}`, data,{headers: {
				"Access-Control-Allow-Origin": '*'
			  }})
			.then(push("/atendimento/consultas/"));
	};

	const buscaUsuario = useCallback(() => {
		api.get(`/api/colaborador/${id}`,{headers: {
			"Access-Control-Allow-Origin": '*'
		  }}).then((response) => {
			console.log(1);
			reset(response.data);
		});
	}, [id, reset]);

	useEffect(() => {
		buscaUsuario();
	}, [buscaUsuario]);

	return (
		<div className="">
			<HeadPage pageTitle={"[Consultas]"} />
			<SidebarComponent
				ativo={"atendimentos"}
				subitem={"consultas"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Atendimentos - Consultas [Alterar]"}
				></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between top-container mb-4">
								<h6 className="">Formulário de Consultas</h6>
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
								<form onSubmit={handleSubmit(handleConsultaAlterSubmit)}>
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
										/>
										<label
											htmlFor="tipoConsulta"
											className="form-label form-label-sm"
										>
											Atendimento Recém-Nascido
										</label>
									</div>
									<div
										className="btn-group mt-2"
										role="group"
										aria-label="Basic outlined example"
									>
										<button type="submit" className="btn btn-outline-primary">
											Gravar Consulta
										</button>
										<Link href={`/atendimentos/consultas`} passHref>
											<button type="button" className="btn btn-outline-danger">
												Cancelar
											</button>
										</Link>
									</div>
								</form>
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
