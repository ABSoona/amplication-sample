import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ContactController } from "../contact.controller";
import { ContactService } from "../contact.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adresse: "exampleAdresse",
  age: 42,
  codePostal: 42,
  createdAt: new Date(),
  dateCreation: new Date(),
  dateVisite: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  numBeneficiaire: "exampleNumBeneficiaire",
  prenom: "examplePrenom",
  remarques: "exampleRemarques",
  status: "exampleStatus",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
  ville: "exampleVille",
};
const CREATE_RESULT = {
  adresse: "exampleAdresse",
  age: 42,
  codePostal: 42,
  createdAt: new Date(),
  dateCreation: new Date(),
  dateVisite: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  numBeneficiaire: "exampleNumBeneficiaire",
  prenom: "examplePrenom",
  remarques: "exampleRemarques",
  status: "exampleStatus",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
  ville: "exampleVille",
};
const FIND_MANY_RESULT = [
  {
    adresse: "exampleAdresse",
    age: 42,
    codePostal: 42,
    createdAt: new Date(),
    dateCreation: new Date(),
    dateVisite: new Date(),
    email: "exampleEmail",
    id: 42,
    nom: "exampleNom",
    numBeneficiaire: "exampleNumBeneficiaire",
    prenom: "examplePrenom",
    remarques: "exampleRemarques",
    status: "exampleStatus",
    telephone: "exampleTelephone",
    updatedAt: new Date(),
    ville: "exampleVille",
  },
];
const FIND_ONE_RESULT = {
  adresse: "exampleAdresse",
  age: 42,
  codePostal: 42,
  createdAt: new Date(),
  dateCreation: new Date(),
  dateVisite: new Date(),
  email: "exampleEmail",
  id: 42,
  nom: "exampleNom",
  numBeneficiaire: "exampleNumBeneficiaire",
  prenom: "examplePrenom",
  remarques: "exampleRemarques",
  status: "exampleStatus",
  telephone: "exampleTelephone",
  updatedAt: new Date(),
  ville: "exampleVille",
};

const service = {
  createContact() {
    return CREATE_RESULT;
  },
  contacts: () => FIND_MANY_RESULT,
  contact: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Contact", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContactService,
          useValue: service,
        },
      ],
      controllers: [ContactController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contacts", async () => {
    await request(app.getHttpServer())
      .post("/contacts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreation: CREATE_RESULT.dateCreation.toISOString(),
        dateVisite: CREATE_RESULT.dateVisite.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contacts", async () => {
    await request(app.getHttpServer())
      .get("/contacts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateCreation: FIND_MANY_RESULT[0].dateCreation.toISOString(),
          dateVisite: FIND_MANY_RESULT[0].dateVisite.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contacts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contacts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contacts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contacts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateCreation: FIND_ONE_RESULT.dateCreation.toISOString(),
        dateVisite: FIND_ONE_RESULT.dateVisite.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contacts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contacts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateCreation: CREATE_RESULT.dateCreation.toISOString(),
        dateVisite: CREATE_RESULT.dateVisite.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contacts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
