/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import EnderecoForm from "../../../src/Components/EnderecoForm";
import Link from "next/link";

export default function ProfissionalAlter() {
	const { register, control, reset } = useForm();
	const { query } = useRouter();
	const { id } = query;

	const buscaUsuario = useCallback(() => {
		api.get(`/api/profissionais/${id}`).then((response) => {
			console.log(1);
			reset(response.data);
		});
	}, [id, reset]);

	useEffect(() => {
		buscaUsuario();
	}, [buscaUsuario]);

	return (
		<div className="">
			<HeadPage pageTitle={"[Profissionais]"} />
			<SidebarComponent
				ativo={"cadastros"}
				subitem={"medicos"}
			></SidebarComponent>
			<Main>
				<HeaderComponent title={`Cadastros - Profissional`}></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between top-container mb-4">
								<h6 className="">Profissional</h6>
								<Link href={`/cadastros/profissionais/`} replace>
									<button
										type="button"
										className="btn btn-sm btn-outline-danger"
									>
										Voltar
									</button>
								</Link>
							</div>
							<div className="list-search overflow-auto border-top">
								<form>
									<input type="hidden" name="id" {...register("id")} />
									<div className="mb-1 col">
										<label htmlFor="nome" className="form-label form-label-sm">
											Nome Completo
										</label>
										<input
											type="text"
											{...register("nome")}
											name="nome"
											className="form-control form-control-sm"
											id="nome"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="cpf" className="form-label form-label-sm">
											CBO
										</label>
										<input
											type="text"
											name="cbo"
											{...register("cbo")}
											className="form-control form-control-sm"
											id="cbo"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="cpf" className="form-label form-label-sm">
											Especialidade
										</label>
										<input
											type="text"
											name="especialidade"
											{...register("especialidade")}
											className="form-control form-control-sm"
											id="especialidade"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="cpf" className="form-label form-label-sm">
											Conselho
										</label>
										<input
											type="text"
											name="conselho"
											{...register("conselho")}
											className="form-control form-control-sm"
											id="conselho"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="cpf" className="form-label form-label-sm">
											Número do Conselho
										</label>
										<input
											type="text"
											name="numeroConselho"
											{...register("numeroConselho")}
											className="form-control form-control-sm"
											id="numeroConselho"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="cpf" className="form-label form-label-sm">
											CPF
										</label>
										<input
											type="text"
											name="cpf"
											{...register("cpf")}
											className="form-control form-control-sm"
											id="cpf"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="rg" className="form-label form-label-sm">
											RG
										</label>
										<input
											type="text"
											name="rg"
											{...register("rg")}
											className="form-control form-control-sm"
											id="rg"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="dataNascimento"
											className="form-label form-label-sm"
										>
											Data de Nascimento
										</label>
										<input
											type="date"
											name="dataNascimento"
											{...register("dataNascimento", { valueAsDate: true })}
											className="form-control form-control-sm"
											id="dataNascimento"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="dataVinculo"
											className="form-label form-label-sm"
										>
											Data de Vinculo
										</label>
										<input
											type="datetime-local"
											name="dataVinculo"
											{...register("dataVinculo", { valueAsDate: true })}
											className="form-control form-control-sm"
											id="dataVinculo"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="complemento"
											className="form-label form-label-sm"
										>
											Sexo
										</label>
										<select
											className="form-select form-select-sm"
											aria-label=".form-select-sm example"
											{...register("sexo")}
											disabled
										>
											<option value={"MASCULINO"}>Masculino</option>
											<option value={"FEMININO"}>Feminino</option>
										</select>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="username"
											className="form-label form-label-sm"
										>
											Usuário
										</label>
										<input
											type="text"
											{...register("usuario.username")}
											className="form-control form-control-sm"
											id="inputAddress2"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="password"
											className="form-label form-label-sm"
										>
											Senha
										</label>
										<input
											type="password"
											{...register("usuario.password")}
											className="form-control form-control-sm"
											id="password"
											disabled
										/>
									</div>
									<div className="mb-1 col">
										<label htmlFor="email" className="form-label form-label-sm">
											Email
										</label>
										<input
											type="email"
											{...register("usuario.email")}
											className="form-control form-control-sm"
											id="email"
											disabled
										/>
									</div>
									<EnderecoForm
										register={register}
										control={control}
										disabled={true}
									></EnderecoForm>
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
