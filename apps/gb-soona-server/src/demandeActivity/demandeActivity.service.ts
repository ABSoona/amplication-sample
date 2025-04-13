import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DemandeActivityServiceBase } from "./base/demandeActivity.service.base";

@Injectable()
export class DemandeActivityService extends DemandeActivityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
