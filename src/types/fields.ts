export type EntityFieldType = "date" | "string" | "number";

interface BaseEntityField {
  name: string;
  type: EntityFieldType;
  optional?: boolean;
  nullable?: boolean;
}

interface DateEntityField extends BaseEntityField {
  type: "date";
}

interface StringEntityField extends BaseEntityField {
  type: "string";
}

interface NumericEntityField extends BaseEntityField {
  type: "number";
}

export type EntityField =
  | DateEntityField
  | StringEntityField
  | NumericEntityField;
