import React from 'react'

function QandA() {
  return (
    <><div className="alert alert-success">
        Q : Do I have to create a profile to contact associations?
    </div>
    <div className="alert alert-info" role="alert">
        A : No! , You do not have to register to see the content
      </div>
      
      <div className="alert alert-success" role="alert">
        Q : as a developer how can i display my own skilles ?
      </div>
      <div className="alert alert-info" role="alert">
      A : simply , Follow a quick login procedure and then create a profile for yourself, <br/>
       once you create your profile will be accessible to everyone! <br/>
       The same process also applies to non-profit organizations 
    </div>

    <div className="alert alert-success" role="alert">
        Q : as a association how can I add a profile for the technology I'm looking for? ?
      </div>
      <div className="alert alert-info" role="alert">
      A : with ease! After you have created a user, the option of creating a post will open before you, <br/>
      fill in the details and publish. From that moment the post will be available to all developers
    </div>
    <br/><br/><br/>
    </>
  )
}

export default QandA