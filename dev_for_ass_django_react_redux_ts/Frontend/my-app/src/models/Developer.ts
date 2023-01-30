export default class Developer{
    id?:number
    email_from_reg: any = "" 
    profile_picture?: any = "" 
    full_name?:any = ""
    contact_phone_number?: any = ""
    years_of_experience?:any = "" 
    description?: any = "i am a developer"
    linkdin_url ?: any = ""
    GitHub_url ?: any = ""
    handleImageUpload?: (() => Promise<void>) | undefined;
}