export interface fakerFinanceType{
    fakerAccountNumber: string,
    fakerAmount: string,
    fakerCreditCardCVV: string,
    fakerCreditCardIssuer: string,
    fakerCreditCardNumber: string,

}
export interface userData{
    fakerUserId: string,
    fakerUsername: string,
    fakerEmail: string,
    fakerAvatar: string,
    fakerPassword: string,
    fakerBirthdate: Date,
    fakerRegisteredAt: Date,
    fakerBio: string,
    fakerGender: string,
    fakerZodiac: string,
    fakerJobTitle: string,
    fakerJobDesc: string,
    fakerFinance: fakerFinanceType
};