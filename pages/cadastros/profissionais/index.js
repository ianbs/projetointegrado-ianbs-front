/* eslint-disable @next/next/link-passhref */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

import styled from "styled-components";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import Link from "next/link";
import { api } from "../../../services/api";

export default function Profissionais() {
  const { push } = useRouter();
  const [profissionais, setProfissionais] = useState([]);

  const handleProfissionais = async () => {
    await api.get("profissional/").then((resposta) => {
      setProfissionais(resposta.data);
    });
  };

  const deleteProfissional = async ({ id }) => {
    console.log(id);
    await api.delete(`profissional/${id}`).then(push("/cadastros/profissionais/"));
  };

  useEffect(() => {
    handleProfissionais();
  }, []);

  return (
    <div className="">
      <HeadPage pageTitle={"[Profissionais]"} />
      <SidebarComponent
        ativo={"cadastros"}
        subitem={"medico"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent title={"Cadastros - Profissionais"}></HeaderComponent>
        <MainContent>
          <div className="d-flex justify-content-between top-container mb-4">
            <Link href={`/cadastros/profissionais/add`} replace>
              <button type="button" className="btn btn-sm btn-outline-primary">
                Novo Profissional
              </button>
            </Link>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Procurar Profissional..."
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
                  {profissionais.map((profissional) => (
                    <Link
                      key={profissional.id}
                      href={`/cadastros/profissionais/${profissional.id}`}
                      replace
                    >
                      <a
                        className="list-group-item list-group-item-action text-break"
                        aria-current="true"
                      >
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <h6 className="mb-1">
                            <label>Nome: {profissional.nome}</label>
                            <br />
                            <small>
                              Especialidade: {profissional.especialidade}
                            </small>
                          </h6>
                        </div>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <p className="mb-1">
                            <label>
                              Conselho: {profissional.conselho}{" "}
                              {profissional.numeroConselho}
                            </label>
                            <br />
                          </p>
                          <small>
                            <div
                              className="btn-group btn-group-sm"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href={`/cadastros/profissionais/edit/${profissional.id}`}
                                replace
                              >
                                <a
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Editar
                                </a>
                              </Link>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault;
                                  deleteProfissional(profissional);
                                }}
                                className="btn btn-outline-danger"
                              >
                                Excluir
                              </button>
                            </div>
                          </small>
                        </div>
                      </a>
                    </Link>
                  ))}
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
  margin-top: 50px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh - 90px);
  .card {
    width: 100%;
  }
  .list-search {
    height: 60vh;
  }
  .btn-group {
    width: 100%;
  }
`;
