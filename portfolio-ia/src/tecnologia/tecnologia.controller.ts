// import { Tecnologia } from "@core"
import { Controller, Get } from "@nestjs/common"
import { TecnologiaPrisma } from "./tecnologia.prisma"

@Controller("tecnologias")
export class TecnologiaControllerController {
	constructor(private readonly repo: TecnologiaPrisma) {}

	@Get()
	async getTodos() {
		return await this.repo.getTodas()
	}

	@Get("destaques")
	async getDestaques() {
		return await this.repo.getDestaques()
	}
}
