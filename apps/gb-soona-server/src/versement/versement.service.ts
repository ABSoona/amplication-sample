import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VersementServiceBase } from "./base/versement.service.base";

@Injectable()
export class VersementService extends VersementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
