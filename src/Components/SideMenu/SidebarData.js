import {
	HowToReg,
	LocalAtm,
	MedicalServicesOutlined,
	PeopleAltSharp,
	Home,
} from "@mui/icons-material";

const SidebarData = [
	{
		title: "Inicio",
		icon: <Home />,
		link: "/",
		ativo: "inicio",
	},
	{
		title: "Atendimentos",
		icon: <MedicalServicesOutlined />,
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
		icon: <HowToReg />,
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
		icon: <LocalAtm />,
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
		icon: <PeopleAltSharp />,
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
