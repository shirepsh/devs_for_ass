import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectAssEmailLogged, selectLoggedAss } from '../../slicers/developer/Association/associationSlice'
import { selectToken } from '../../slicers/developer/developerSlice'

function EditAssProfile() {

  const tempAss= useAppSelector(selectLoggedAss)
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

  const [association_name, setAssociationName] = useState(tempAss.association_name)
  const [profile_picture, setProfilePicture] = useState(tempAss.profile_picture)
  // const [contact_phone_number, setContactPhoneNumber] = useState(tempAss.contact_phone_number)
  const [description, setDescription] = useState(tempAss.description)
  const [location, setLocation] = useState(tempAss.location)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssociationName(event.target.value);
  };

  // const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setContactPhoneNumber(event.target.value);
  // };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePicture(event.target.files![0]);
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleImageUpload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('association_name', association_name);
    // formData.append('contact_phone_number', contact_phone_number);
    formData.append('email_from_reg', email_from_reg);
    // formData.append('profile_picture', profile_picture!);
    formData.append('description', description);
    formData.append('location', location);

    if(profile_picture){
      formData.append('profile_picture', profile_picture)}

    axios.put(MYSERVER + "ass", formData, config)}



  return (
    <div>
      <h4> Edit your Profile </h4>

      <form onSubmit={handleImageUpload}>   
    your association name: <input type="text"  placeholder="association name" value={association_name} onChange={handleNameChange}></input> <br/>
    {/* phone number:  <input type="text"  placeholder="contact phone number" value={contact_phone_number} onChange={handlePhoneChange}></input> <br/> */}
    profile picture:  <input type="file" onChange={handleImageChange}></input> <br/> 
    description:  <input type="text"  placeholder="description" value={description} onChange={handleDescChange}></input> <br/>
    location:  <input type="text"  placeholder="location" value={location} onChange={handleLocationChange}></input> <br/>

    <button type="submit">send</button>  <br/>
      </form>










    </div>
  )
}

export default EditAssProfile