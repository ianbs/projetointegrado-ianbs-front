import { useRouter } from "next/router";
import styled from "styled-components";
import { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import { api } from "../../../services/api";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function ConveniosInsert() {
  const { register, handleSubmit, reset } = useForm();

  const { push } = useRouter();

  const handleConvenioSubmit = async (data) => {
    await api.post(`convenio/`, data).then(push("/cadastros/convenios/"));
    reset();
  };

  return (
    <div className="">
      <HeadPage pageTitle={"[Convênios]"} />
      <SidebarComponent
        ativo={"cadastros"}
        subitem={"convenios"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent
          title={"Cadastros - Convênios [Novo]"}
        ></HeaderComponent>
        <MainContent>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between top-container mb-4">
                <h6 className="">Formulário de Cadastro de Convênio</h6>
                <Link href={`/cadastros/convenios/`} passHref>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="list-search overflow-auto border-top">
                <form onSubmit={handleSubmit(handleConvenioSubmit)}>
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
                    />
                  </div>

                  <div className="mb-1 col">
                    <label htmlFor="cpf" className="form-label form-label-sm">
                      Data de Vínculo
                    </label>
                    <input
                      type="date"
                      name="cpf"
                      {...register("dataVinculo")}
                      className="form-control form-control-sm"
                      id="cpf"
                    />
                  </div>
                  <div className="form-check form-switch m-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                      defaultValue={true}
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

                  <div
                    className="float-end mt-2"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="submit"
                      className="btn btn-outline-primary m-2"
                    >
                      Gravar Convênio
                    </button>
                    <Link href={`/cadastros/convenios`} passHref>
                      <button
                        type="button"
                        className="btn btn-outline-danger m-2"
                      >
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
