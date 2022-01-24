import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

import HeadPage from "./Components/Head";

export default function Login() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		console.log(username, password);
		username === "admin" && password === "admin"
			? router.push("/")
			: router.push("/login");
	};

	return (
		<div className="">
			<HeadPage pageTitle={"[Login]"} />
			<Container>
				<div className="card">
					<div className="left-card">
						<h1>
							<span className="las la-stethoscope"></span> SGCC
						</h1>
					</div>
					<div className="line"></div>
					<div className="right-card">
						<div className="form-login">
							<h1>Login</h1>
							<form onSubmit={handleLogin}>
								<div>
									<input
										type="text"
										onChange={(e) => setUsername(e.target.value)}
										name="username"
									/>
								</div>
								<div>
									<input
										type="password"
										onChange={(e) => setPassword(e.target.value)}
										name="password"
									/>
								</div>
								<div>
									<button type="submit">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}

const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--color-dark);
	width: 100vw;
	height: 100vh;
	.card {
		display: inline-flex;
		background-color: var(--main-color);
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
		justify-content: center;
		align-items: center;
		.line {
			height: 10rem;
			background: var(--text-grey);
			width: 1px;
		}
		.left-card {
			padding: 1rem;
			text-align: center;
			h1 {
				font-size: 3.5rem;
				margin-right: 15px;
			}
		}
		.right-card {
			padding: 1rem;
			h1 {
				font-size: 1rem;
				text-align: center;
			}
			input {
				font-size: 1rem;
				width: 100%;
				margin: 10px;
				height: 2rem;
				margin-left: 0;
				border-radius: 10px;
				border: 0;
				text-align: center;
			}
			button {
				width: 100%;
				margin-top: 10px;
				font-size: 1rem;
				height: 2rem;
				border-radius: 10px;
				background-color: var(--text-grey);
				color: var(--color-dark);
				border: 0;
			}
		}
	}
`;
