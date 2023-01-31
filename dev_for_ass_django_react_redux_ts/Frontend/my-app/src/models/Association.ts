export default class Association{
    id?:number
    email_from_reg?: any = "" 
    profile_picture?: any = ""
    association_name?:any = ""
    contact_phone_number?: any = ""
    description?: any = "i am a ASSOCIATION"
    location ?: any = ""
    // images ?: File | undefined 
    handleImageUpload?: (() => Promise<void>) | undefined;
}
