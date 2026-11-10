import { well } from "./entities";
import type { EntityData, Prettify } from "./types";
import type { GetFullKeypath } from "./types/keypaths";

export const ontologyModel = {
  well,
} as const;

export type OntologyModel = typeof ontologyModel;

export type OntologyModelData = Prettify<{
  [TRootKeyPath in keyof OntologyModel]?: EntityData<
    OntologyModel[TRootKeyPath]
  >[];
}>;

export type Keypath = Prettify<GetFullKeypath<OntologyModel>>;
export type RootKeypath = keyof OntologyModel;
