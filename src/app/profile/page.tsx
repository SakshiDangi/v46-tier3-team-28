import UserProfile from '@/components/UserProfile';
import React from 'react'

const Profile = () => {
  return (
    <main className="w-full h-fit min-h-screen flex items-center justify-start overflow-y-auto flex-col py-32 bg-[#FAFAFA]">
      <UserProfile />
    </main>
  )
}

export default Profile;