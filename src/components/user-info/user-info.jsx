import React from 'react';
import {Col} from 'react-bootstrap';
function UserInfo({email, name}) {
    
        return (
          <>
            <h4 style={{ marginTop: "110px" }} className="text-center">
              Your Info
            </h4>
            <p className="text-center">Name- {name} </p>
            <p style={{ paddingBottom: "150px" }} className="text-center">
              e-mail- {email}
            </p>
          </>
        );

  
}
export default UserInfo;