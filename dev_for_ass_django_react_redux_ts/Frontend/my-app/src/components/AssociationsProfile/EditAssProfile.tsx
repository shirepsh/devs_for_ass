import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectAssEmailLogged, selectLoggedAss } from '../../slicers/developer/Association/associationSlice'
import { selectToken } from '../../slicers/developer/developerSlice'
import '../Other/Form.css'
import { useNavigate } from 'react-router-dom'

function EditAssProfile() {

  const tempAss = useAppSelector(selectLoggedAss)
  const token = useAppSelector(selectToken)
  const email = useAppSelector(selectAssEmailLogged)
  
  // for navigate to the personal profile after changing
  const navigate = useNavigate()
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (flag) {navigate('/AssPersonalProfile')}
  }, [flag])

  // config for the image & token for recognize the user
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  // UNCHANGEABLE
  const [email_from_reg, setEmail] = useState(email)

  const [association_name, setAssociationName] = useState(tempAss.association_name)
  const [profile_picture, setProfilePicture] = useState<File | null>(null);
  const [description, setDescription] = useState(tempAss.description)
  const [location, setLocation] = useState(tempAss.location)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssociationName(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePicture(event.target.files![0] || tempAss.profile_picture);
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
    formData.append('email_from_reg', email_from_reg);
    formData.append('description', description);
    formData.append('location', location);

    if (profile_picture) {
      formData.append('profile_picture', profile_picture)
    }

    axios.put(MYSERVER + "ass", formData, config).then(()=> setFlag(true))}
 

return (
  <div>
    <h4 style={{ color: "wheat" }}> Edit your Profile </h4>

    <form onSubmit={handleImageUpload} style={{ color: "white" }}>
      your association name: <input type="text" placeholder="alut name" value={association_name} onChange={handleNameChange}></input> <br />
      description about the association:  <input type="text" placeholder="until 64 characters" value={description} maxLength={64} onChange={handleDescChange}></input> <br />
      location:  <input type="text" placeholder="Tel Aviv, Israel" value={location} onChange={handleLocationChange}></input> <br />
      profile picture:  <input type="file" onChange={handleImageChange}></input> <br /><br />
      <h6 style={{ color: "wheat" }}>we accepy only BMP, EPS, GIF, ICO, IM, JPEG, JPG, MSP, PCX, PNG, PPM, SGI, SPIDER, TIFF, WebP, and XBM fiels</h6> <br />

      <button className="btn btn-danger" type="submit">send</button>  <br />
    </form>
  </div>
)
}

export default EditAssProfile


