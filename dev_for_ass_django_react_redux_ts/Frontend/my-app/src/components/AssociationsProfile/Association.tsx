import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getAllAssAsync, selectAssociation } from '../../slicers/developer/Association/associationSlice';


export const Association = () => {
    
  const ass = useAppSelector(selectAssociation)
  const dispatch = useAppDispatch()
  useEffect(() => { dispatch(getAllAssAsync()) }, [dispatch])


  return (
    <div><h4>our Association:</h4>
      we have {ass.length} great Association <hr />
      {ass.map((ass : any, index:any) => 
      <div key={index}>
        {ass.association_name} , 
        {ass.email_from_reg}, 
        {ass.contact_info}
        <img src={"http://127.0.0.1:8000" + ass.profile_picture} alt="" />
        
        </div>)}
    </div>
  );
}