import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    submittedAt: bigint;
    email: string;
    message: string;
    phone: string;
}
export interface QualificationForm {
    age: string;
    primaryGoal: string;
    profession: string;
    fullName: string;
    submittedAt: bigint;
    biggestChallenge: string;
    companyName: string;
    annualTurnover: string;
    industry: string;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllQualificationForms(): Promise<Array<QualificationForm>>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
    submitQualificationForm(fullName: string, age: string, profession: string, companyName: string, industry: string, annualTurnover: string, biggestChallenge: string, primaryGoal: string): Promise<void>;
}
