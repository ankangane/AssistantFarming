export class SignUpVm
{
    role?:string;
    id?:number;
    name?:string;
    email?:string;
    securityQuestion?:string;
    securityAnswer?:string;
    address?:string;
    contanctNo?:string;
    password?:string;
}

export class SupplierVm
{
    Role?:string;
    Id?:number;
    Name?:string;
    Email?:string;
    securityQuestion?:string;
    securityAnswer?:string;
    Address?:string;
    ContanctNo?:string;
    password?:string;
}


export class FeedBack
    {
        //Feedback result having a boolean value
        Result ?:boolean;
        //Feedback message
       Message ?:string
    }

    export class AdvertiesmentFeedBack
    {
        //Feedback result having a boolean value
        result ?:boolean;
        //Feedback message
       message ?:string
    }