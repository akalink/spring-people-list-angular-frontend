import { Ethnicity } from "./ethnicity";
import { Gender } from "./gender";

export interface Person {
    id: Number;
    fullName: String;
    age: number;
    gender: Gender;
    ethnicity: Ethnicity;
}
