import { Tecnologia } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class TecnologiaPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async getTodas(): Promise<Omit<Tecnologia, "projetos">[]> {
		return this.prisma.tecnologia.findMany()
	}

	async getDestaques(): Promise<Omit<Tecnologia, "projetos">[]> {
		return this.prisma.tecnologia.findMany({
			where: {
				destaque: true,
			},
		})
	}
}
