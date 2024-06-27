import { IArticleItem } from "types/article.type";

export const articles: IArticleItem[] = [
	{
		id: 2,
		number: "ART-00000002",
		name: "Краска Tikurilla (Индиго)",
		expirationTime: 360,
		gtin: "ART-00000002",
		groups: [
			"Отделоченые материалы",
			"ГСМ"
		],
		unitOfMeasure: "Литры",
		owner: "ООО \"Comitas\"",
		dimension: {
			length: 10,
			width: 10,
			height: 25,
			volume: 4.5,
			weight: 4.5,
			weightTolerance: null,
			internalLength: null,
			internalWidth: null,
			internalHeight: null
		},
		accountingBySeries: false,
		accountingByQuantLot: true,
		createDate: "2024-04-24T13:27:50.862817",
		updateDate: "2024-04-24T13:27:50.988877",
		version: 1
	},
	{
		id: 3,
		number: "ART-00000003",
		name: "Краска Tikurilla (Cian)",
		expirationTime: 360,
		gtin: "ART-00000001",
		groups: [
			"Инструменты",
			"ГСМ",
			"Автотовары"
		],
		unitOfMeasure: "Штуки",
		owner: "ООО \"Comitas\"",
		dimension: {
			length: 10,
			width: 10,
			height: 25,
			volume: 4.5,
			weight: 4.5,
			weightTolerance: null,
			internalLength: null,
			internalWidth: null,
			internalHeight: null
		},
		accountingBySeries: true,
		accountingByQuantLot: true,
		createDate: "2024-04-24T13:28:51.006756",
		updateDate: "2024-04-24T13:28:51.172878",
		version: 1
	},
];