export default class Association{
    id?:number
    email_from_reg?: string = "" 
    profile_picture?: File | undefined 
    association_name?:string = ""
    description?: string = "i am a developer"
    contact_info?: string = ""
    location ?: string = ""
    images ?: File | undefined 
    handleImageUpload?: (() => Promise<void>) | undefined;
}
