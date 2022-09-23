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
	const [erro, setErro] = useState(false);
	const [msgErro, setMsgErro] = useState('false');
	const [pacientes, setPacientes] = useState([])
	const [profissionais, setProfissionais] = useState([])
	const [convenios, setConvenios] = useState([])

	const handleConsultaSubmit = async (data) => {
		// console.log(data)
		await api
			.post(`/consulta/`, data, {
				headers: {
					"Access-Control-Allow-Origin": '*'
				}
			})
			.then(
			// push("/atendimentos/consultas/")
		).catch((error) => {
			if (error.response) {
				setErro(true);
				setMsgErro(error.response.data.message[0]);
			}
		});
		reset();
	};

	const handlePacientes = async () => {
		await api.get("paciente/").then((resposta) => {
			setPacientes(resposta.data);
		});
	};

	const handleProfissionais = async () => {
		await api.get("profissional/", {
			headers: {
				"Access-Control-Allow-Origin": '*'
			}
		}).then((resposta) => {
			setProfissionais(resposta.data);
		});
	};

	const handleConvenios = async () => {
		await api.get("convenio/", {
			headers: {
				"Access-Control-Allow-Origin": '*'
			}
		}).then((resposta) => {
			setConvenios(resposta.data);
		});
	};

	useEffect(() => {
		handlePacientes();
		handleProfissionais();
		handleConvenios();
		setTimeout(() => setErro(false), 5000);
	}, []);

	return (
		<div className="">
			<HeadPage pageTitle={"[Consultas]"} />
			<SidebarComponent
				ativo={"atendimento"}
				subitem={"consulta"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Atendimentos - Consultas [Novo]"}
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
							<div style={{ backgroundColor: '#f00' }}>
								{erro ? (<p>{msgErro}</p>) : (<></>)}
							</div>
							<div className="list-search overflow-auto border-top">
								<form onSubmit={handleSubmit(handleConsultaSubmit)}>



									<input type="hidden" defaultValue={1} name="id" {...register("colaborador.id")} />
									<div className="mb-1 col">
										<div className="form-floating m-2">
											<select
												className="form-select"
												id="floatingSelect"
												{...register("paciente.id")}
												aria-label="Floating label select example"
											>
												<option key={0}>
													Selecione um paciente.
												</option>
												{pacientes && pacientes.length > 0 ? (
													<>
														{pacientes.map((paciente, key) => (
															<option
																key={key}
																value={paciente.id}
															>
																{paciente.nome}
															</option>
														))}
													</>
												) : (
													<option key={0} value="1">
														Nenhum paciente encontrado.
													</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Paciente</label>
										</div>
										{/* <label
											htmlFor="paciente"
											className="form-label form-label-sm"
										>
											Paciente
										</label>
										<input
										defaultValue={1}
											type="number"
											name="paciente"
											{...register("paciente.id")}
											className="form-control form-control-sm"
											id="paciente"
										/> */}
									</div>

									<div className="mb-1 col">
										<div className="form-floating m-2">
											<select
												className="form-select"
												id="floatingSelect"
												{...register("profissional.id")}
												aria-label="Floating label select example"
											>
												<option key={0}>
													Selecione um profissional.
												</option>
												{profissionais && profissionais.length > 0 ? (
													<>
														{profissionais.map((profissional, key) => (
															<option
																key={key}
																value={profissional.id}
															>
																{profissional.nome}
															</option>
														))}
													</>
												) : (
													<option key={0} value="1">
														Nenhum profissional encontrado.
													</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Profissional</label>
										</div>
										{/* <label
											htmlFor="profissional"
											className="form-label form-label-sm"
										>
											Profissional
										</label>
										<input
											type="number"
											name="profissional"
											{...register("profissional.id")}
											className="form-control form-control-sm"
											id="profissional"
										/> */}
									</div>
									<div className="mb-1 col">
										<div className="form-floating m-2">
											<select
												className="form-select"
												id="floatingSelect"
												{...register("convenio.id")}
												aria-label="Floating label select example"
											>
												<option key={0} disabled>
													Selecione um convênio.
												</option>
												{convenios && convenios.length > 0 ? (
													<>
														{convenios.map((convenio, key) => (
															<option
																key={key}
																value={convenio.id}
															>
																{convenio.nome}
															</option>
														))}
													</>
												) : (
													<option key={0} value="1">
														Nenhum convenio encontrado.
													</option>
												)}
											</select>
											<label htmlFor="floatingSelect">Convênio</label>
										</div>
										{/* <label
											htmlFor="convenio"
											className="form-label form-label-sm"
										>
											Convênio
										</label>
										<input
											type="number"
											name="convenio"
											{...register("convenio.id")}
											className="form-control form-control-sm"
											id="convenio"
										/> */}
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="dataRealizacao"
											className="form-label form-label-sm"
										>
											Data de Realização
										</label>
										<input
											type="date"
											name="dataRealizacao"
											{...register("dataRealizacao")}
											className="form-control form-control-sm"
											id="dataRealizacao"
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
											value={'10101012 - Consulta'}
											// {...register("procedimento")}
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
											<option value={'Primeira Consulta'}>Primeira Consulta</option>
											<option value={'Retorno'}>Retorno</option>
											<option value={'Pre-Natal'}>Pré-Natal</option>
											<option value={'Encaminhamento'}>Encaminhamento</option>
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
											<option value={'Não Acidente'}>Não Acidente </option>
											<option value={'Pessoal'}>Pessoal</option>
											<option value={'Trabalho'}>Trabalho</option>
											<option value={'Transito'}>Transito</option>
											<option value={'Outros'}>Outros</option>
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
											<option value={'Eletivo'}>Eletivo</option>
											<option value={'Urgencia'}>Urgencia</option>
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
