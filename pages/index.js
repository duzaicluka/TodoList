import Image from 'next/image'
import Head from 'next/head'
import Login from '@/components/login'
import UserDashboard from '@/components/UserDashboard'
import { useAuth } from '@/context/AuthContext'


export default function Home() {
  const {currentUser}= useAuth()
  console.log(currentUser)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard/>}
    
      
    </>
  )
}
