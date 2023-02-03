import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectAssEmailLogged, selectLoggedAss } from '../../slicers/developer/Association/associationSlice'
import { selectToken} from '../../slicers/developer/developerSlice'
import { addPost } from '../../slicers/developer/posts/postsSlice'
import { useNavigate } from 'react-router-dom'
import '../Other/Form.css'

function AddPost() {

  const dispatch = useAppDispatch()
  
  const tempAss = useAppSelector(selectLoggedAss)
  const token = useAppSelector(selectToken)
  const email = useAppSelector(selectAssEmailLogged)

  const navigate = useNavigate()
  const [flagk, setFlagk] = useState(false)

  useEffect(() => {
    if (flagk) {navigate('/MyPosts')}
  }, [flagk])

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

      formData.append('contact_phone_number', contact_phone_number);
      formData.append('post_title', post_title);
      formData.append('post_description', post_description);

      if (photo){
      formData.append('photo', photo)}

      axios.post(MYSERVER + "post", formData, config).then((res) => dispatch(addPost(res.data)) )
      .then(()=> setFlagk(true))
    }

  return (
    <div> 
      <h4 style={{color:"wheat"}}>add post: </h4><br/>

      <h6 style={{color:"wheat"}}>In order to request help with a certain technology for your association</h6><br/>

    {tempAss.association_name  ? 
    <form onSubmit={handleImageUpload} style={{color:"white"}}>
    association name: <input type="text"  placeholder="association name" value={association_name} onChange={handleNameChange}></input> <br/>
    phone number for contact:  <input type="text"  placeholder="contact phone number" value={contact_phone_number} onChange={handlePhoneChange}></input> <br/>
    post title:  <input type="text"  placeholder="for example: required website" value={post_title} onChange={handlePostTitleChange}></input> <br/>
    post description : <input type="text" placeholder="for example: A fundraising site for the association " value={post_description} onChange={handlePostDescriptionChange}></input> <br/><br/>
    photo of your association:  <input type="file" onChange={handleImageChange}></input> <br/> <br/>
    <h6  style={{color:"wheat"}}>we accepy only BMP, EPS, GIF, ICO, IM, JPEG, JPG, MSP, PCX, PNG, PPM, SGI, SPIDER, TIFF, WebP, and XBM fiels</h6> <br/>

    <button className="btn btn-danger" type="submit">send</button>  <br/>
      </form> : "you need to create profile first"}
      <br/><br/><br/><br/>
    </div>
  )
}

export default AddPost



// return (
//   <div> 
//     <h4 style={{color:"wheat"}}>add post: </h4><br/>

//     <h6 style={{color:"wheat"}}>In order to request help with a certain technology for your association</h6><br/>

//   {tempAss.association_name  ? 
//   <form onSubmit={handleImageUpload} style={{color:"white"}}>
//   association name: <input type="text"  placeholder="full name" value={association_name} onChange={handleNameChange}></input> <br/>
//   phone number for contact:  <input type="text"  placeholder="contact phone number" value={contact_phone_number} onChange={handlePhoneChange}></input> <br/>
//   post title:  <input type="text"  placeholder="post title" value={post_title} onChange={handlePostTitleChange}></input> <br/>
//   post description : <input type="text" placeholder="post_description" value={post_description} onChange={handlePostDescriptionChange}></input> <br/><br/>
//   <h6  style={{color:"wheat"}}>we accepy only BMP, EPS, GIF, ICO, IM, JPEG, JPG, MSP, PCX, PNG, PPM, SGI, SPIDER, TIFF, WebP, and XBM fiels</h6> 
//   photo of your association:  <input type="file" onChange={handleImageChange}></input> <br/> 

//   <button type="submit">send</button>  <br/>
//     </form> : "you need to create profile first"}

//   </div>
// )