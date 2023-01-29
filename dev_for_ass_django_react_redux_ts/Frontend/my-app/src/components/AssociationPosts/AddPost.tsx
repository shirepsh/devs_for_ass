import axios from 'axios'
import React, { useState  } from 'react'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectLoggedAss } from '../../slicers/developer/Association/associationSlice'
import { selectToken} from '../../slicers/developer/developerSlice'

function AddPost() {

  const tempAss = useAppSelector(selectLoggedAss)
  const token = useAppSelector(selectToken)

  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
};

    // UNCHANAGE ABLE
    let ass_name: any = tempAss.association_name
    let email_from_reg: any = tempAss.email_from_reg
    let profile_picture: any = tempAss.profile_picture

    // const [ass_name, setAssname] = useState(tempAss.association_name)
    // const [email_from_reg, setEmail] = useState(tempAss.email_from_reg)
    // const [profile_picture, setProfilePicture] = useState(tempAss.profile_picture)


    const [contact_phone_number, setContactPhoneNumber] = useState("")
    const [post_title, setPostTitle] = useState("");
    const [post_description, setPostDescription] = useState("");
    const [photo, setPhoto] = useState<File | any>(null)
   

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setContactPhoneNumber(event.target.value);
    };

    const handlePostTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value);
    };

    const handlePostDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostDescription(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files![0]);
    };
  
  
    const handleImageUpload = async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('ass_name', ass_name );
      formData.append('email_from_reg',email_from_reg);
      formData.append('profile_picture', profile_picture);

      formData.append('contact_phone_number', contact_phone_number);
      formData.append('post_title', post_title);
      formData.append('post_description', post_description);
      formData.append('photo', photo!);

      const res = await axios.post(MYSERVER + "post", formData, config)}

  return (
    <div> 
      <h4>add post: </h4><br/>

    <form onSubmit={handleImageUpload}>   
    phone number:  <input type="text"  placeholder="contact phone number" value={contact_phone_number} onChange={handlePhoneChange}></input> <br/>
    post title:  <input type="text"  placeholder="post title" value={post_title} onChange={handlePostTitleChange}></input> <br/>
    post description : <input type="text" placeholder="post_description" value={post_description} onChange={handlePostDescriptionChange}></input> <br/>
    photo:  <input type="file" value={photo} onChange={handleImageChange}></input> <br/>

    <button onClick={()=>console.log(token)}>stam</button>
    <button type="submit">send</button>  <br/>
      </form>

    </div>
  )
}

export default AddPost


