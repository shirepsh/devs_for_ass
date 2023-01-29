export default class Post{
    id?:number
    email_from_reg?: string = "" 
    profile_picture?: string = ""
    ass_name?: string = "" 

    post_title?:string = ""
    post_description?:string = "" 
    photo?: string = ""
    contact_phone_number?: string = ""
    handleImageUpload?: (() => Promise<void>) | undefined;
}