export default class Developer{
    id?:number
    email_from_reg: string = "" 
    profile_picture?: string = "" 
    full_name?:string = ""
    years_of_experience?:string = "" 
    description?: string = "i am a developer"
    contact_phone_number?: string = ""
    linkdin_url ?: string = ""
    GitHub_url ?: string = ""
    handleImageUpload?: (() => Promise<void>) | undefined;
}