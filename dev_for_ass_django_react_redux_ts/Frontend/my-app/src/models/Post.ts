export default class Post{
    id?:number
    // profile_picture?: any = ""
    association_name?: any = "" 
    email_from_reg?: any = "" 

    post_title?:string = ""
    post_description?:string = "" 
    photo?: any = ""  
    contact_phone_number?: string = ""
    handleImageUpload?: (() => Promise<void>) | undefined;
}