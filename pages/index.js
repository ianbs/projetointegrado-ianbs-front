import Image from "next/image";
import styled from "styled-components";
import HeadPage from "./Components/Head";
import Day from "./Components/Day";
import { useEffect, useState } from "react";
import { eachDayOfInterval, endOfMonth, format, startOfMonth } from "date-fns";
import HeaderComponent from "./Components/Header";
import SidebarComponent from "./Components/Sidebar";
import nookies, { parseCookies } from "nookies";
import jwt from "jsonwebtoken";

export default function Home() {
  const [allDays, setAllDays] = useState([]);

  const handleMonth = () => {
    const result = eachDayOfInterval({
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
    });
    setAllDays(result);
  };

  const actualMonth = () => {
    const date = new Date();
    const month = date.toLocaleDateString("pt-BR", { month: "long" });
    return month[0].toUpperCase() + month.substring(1).toLowerCase();
  };

  useEffect(() => {
    handleMonth();
  }, []);
  return (
    <div className="">
      <HeadPage pageTitle={"[Início]"} />
      <SidebarComponent></SidebarComponent>
      <Main>
        <HeaderComponent></HeaderComponent>
        <MainContent>
          <div className="cards">
            <div className="card-single">
              <div>
                <small>Médicos</small>
                <h1>4</h1>
              </div>
              <div>
                <i className="las la-user-nurse"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <small>Consultorios</small>
                <h1>4</h1>
              </div>
              <div>
                <i className="las la-procedures"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <small>Pacientes</small>
                <h1>10</h1>
              </div>
              <div>
                <i className="las la-user-injured"></i>
              </div>
            </div>
            <div className="grid-next-pacients">
              <div className="pacients">
                <div className="card">
                  <div className="card-header">
                    <h2>Próximos Pacientes</h2>
                    <button>
                      Ver todos <i className="lar la-eye"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Nome</td>
                          <td>Médico</td>
                          <td>Consultório</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Joao</td>
                          <td>Mateus</td>
                          <td>C1</td>
                        </tr>
                        <tr>
                          <td>Maria</td>
                          <td>João</td>
                          <td>C2</td>
                        </tr>
                        <tr>
                          <td>Thiago</td>
                          <td>Tiago</td>
                          <td>C4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-calendar">
            <div className="calendar">
              <div className="card">
                <div className="card-header">
                  <h2>Agenda - {actualMonth()}</h2>
                </div>
                <div className="card-body">
                  <div className="month">
                    {allDays.map((item) => (
                      <Day key={item} day={item}></Day>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
      </Main>

      <footer className=""></footer>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  //   const cookies = nookies.get(ctx);
  const cookies = parseCookies(ctx);
  const token = JSON.parse(cookies.user_token);
  const { isAuth } = token;
  console.log();
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
  margin-left: 345px;
`;

const MainContent = styled.main`
  margin-top: 80px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh - 90px);

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-gap: 2rem;

    .card-single {
      display: flex;
      justify-content: space-between;
      background-color: var(--white);
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

      h1 {
        color: var(--text-grey);
      }

      i:first-child {
        font-size: 4rem;
      }
      i:last-child {
        color: var(--text-grey);
      }
    }
  }

  table {
    border-collapse: collapse;
  }

  .grid-calendar {
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    .card-header {
      display: inline-flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .card-body {
      height: 30%;
      width: 100%;
      overflow-y: scroll;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;
      .month {
        display: grid;
        width: max-content;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(4, 1fr);
        .today {
          background-color: #a1f0eb !important;
        }
        .day {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;

          button {
            margin-left: 1rem;
            font-size: 1rem;
            background-color: var(--white);
            border: none;
            &:hover {
              background-color: var(--text-grey);
              color: var(--white);
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
`;
