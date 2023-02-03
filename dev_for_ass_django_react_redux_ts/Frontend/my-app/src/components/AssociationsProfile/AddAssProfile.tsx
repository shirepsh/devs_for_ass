import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectAssEmailLogged } from '../../slicers/developer/Association/associationSlice'
import { selectToken } from '../../slicers/developer/developerSlice'
import { useNavigate } from 'react-router-dom'
import '../Other/Form.css'

function AddAssProfile() {

  const token = useAppSelector(selectToken)
  const email = useAppSelector(selectAssEmailLogged)

  const navigate = useNavigate()
  const [flagk, setFlagk] = useState(false)

  useEffect(() => {
    if (flagk) {navigate('/AssPersonalProfile')}
  }, [flagk])

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  // UNCHANGEABLE
  const [email_from_reg, setEmail] = useState(email)

  const [association_name, setAssociationName] = useState("")
  const [profile_picture, setProfilePicture] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssociationName(event.target.value);
  };

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
    formData.append('email_from_reg', email_from_reg);
    formData.append('description', description);
    formData.append('location', location);

    if (profile_picture) {
      formData.append('profile_picture', profile_picture)
    }

    axios.post(MYSERVER + "ass", formData, config).then(()=> setFlagk(true))
  }

  return (
    <div>
      <h4 style={{color:"wheat"}}>create your profile </h4><br />

      <h6 style={{color:"wheat"}}>By doing this you will be able to present your association <br/> for the developers to choose from</h6> <br/>

      <form onSubmit={handleImageUpload} style={{color:"white"}}>
        your association name: <input type="text" placeholder="alut team" value={association_name} onChange={handleNameChange} required></input> <br/>
        description about the association:  <input type="text" placeholder="until 64 characters" value={description} maxLength={64} onChange={handleDescChange}></input> <br />
        location:  <input type="text" placeholder="Tel Aviv, Israel" value={location} onChange={handleLocationChange}></input> <br />
        profile picture:  <input type="file" onChange={handleImageChange}></input> <br/><br/>
        <h6 style={{color:"wheat"}}>we accepy only BMP, EPS, GIF, ICO, IM, JPEG, JPG, MSP, PCX, PNG, PPM, SGI, SPIDER, TIFF, WebP, and XBM fiels</h6> <br/>

        <button className="btn btn-danger" type="submit">send</button>

      </form>
      <br/><br/><br/><br/>
      

    </div>
  )
}

export default AddAssProfile


