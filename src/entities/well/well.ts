import type { OntologyEntity } from "@/types";
import { perforation } from "./perforation";

export const well = {
  name: "well",
  fields: [
    { name: "name", type: "string", nullable: true },
    { name: "startDate", type: "date", optional: true },
    { name: "wellboreCount", type: "number", optional: true },
  ],
  children: [perforation],
} as const satisfies OntologyEntity;
