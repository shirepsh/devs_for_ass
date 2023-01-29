export default class Association{
    id?:number
    email_from_reg?: string = "" 
    profile_picture?: string = "" 
    association_name?:string = ""
    contact_phone_number?: string = ""
    description?: string = "i am a ASSOCIATION"
    location ?: string = ""
    // images ?: File | undefined 
    handleImageUpload?: (() => Promise<void>) | undefined;
}
