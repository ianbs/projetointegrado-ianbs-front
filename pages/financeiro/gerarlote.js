import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
// import nookies, { parseCookies } from "nookies";

import HeadPage from "../../src/Components/Head";
import SidebarComponent from "../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../src/Components/Header";

export default function GerarLote() {
	const router = useRouter();

	return (
		<div className="">
			<HeadPage pageTitle={"[Financeiro]"} />
			<SidebarComponent
				ativo={"financeiro"}
				subitem={"gerarlote"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={"Financeiro - Faturamento - Geração de Lote"}
				></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="d-flex">
							<div className="container h-100">
								<div className="row ">
									<div className="col d-flex justify-content-center">
										<ul
											className="list-group p-2"
											style={{ width: "100%", height: "100%" }}
										>
											<p className="h5 p-3">Lotes</p>
											<li className="list-group-item d-flex justify-content-between align-items-center">
												Lote 1234
												<div>
													Guias Geradas: 15
													<br />
													Mes Referência: 01/2022
													<br />
													Valor Total: R$ 1500,00
												</div>
												<div>
													<span className="badge bg-info rounded-pill">
														Ver Guias
														<i className="las la-trash-alt"></i>
													</span>
													<span className="badge bg-danger rounded-pill">
														Excluir
														<i className="las la-trash-alt"></i>
													</span>
												</div>
											</li>
											<li className="list-group-item d-flex justify-content-between align-items-center">
												Lote 1235
												<div>
													Guias Geradas: 25
													<br />
													Mes Referência: 01/2022
													<br />
													Valor Total: R$ 5000,00
												</div>
												<div>
													<span className="badge bg-info rounded-pill">
														Ver Guias
														<i className="las la-trash-alt"></i>
													</span>
													<span className="badge bg-danger rounded-pill">
														Excluir
														<i className="las la-trash-alt"></i>
													</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="container">
								<p className="h5 p-3">Gerar Lote</p>
								<form className="p-2">
									<div className="mb-1 col">
										<label
											htmlFor="profissional"
											className="form-label form-label-sm"
										>
											Profissional
										</label>
										<select
											className="form-select form-select-sm"
											aria-label=".form-select-sm example"
											// {...register("sexo")}
										>
											<option value={0}>Profissional 1</option>
											<option value={1}>Profissional 2</option>
										</select>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="mesReferencia"
											className="form-label form-label-sm"
										>
											Mês Referência
										</label>
										<input
											type="text"
											name="mesReferencia"
											// {...register("rg")}
											className="form-control form-control-sm"
											id="mesReferencia"
										/>
									</div>
									<div className="mb-1 col">
										<label
											htmlFor="profissional"
											className="form-label form-label-sm"
										>
											Tipo de Guia
										</label>
										<select
											className="form-select form-select-sm"
											aria-label=".form-select-sm example"
											// {...register("sexo")}
										>
											<option value={0}>Consultas</option>
											<option value={1}>Exames</option>
										</select>
										<div className="d-grid gap-2">
											<button
												type="submit"
												className="btn btn-outline-primary m-4"
											>
												Gerar Lote
											</button>
										</div>
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
