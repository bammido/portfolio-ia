import { Module } from "@nestjs/common"
import { TecnologiaControllerController } from "./tecnologia.controller"
import { TecnologiaPrisma } from "./tecnologia.prisma"
import { DbModule } from "src/db/db.module"

@Module({
	controllers: [TecnologiaControllerController],
	providers: [TecnologiaPrisma],
	imports: [DbModule],
})
export class TecnologiaModule {}
