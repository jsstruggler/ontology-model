import type { EntityField, EntityFieldType } from "./fields";

type MapPrimitiveType<T extends EntityFieldType> = T extends "string"
  ? string
  : T extends "number"
    ? number
    : T extends "date"
      ? string
      : never;

export type MapField<TField extends EntityField> =
  TField["nullable"] extends true
    ? MapPrimitiveType<TField["type"]> | null
    : MapPrimitiveType<TField["type"]>;
