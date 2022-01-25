import nookies from "nookies";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Logout() {
	const router = useRouter();

	const handleLogout = () => {
		nookies.destroy(null, "user_token");
		router.push({
			pathname: "/login",
		});
	};

	useEffect(() => {
		handleLogout();
	});

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "10px",
			}}
		>
			Redirecionando...
		</div>
	);
}
