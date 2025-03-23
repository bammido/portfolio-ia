import { Controller, Get, Param } from "@nestjs/common"
import { ProjetoPrisma } from "./projeto.prisma"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async getTodos() {
		return await this.repo.getTodos()
	}

	@Get("destaques")
	async getDestaques() {
		return await this.repo.getDestaques()
	}

	@Get(":id")
	async getPeloId(@Param("id") id: string) {
		return this.repo.getPeloId({ id: Number(id) })
	}
}
