import { generateNamespace } from "@gql2ts/from-schema";
import schemaDoc from "../src/typeDefs";
import { DEFAULT_OPTIONS } from "@gql2ts/language-flow";
import fs from "fs";
import path from "path";

const myNamespace = generateNamespace(
  "Humanise",
  schemaDoc,
  { ignoreTypeNameDeclaration: true },
  {
    ...DEFAULT_OPTIONS,
    interfaceBuilder: (name, body) => `export type ${name} = ${body}`,
    typeBuilder: (name, body) => `export type ${name} = ${body}`,
    generateNamespace: (namespaceName, interfaces) => interfaces,
    generateInterfaceName: name => `${name}`
  }
);

fs.writeFileSync(path.resolve("./src/schemaTypes.flow.js"), myNamespace);
