/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ContactService } from "../contact.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContactCreateInput } from "./ContactCreateInput";
import { Contact } from "./Contact";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactUpdateInput } from "./ContactUpdateInput";
import { AideFindManyArgs } from "../../aide/base/AideFindManyArgs";
import { Aide } from "../../aide/base/Aide";
import { AideWhereUniqueInput } from "../../aide/base/AideWhereUniqueInput";
import { DemandeFindManyArgs } from "../../demande/base/DemandeFindManyArgs";
import { Demande } from "../../demande/base/Demande";
import { DemandeWhereUniqueInput } from "../../demande/base/DemandeWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContactControllerBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contact })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContact(
    @common.Body() data: ContactCreateInput
  ): Promise<Contact> {
    return await this.service.createContact({
      data: data,
      select: {
        adresse: true,
        age: true,
        codePostal: true,
        createdAt: true,
        dateCreation: true,
        dateVisite: true,
        email: true,
        id: true,
        nom: true,
        numBeneficiaire: true,
        prenom: true,
        remarques: true,
        status: true,
        telephone: true,
        updatedAt: true,
        ville: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Contact] })
  @ApiNestedQuery(ContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contacts(@common.Req() request: Request): Promise<Contact[]> {
    const args = plainToClass(ContactFindManyArgs, request.query);
    return this.service.contacts({
      ...args,
      select: {
        adresse: true,
        age: true,
        codePostal: true,
        createdAt: true,
        dateCreation: true,
        dateVisite: true,
        email: true,
        id: true,
        nom: true,
        numBeneficiaire: true,
        prenom: true,
        remarques: true,
        status: true,
        telephone: true,
        updatedAt: true,
        ville: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    const result = await this.service.contact({
      where: params,
      select: {
        adresse: true,
        age: true,
        codePostal: true,
        createdAt: true,
        dateCreation: true,
        dateVisite: true,
        email: true,
        id: true,
        nom: true,
        numBeneficiaire: true,
        prenom: true,
        remarques: true,
        status: true,
        telephone: true,
        updatedAt: true,
        ville: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContact(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() data: ContactUpdateInput
  ): Promise<Contact | null> {
    try {
      return await this.service.updateContact({
        where: params,
        data: data,
        select: {
          adresse: true,
          age: true,
          codePostal: true,
          createdAt: true,
          dateCreation: true,
          dateVisite: true,
          email: true,
          id: true,
          nom: true,
          numBeneficiaire: true,
          prenom: true,
          remarques: true,
          status: true,
          telephone: true,
          updatedAt: true,
          ville: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    try {
      return await this.service.deleteContact({
        where: params,
        select: {
          adresse: true,
          age: true,
          codePostal: true,
          createdAt: true,
          dateCreation: true,
          dateVisite: true,
          email: true,
          id: true,
          nom: true,
          numBeneficiaire: true,
          prenom: true,
          remarques: true,
          status: true,
          telephone: true,
          updatedAt: true,
          ville: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/aides")
  @ApiNestedQuery(AideFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Aide",
    action: "read",
    possession: "any",
  })
  async findAides(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Aide[]> {
    const query = plainToClass(AideFindManyArgs, request.query);
    const results = await this.service.findAides(params.id, {
      ...query,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        crediteur: true,
        dateAide: true,
        dateExpiration: true,

        demande: {
          select: {
            id: true,
          },
        },

        frequence: true,
        id: true,
        infosCrediteur: true,
        montant: true,
        nombreVersements: true,
        reetudier: true,
        remarque: true,
        status: true,
        suspendue: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/aides")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectAides(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aides: {
        connect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/aides")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateAides(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aides: {
        set: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/aides")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectAides(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AideWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aides: {
        disconnect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/demandes")
  @ApiNestedQuery(DemandeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Demande",
    action: "read",
    possession: "any",
  })
  async findDemandes(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Demande[]> {
    const query = plainToClass(DemandeFindManyArgs, request.query);
    const results = await this.service.findDemandes(params.id, {
      ...query,
      select: {
        acteur: {
          select: {
            id: true,
          },
        },

        agesEnfants: true,
        apl: true,
        autresAides: true,
        autresCharges: true,
        categorieDemandeur: true,

        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateVisite: true,
        dernierContact: true,
        derniereRelance: true,
        dettes: true,
        facturesEnergie: true,
        id: true,
        loyer: true,
        natureDettes: true,
        nombreEnfants: true,
        nombreRelances: true,

        proprietaire: {
          select: {
            id: true,
          },
        },

        recommandation: true,
        remarques: true,
        revenus: true,
        revenusConjoint: true,
        situationFamiliale: true,
        situationProConjoint: true,
        situationProfessionnelle: true,
        status: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/demandes")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectDemandes(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DemandeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      demandes: {
        connect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/demandes")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateDemandes(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DemandeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      demandes: {
        set: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/demandes")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectDemandes(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DemandeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      demandes: {
        disconnect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Document",
    action: "read",
    possession: "any",
  })
  async findDocuments(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        aide: {
          select: {
            id: true,
          },
        },

        contact: {
          select: {
            id: true,
          },
        },

        contenu: true,
        createdAt: true,

        demande: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,

        typeDocument: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        visites: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectDocuments(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateDocuments(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectDocuments(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }
}
