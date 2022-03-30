import React from 'react';

function UserInfo({email, name}) {
    
        return (
        <>
        <h4 className='text-center'>Your Info</h4>
        <p className='text-center'>Name: {name} </p>
        <p className='text-center'>e-mail: {email}</p>
        </>
        
 )

  
}
export default UserInfo;