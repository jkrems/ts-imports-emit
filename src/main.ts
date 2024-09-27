import { direct } from "./direct";
import { indirect } from "#indirect";
import { internal } from "imports-emit/src/indirect.js";

console.log(direct + indirect + internal);
