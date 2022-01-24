import Image from "next/image";
import styled from "styled-components";

export default function SidebarComponent() {
	return (
		<Sidebar>
			<div className="sidebar-brand">
				<h1>
					<span className="las la-stethoscope"></span> SGCC
				</h1>
			</div>
			<div className="sidebar-profile">
				<Image
					src="https://randomuser.me/api/portraits/men/73.jpg"
					width={"100px"}
					height={"100px"}
					className="profile-photo"
					alt="profile photo"
				></Image>
				<h3>Jonh Doe</h3>
				<small>Super Admin</small>
			</div>
			<div className="sidebar-menu">
				<ul>
					<li>
						<a className="active">
							<i className="las la-home"></i>
							Início
						</a>
					</li>
					<li>
						<a>
							<i className="las la-comment-medical"></i>
							Atendimentos
						</a>
					</li>
					<li>
						<a>
							<i className="las la-users"></i>
							Cadastros
						</a>
					</li>
					<li>
						<a>
							<i className="las la-hand-holding-usd"></i>
							Financeiro
						</a>
					</li>
					<li>
						<a>
							<i className="las la-suitcase"></i>
							Administração
						</a>
					</li>
				</ul>
			</div>
		</Sidebar>
	);
}

const Sidebar = styled.aside`
	width: 345px;
	position: fixed;
	left: 0;
	top: 0;
	height: 100%;
	background: var(--main-color);
	z-index: 100;
	.sidebar-profile {
		text-align: center;
		margin-bottom: 1.5rem;
		margin-top: 10px;
		h3 {
			margin-top: 1rem;
			margin-bottom: 1;
		}
		.profile-photo {
			border-radius: 50%;
		}
	}

	.sidebar-brand {
		height: 80px;
		padding: 1rem 0rem 1rem 1rem;
		text-align: center;
		font-size: 1.5rem;
		border-bottom: 1px solid rgba(0, 0, 0, 0.15);

		span {
			display: inline-block;
			padding-right: 1rem;
		}
	}

	.sidebar-menu {
		margin-top: 1rem;
		li {
			width: 100%;
			margin-bottom: 1.3rem;
			padding-left: 1rem;
			.active {
				background: var(--white);
				padding-top: 1rem;
				padding-bottom: 1rem;
				color: var(--text-grey);
				border-radius: 1rem 0 0 1rem;
			}
		}

		a {
			display: block;
			font-size: 1.1rem;
			&:first-child {
				font-size: 1.2rem;
				padding-right: 1.5rem;
			}
			&:hover {
				background-color: var(--text-grey);
				padding-top: 1rem;
				padding-bottom: 1rem;
				color: var(--white);
				border-radius: 1rem 0 0 1rem;
			}
		}
		i {
			&:first-child {
				font-size: 1.2rem;
				padding-right: 1.5rem;
			}
		}
	}
`;
