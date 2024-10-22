import React from 'react'
import { UserInfo } from '../components'
import { useSelector } from 'react-redux'


const Account = () => {
  const userData = useSelector((state) => state.auth.userData);
  

  return userData ? (
    <div>
      <UserInfo userId={userData.$id}/>
    </div>
  ) : (<div className='mt-4 text-3xl text-red-700 text-center'>User isn't logged in</div>)
}

export default Account