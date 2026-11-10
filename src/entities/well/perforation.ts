import type { OntologyEntity } from "@/types";

export const perforation = {
  name: "perforation",
  fields: [
    { name: "date", type: "date" },
    { name: "formationName", type: "string", optional: true },
    { name: "type", type: "string" },
  ],
} as const satisfies OntologyEntity;
