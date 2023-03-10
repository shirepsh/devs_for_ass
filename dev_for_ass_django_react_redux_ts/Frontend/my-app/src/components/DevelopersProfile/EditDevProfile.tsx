import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../../app/hooks'
import { MYSERVER } from '../../env'
import { selectEmailLogged, selectLoggedDev, selectToken } from '../../slicers/developer/developerSlice'
import '../Other/Form.css'
import { useNavigate } from 'react-router-dom'

function EditDevProfile() {

  const token = useAppSelector(selectToken)
  const tempDev = useAppSelector(selectLoggedDev)
  const email = useAppSelector(selectEmailLogged)

  // for navigate to the personal profile after changing
  const navigate = useNavigate()
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (flag) {navigate('/devPersonalProfile')}
  }, [flag])

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  };

  // UNCHANGEABLE
  const [email_from_reg, setEmail] = useState(email)

  const [full_name, setFullname] = useState(tempDev.full_name)
  const [contact_phone_number, setContactPhoneNumber] = useState(tempDev.contact_phone_number)
  const [profile_picture, setProfilePicture] = useState<File | null>(null);
  const [years_of_experience, setYearsOfExperience] = useState(tempDev.years_of_experience);
  const [description, setDescription] = useState(tempDev.description)
  const [linkdin_url, setLinkdinUrl] = useState(tempDev.linkdin_url)
  const [GitHub_url, setGitHubUrl] = useState(tempDev.GitHub_url)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactPhoneNumber(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePicture(event.target.files![0] || tempDev.profile_picture);
  };

  const handleYearsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearsOfExperience(event.target.value);
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleLinkDinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLinkdinUrl(event.target.value);
  };

  const handleGitHubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGitHubUrl(event.target.value);
  };

  const handleImageUpload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('full_name', full_name);
    formData.append('contact_phone_number', contact_phone_number);
    formData.append('email_from_reg', email_from_reg);
    formData.append('years_of_experience', years_of_experience);
    formData.append('description', description);
    formData.append('linkdin_url', linkdin_url);
    formData.append('GitHub_url', GitHub_url);

    if (profile_picture) {
      formData.append('profile_picture', profile_picture)
    }

    axios.put(MYSERVER + "dev", formData, config).then(()=> setFlag(true))}

return (
    <div>
      <h4 style={{ color: "wheat" }}>Edit your profile </h4>

      <form onSubmit={handleImageUpload} style={{ color: "white" }}>
        your full name: <input type="text" placeholder="shir epshtain" value={full_name} onChange={handleNameChange}></input> <br />
        phone number:  <input type="text" placeholder="050-555-5555" value={contact_phone_number} onChange={handlePhoneChange}></input> <br />
        description about yourself:  <input type="text" placeholder="until 64 characters" value={description} maxLength={64} onChange={handleDescChange}></input> <br />
        your experience: <input type="text" placeholder="years of experience" value={years_of_experience} onChange={handleYearsChange}></input> <br />
        gitHub url:  <input type="text" placeholder="linkdin url" value={linkdin_url} onChange={handleLinkDinChange}></input> <br />
        linkdin url:  <input type="text" placeholder="GitHub url" value={GitHub_url} onChange={handleGitHubChange}></input> <br />
        profile picture:  <input type="file" onChange={handleImageChange}></input> <br /><br />
        <h6 style={{ color: "wheat" }}>we accepy only BMP, EPS, GIF, ICO, IM, JPEG, JPG, MSP, PCX, PNG, PPM, SGI, SPIDER, TIFF, WebP, and XBM fiels</h6> <br />

        <button className="btn btn-danger" type="submit">send</button>  <br />
        <br /><br /><br /><br />
      </form>
    </div>
)
}

export default EditDevProfile

