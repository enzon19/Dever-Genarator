export default {
	subjects: [
		{ todoistID: "2165139871", name: "Complemento" },
		{ todoistID: "2165139869", name: "Eletivas" },
		{ todoistID: "2165139843", name: "Química 2" },
		{ todoistID: "2165139841", name: "Física 2" },
		{ todoistID: "2159895180", name: "Biologia" },
		{ todoistID: "2159895112", name: "Física 1" },
		{ todoistID: "2159895181", name: "Geografia" },
		{ todoistID: "2159895182", name: "História" },
		{ todoistID: "2159895113", name: "Inglês" },
		{ todoistID: "2159895184", name: "Literatura" },
		{ todoistID: "2159895119", name: "Socioemocional" },
		{ todoistID: "2159895111", name: "Matemática 1" },
		{ todoistID: "2159882340", name: "Matemática 2" },
		{ todoistID: "2159876373", name: "Português" },
		{ todoistID: "2159895187", name: "Produção de Texto" },
		{ todoistID: "2159893392", name: "Química 1" },
		{ todoistID: "2159895118", name: "Sociologia" }
	],
  exercisesTypes: [
		{ value: 'iniciais', name: 'Iniciais' },
		{ value: 'contextualizados', name: 'Contextualizados' },
		{ value: 'capítulo', name: 'Capítulo' },
		{ value: 'np', name: 'NP' }
	],
	fixSubjectsNames: {
		"Np": "NP", 
		"Liv": "Socioemocional", 
		"Portugues": "Português", 
		"Fisica": "Física", 
		"Historia": "História", 
		"Matematica": "Matemática", 
		"Ingles": "Inglês", 
		"Quimica": "Química", 
		"Producao": "Produção", 
		"Produçao": "Produção", 
		"Producão": "Produção", 
		"Capitulo": "Capítulo",
		"A ": "a "
	},
	classSchedule: [
		{
			dayOfWeek: 1,//"Monday",
			subjectsIDs: ["2159895113", "2159895118", "2159895119", "2159895184", "2165139843", "2159895111"]
			// Inglês, Sociologia, Socioemocional, Literatura, Química 2, Matemática 1
		},
		{
			dayOfWeek: 2,//"Tuesday",
			subjectsIDs: ["2159895181", "2159893392", "2159895111", "2159895187", "2159895182"]
			// Geografia, Química 1, Matemática 1, Produção de Texto, História
		},
		{
			dayOfWeek: 3,//"Wednesday",
			subjectsIDs: ["2159895111", "2159876373", "2159895112", "2159895182"]
			// Matemática 1, Língua Portuguesa, Física 1, História
		},
		{
			dayOfWeek: 4,//"Thursday",
			subjectsIDs: ["2165139841", "2165139869", "2159895180"]
			// Física 2, Eletivas, Biologia
		},
		{
			dayOfWeek: 5,//"Friday",
			subjectsIDs: ["2159882340", "2159895187", "2159895180", "2165139871"]
			// Matemática 2, Produção de Texto, Biologia, Complemento
		}
	],
	dueDateOneDayBefore: true,
	time: "15:00",
	projectID: "2285518194",
	sectionID: "80559957"
}