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

export default function ColaboradorAlter() {
  const { register, control, reset } = useForm();
  const { query, push } = useRouter();
  const { id } = query;

  const buscaUsuario = useCallback(() => {
    api.get(`paciente/${id}`).then((response) => {
      console.log(1);
      reset(response.data);
    });
  }, [id, reset]);

  useEffect(() => {
    buscaUsuario();
  }, [buscaUsuario]);

  return (
    <div className="">
      <HeadPage pageTitle={"[Pacientes]"} />
      <SidebarComponent
        ativo={"cadastros"}
        subitem={"pacientes"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent title={`Cadastros - Pacientes`}></HeaderComponent>
        <MainContent>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between top-container mb-4">
                <h6 className="">Paciente</h6>
                <Link href={`/cadastros/pacientes/`} replace>
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
                    <label htmlFor="rg" className="form-label form-label-sm">
                      Cartão Nacional de Saúde
                    </label>
                    <input
                      type="text"
                      name="cartaoNacionalSaude"
                      {...register("cartaoNacionalSaude")}
                      className="form-control form-control-sm"
                      id="cartaoNacionalSaude"
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
                      {...register("dataNascimento")}
                      className="form-control form-control-sm"
                      id="dataNascimento"
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
                      <option value={0}>Masculino</option>
                      <option value={1}>Feminino</option>
                    </select>
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
