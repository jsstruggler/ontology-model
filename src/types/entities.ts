import type { MapField } from "./core";
import type { EntityField } from "./fields";
import type { Prettify } from "./utils";

export type OntologyEntity = {
  name: string;
  fields: EntityField[];
  children?: OntologyEntity[];
};

type FieldUnion<T extends EntityField[]> = T[number];

export type EntityData<TEntity extends OntologyEntity> = Prettify<
  // Обязательные поля
  {
    [F in FieldUnion<TEntity["fields"]> as F["optional"] extends true
      ? never
      : F["name"]]: MapField<F>;
  } & {
    // Необязательные поля
    [F in FieldUnion<TEntity["fields"]> as F["optional"] extends true
      ? F["name"]
      : never]?: MapField<F>;
  } &
    // Дочерние элементы (трансформированные из массива объектов с полем 'name')
    (TEntity["children"] extends OntologyEntity[]
      ? {
          [C in TEntity["children"][number] as C["name"]]: EntityData<C>[];
        }
      : // eslint-disable-next-line @typescript-eslint/no-empty-object-type
        {})
>;
