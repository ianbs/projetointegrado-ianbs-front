import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";
import FormModal from "../Components/FormModalConsulta";

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
					<div>
						<div className="d-flex justify-content-between top-container">
							<button
								onClick={() => handleClickNovoAtendimento()}
								type="button"
								className="btn btn-outline-primary"
							>
								Novo Atendimento
							</button>
							<div className="d-flex justify-content-between mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Digite o que procurar..."
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
								/>
								<select
									className="form-select"
									aria-label="Default select example"
								>
									<option selected>Selecione o filtro</option>
									<option value="1">Número da Consulta</option>
									<option value="2">Nome do Paciente</option>
									<option value="3">Nome do Médico</option>
								</select>
								<button
									className="btn btn-outline-secondary"
									type="button"
									id="button-addon2"
								>
									Button
								</button>
							</div>
						</div>
						<div className="container">
							<div className="list-group">
								{consultas.map((item) => (
									<a
										href="#"
										className="list-group-item list-group-item-action text-break"
										aria-current="true"
										key={item.id}
									>
										<div className="d-flex w-100 justify-content-between align-items-center">
											<h6 className="mb-1">
												<label>Nome do Paciente: </label> {item.paciente}
											</h6>
											<p></p>
											<p>Número do Atendimento: {item.id}</p>
											<p>
												Data de cadastro:{" "}
												{format(new Date(), "dd/mm/yyyy kk:mm:ss")}
											</p>
										</div>
										<div className="d-flex w-100 justify-content-between align-items-center">
											<p className="mb-1">
												<label>Nome do Médico: </label> {item.medico}
												<br />
												<label>Especialidade: </label> {item.especialidade}
												<br />
											</p>
											<small>
												<div
													className="btn-group btn-group-sm"
													role="group"
													aria-label="Basic outlined example"
												>
													<button
														type="button"
														className="btn btn-outline-secondary"
														onClick={() => handleClickAlterarAtendimento(item)}
													>
														Editar Atendimento
													</button>
													<button
														type="button"
														className="btn btn-outline-danger"
													>
														Excluir Atendimento
													</button>
												</div>
											</small>
										</div>
									</a>
								))}
							</div>
						</div>
						<FormModal
							tipo={tipoModal}
							item={itemModal}
							showModal={showModal}
							setShowModal={setShowModal}
						></FormModal>
					</div>
				</MainContent>
			</Main>
		</div>
	);
}

export async function getServerSideProps(ctx) {
	//   const cookies = nookies.get(ctx);
	const cookies = parseCookies(ctx);
	const token = JSON.parse(cookies.user_token);
	const { isAuth } = token;
	console.log(isAuth);
	if (!isAuth) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}
	return {
		props: {
			cookies: cookies,
		},
	};
}

const Main = styled.main`
	margin-left: 250px;
`;

const MainContent = styled.main`
	margin-top: 80px;
	padding: 2rem 1.5rem;
	background: var(--white);
	min-height: calc(100vh - 90px);

	.top-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.btn-outline-primary {
			border-color: var(--main-color);
			color: var(--color-dark);
			margin-right: 2rem;
			&:hover {
				background-color: var(--main-color);
			}
		}
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 1rem;
		.list-group {
			width: 100%;
			height: 65vh;
			font-size: 0.8rem;
			overflow: auto;
		}
	}
`;
