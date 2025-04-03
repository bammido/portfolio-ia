const Nivel = {
	iniciante: 1,
	intermediario: 2,
	avancado: 3,
} as const

type NivelKeys = (typeof Nivel)[keyof typeof Nivel]

export { Nivel }
export type { NivelKeys }
