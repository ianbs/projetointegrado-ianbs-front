import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { format } from "date-fns";
import { parseCookies } from "nookies";

import styled from "styled-components";

import HeadPage from "../Components/Head";
import SidebarComponent from "../Components/Sidebar";
import HeaderComponent from "../Components/Header";

export default function Medico() {
  const router = useRouter();

  return (
    <div className="">
      <HeadPage pageTitle={"[Médico]"} />
      <SidebarComponent
        ativo={"cadastros"}
        subitem={"medico"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent title={"Cadastros - Médicos"}></HeaderComponent>
        <MainContent>
          <div className="card">
            <div className="card-body">
              <h6 className="mb-4">Formulário de Cadastro de Médicos</h6>
              <div className="list-search overflow-auto border-top">
                <div className="d-flex  m-1">
                  <div className="form-check m-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Pessoa Física
                    </label>
                  </div>
                  <div className="form-check  m-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Pessoa Jurídica
                    </label>
                  </div>
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>

                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Razão Social
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Conselho
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Número do Conselho
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    CBO
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    CPF
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    CNPJ
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    RG
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Data de Vinculo
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div className="mb-1 col">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label form-label-sm"
                  >
                    Data de Nascimento
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="inputAddress2"
                  />
                </div>
                <div
                  className="btn-group mt-2"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="submit" className="btn btn-outline-primary">
                    Gravar Médico
                  </button>

                  <button type="button" className="btn btn-outline-danger">
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Procurar Médico"
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
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action text-break"
                    aria-current="true"
                  >
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <h6 className="mb-1">
                        <label>Nome do Médico: Fulano</label>
                      </h6>
                      {/* <p>Data de cadastro: {format(new Date(), "dd/mm/yyyy")}</p> */}
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center">
                      <p className="mb-1">
                        <label>Especialidade: Clinica Geral</label>
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
                          >
                            Editar
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Excluir
                          </button>
                        </div>
                      </small>
                    </div>
                  </a>
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
  margin-top: 80px;
  padding: 1rem 1.5rem;
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
