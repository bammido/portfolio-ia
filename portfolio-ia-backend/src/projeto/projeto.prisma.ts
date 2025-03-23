import { Projeto } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getTodos(): Promise<Projeto[]> {
		return this.prisma.projeto.findMany({
			include: {
				tecnologias: true,
			},
		})
	}

	async getDestaques(): Promise<Projeto[]> {
		return this.prisma.projeto.findMany({
			where: {
				destaque: true,
			},
			include: {
				tecnologias: true,
			},
		})
	}

	async getPeloId({ id }: { id: number }): Promise<Projeto> {
		return this.prisma.projeto.findUnique({
			where: {
				id,
			},
			include: {
				tecnologias: true,
			},
		})
	}
}
