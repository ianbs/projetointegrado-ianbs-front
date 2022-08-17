import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import { api } from "../../../services/api";
import { useFieldArray, useForm } from "react-hook-form";
import EnderecoForm from "../../../src/Components/EnderecoForm";
import Link from "next/link";

export default function ColaboradorInsert() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      enderecos: [
        {
          logradouro: "",
          numero: 0,
          cep: "",
          bairro: "",
          complemento: "",
          codigoIbge: null,
          tipoEndereco: "",
        },
      ],
    },
  });
  const { push } = useRouter();
  const [users, setUsers] = useState([]);

  const handleUsuariosSubmit = async (data) => {
    await api.post(`/colaborador/`, data).then(push("/cadastros/colaborador/"));
    reset();
  };

  // useEffect(() => {
  //   handleUsuarios();
  // }, []);

  return (
    <div className="">
      <HeadPage pageTitle={"[Colaborador]"} />
      <SidebarComponent
        ativo={"cadastros"}
        subitem={"colaborador"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent
          title={"Cadastros - Colaborador [Novo]"}
        ></HeaderComponent>
        <MainContent>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between top-container mb-4">
                <h6 className="">Formulário de Cadastro de Colaboradores</h6>
                <Link href={`/cadastros/colaborador/`} passHref>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                  >
                    Voltar
                  </button>
                </Link>
              </div>
              <div className="list-search overflow-auto border-top">
                <form onSubmit={handleSubmit(handleUsuariosSubmit)}>
                  {/* <input type="hidden" name="id" {...register("id")} /> */}
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
                    >
                      <option value={"Masculino"}>Masculino</option>
                      <option value={"Feminino"}>Feminino</option>
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
                    />
                  </div>
                  <EnderecoForm
                    register={register}
                    control={control}
                  ></EnderecoForm>
                  <div
                    className="btn-group mt-2"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button type="submit" className="btn btn-outline-primary">
                      Gravar Colaborador
                    </button>
                    <Link href={`/cadastros/colaborador`} passHref>
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
