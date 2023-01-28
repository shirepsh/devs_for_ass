export default class Post{
    id?:number
    email_from_reg?: string = "" 
    profile_picture?: File | undefined
    ass_name?: string = "" 
    post_title?:string = ""
    post_description?:string = "" 
    photo?: File | undefined 
    contact_phone_number?: string = ""
    handleImageUpload?: (() => Promise<void>) | undefined;
}