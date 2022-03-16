import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import { api } from "../../../services/api";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function ColaboradorInsert() {
	const {
		register,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const { push } = useRouter();
	const [users, setUsers] = useState([]);

	const handleExamesSubmit = async (data) => {
		console.log(data);
		// await api
		// 	.post(`/api/colaborador/`, data)
		// 	.then(push("/cadastros/colaborador/"));
		// reset();
	};

	// useEffect(() => {
	//   handleUsuarios();
	// }, []);

	return (
		<div className="">
			<HeadPage pageTitle={"[Exames]"} />
			<SidebarComponent
				ativo={"atendimento"}
				subitem={"exames"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Atendimentos - Exames [Novo]"}
				></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between top-container mb-4">
								<h6 className="">Formulário de Exames</h6>
								<Link href={`/atendimentos/exames/`} passHref>
									<button
										type="button"
										className="btn btn-sm btn-outline-danger"
									>
										Voltar
									</button>
								</Link>
							</div>
							<div className="list-search overflow-auto border-top">
								<form onSubmit={handleSubmit(handleExamesSubmit)}>
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
										<div className="card"></div>
									</div>
									<div className="mb-1 col form-group">
										<label
											htmlFor="tipoConsulta"
											className="form-label form-label-sm"
										>
											Indicação Clinica
										</label>
										<textarea
											className="form-control form-control-sm"
											aria-label=".form-select-sm example"
											{...register("indicacaoClinica")}
										></textarea>
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
									<div
										className="btn-group mt-2"
										role="group"
										aria-label="Basic outlined example"
									>
										<button type="submit" className="btn btn-outline-primary">
											Gravar Exame
										</button>
										<Link href={`/atendimentos/exames`} passHref>
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
