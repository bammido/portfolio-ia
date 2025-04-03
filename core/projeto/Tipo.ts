const Tipo = {
	web: "web",
	mobile: "mobile",
} as const

type TipoKeys = (typeof Tipo)[keyof typeof Tipo]

export { Tipo }
export type { TipoKeys }
