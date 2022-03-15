const SidebarData = [
	{
		title: "Inicio",
		icon: <i className="las la-home"></i>,
		link: "/",
		ativo: "inicio",
	},
	{
		title: "Atendimentos",
		icon: <i className="las la-laptop-medical"></i>,
		ativo: "atendimentos",
		subNav: [
			{
				title: "Consultas",
				link: "/atendimentos/consultas",
			},
			{
				title: "Exames",
				link: "/atendimentos/exames",
			},
		],
	},
	{
		title: "Cadastros",
		icon: <i className="las la-user"></i>,
		ativo: "cadastros",
		subNav: [
			{
				title: "Colaborador",
				link: "/cadastros/colaborador",
			},
			{
				title: "Convênios",
				link: "/cadastros/convenios",
			},
			{
				title: "Profissionais",
				link: "/cadastros/medicos",
			},
			{
				title: "Pacientes",
				link: "/cadastros/pacientes",
			},
		],
	},
	{
		title: "Financeiro",
		icon: <i className="las la-comments-dollar"></i>,
		ativo: "financeiro",
		subNav: [
			{
				title: "Faturar Consultas e Exames",
				link: "/financeiro/gerarlote/",
			},
		],
	},
	{
		title: "Administração",
		icon: <i className="las la-user-cog"></i>,
		ativo: "administracao",
		subNav: [
			{
				title: "Permissões",
				link: "/administracao/permissoes",
			},
		],
	},
];

export default SidebarData;
