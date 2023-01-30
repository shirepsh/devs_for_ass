import axios from 'axios'
import React, { useState  } from 'react'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectAssEmailLogged, selectLoggedAss } from '../../slicers/developer/Association/associationSlice'
import { selectToken} from '../../slicers/developer/developerSlice'

function AddPost() {

  const tempAss = useAppSelector(selectLoggedAss)
  const token = useAppSelector(selectToken)
  const email = useAppSelector(selectAssEmailLogged)

  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
};

    // UNCHANGEABLE
    const [email_from_reg, setEmail] = useState(email)
    // const [profile_picture, setProfilePicture] = useState(tempAss.profile_picture)

    const [association_name, setAssname] = useState(tempAss.association_name)
    const [contact_phone_number, setContactPhoneNumber] = useState("")
    const [post_title, setPostTitle] = useState("");
    const [post_description, setPostDescription] = useState("");
    const [photo, setPhoto] = useState<File | any>(null)
   
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAssname(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setContactPhoneNumber(event.target.value);
    };

    const handlePostTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value);
    };

    const handlePostDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostDescription(event.target.value);
    };

    // const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setProfilePicture(event.target.files![0]);
    // };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoto(event.target.files![0]);
    };
  
    const handleImageUpload = async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('association_name', association_name );
      formData.append('email_from_reg',email_from_reg);
      // formData.append('profile_picture', profile_picture);

      formData.append('contact_phone_number', contact_phone_number);
      formData.append('post_title', post_title);
      formData.append('post_description', post_description);
      formData.append('photo', photo);

      console.log(tempAss.association_name)
      axios.post(MYSERVER + "post", formData, config)}

  return (
    <div> 
      <h4>add post: </h4><br/>

    {tempAss.association_name ? 
    <form onSubmit={handleImageUpload}>
    association name: <input type="text"  placeholder="full name" value={association_name} onChange={handleNameChange}></input> <br/>
    phone number for contact:  <input type="text"  placeholder="contact phone number" value={contact_phone_number} onChange={handlePhoneChange}></input> <br/>
    post title:  <input type="text"  placeholder="post title" value={post_title} onChange={handlePostTitleChange}></input> <br/>
    post description : <input type="text" placeholder="post_description" value={post_description} onChange={handlePostDescriptionChange}></input> <br/>
    photo of your association:  <input type="file" onChange={handleImageChange}></input> <br/> 

    <button type="submit">send</button>  <br/>
      </form> : "you need to create profile first"}

    </div>
  )
}

export default AddPost


