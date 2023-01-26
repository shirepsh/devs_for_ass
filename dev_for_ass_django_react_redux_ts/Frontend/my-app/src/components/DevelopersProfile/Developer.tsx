import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectDevelopers, getAllDevAsync } from '../../slicers/developer/developerSlice'


export const Developer = () => {

  const devs = useAppSelector(selectDevelopers)
  
  const dispatch = useAppDispatch()

  useEffect(() => { dispatch(getAllDevAsync()) }, [dispatch])


  return (
    <div><h4>our developers:</h4>
      we have {devs.length} great developers <hr />
      {devs.map((dev : any, index:any) => 
      <div key={index}>
        {dev.full_name} , 
        {dev.email_from_reg}, 
        {dev.contact_phone_number}
        <img src={"http://127.0.0.1:8000" + dev.profile_picture} alt="" />
        
        </div>)}
    </div>
  );
}