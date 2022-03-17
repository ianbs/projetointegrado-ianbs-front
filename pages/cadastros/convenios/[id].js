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
import Link from "next/link";

export default function ConveniosId() {
	const { register, reset } = useForm();
	const { query } = useRouter();
	const { id } = query;

	const buscaConvenios = useCallback(() => {
		api.get(`/api/convenios/${id}`).then((response) => {
			console.log(1);
			reset(response.data);
		});
	}, [id, reset]);

	useEffect(() => {
		buscaConvenios();
	}, [buscaConvenios]);

	return (
		<div className="">
			<HeadPage pageTitle={"[Convênios]"} />
			<SidebarComponent
				ativo={"cadastros"}
				subitem={"convenios"}
			></SidebarComponent>
			<Main>
				<HeaderComponent
					title={`Cadastros - Convênios ${id}`}
				></HeaderComponent>
				<MainContent>
					<div className="card">
						<div className="card-body">
							<div className="d-flex justify-content-between top-container mb-4">
								<h6 className="">Convênio</h6>
								<Link href={`/cadastros/convenios/`} replace>
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
											Nome
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
										<label
											htmlFor="dataVinculo"
											className="form-label form-label-sm"
										>
											Data de Vinculo
										</label>
										<input
											type="date"
											name="dataVinculo"
											{...register("dataVinculo", { valueAsDate: true })}
											className="form-control form-control-sm"
											id="dataVinculo"
											disabled
										/>
									</div>
									<div className="form-check form-switch m-2">
										<input
											className="form-check-input"
											type="checkbox"
											{...register("ativo")}
											id="flexSwitchCheckDefault"
										/>
										<label
											className="form-check-label"
											htmlFor="flexSwitchCheckDefault"
										>
											Ativo
										</label>
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
