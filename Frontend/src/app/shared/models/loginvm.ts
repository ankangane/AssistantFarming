export class LoginVm
{
    email?:string;
    password?:string;
}

export class LoggedUserVm
{
    id? :number;
        emailID?:string;
        role ?:string
        token? :string
}

export enum AdvertisementStatus
{
    PENDING, ACCEPTED, REJECTED
}