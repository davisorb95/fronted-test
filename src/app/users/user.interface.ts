export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  date_in: string;
}

export enum Gender {
  Agender = "Agender",
  Bigender = "Bigender",
  Female = "Female",
  Genderfluid = "Genderfluid",
  Genderqueer = "Genderqueer",
  Male = "Male",
  NonBinary = "Non-binary",
  Polygender = "Polygender",
}
