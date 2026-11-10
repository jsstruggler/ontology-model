import type { OntologyEntity } from "./entities";

type GetChildren<T extends OntologyEntity> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T["children"] extends readonly any[] ? T["children"][number] : never;

type BuildPaths<T extends OntologyEntity, Prefix extends string = ""> =
  // 1. Пути для текущих полей
  | (T["fields"][number]["name"] extends string
      ? `${Prefix}${T["fields"][number]["name"]}`
      : never)
  // 2. Пути для дочерних элементов
  | (GetChildren<T> extends infer C
      ? C extends OntologyEntity
        ? `${Prefix}${C["name"]}` | BuildPaths<C, `${Prefix}${C["name"]}.`>
        : never
      : never);

export type GetFullKeypath<T extends Record<string, OntologyEntity>> = {
  [K in keyof T & string]: `${K}` | BuildPaths<T[K], `${K}.`>;
}[keyof T & string];
