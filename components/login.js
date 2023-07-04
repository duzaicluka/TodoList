import { useAuth } from '@/context/AuthContext';
import React, {useState} from 'react'

export default function Login(){

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)
    const [isLoggingIn, setIsLoggingIn]=useState(true);
    const {login, signup, currentUser} = useAuth()
    console.log(currentUser)

    async function submitHandler(){
        if(!email || !password){
            setError('Pease eneter email and password')
            return
        }
        if(isLoggingIn){
            try{
                await login (email,password)
            }catch(err){
                setError('Incorrect email or password')
            }
            return
        }
        signup(email,password)
    }

    return(
        <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center
            gap-2 sm:gap-4 '>

            <h1 className='font-extrabold text-2xl select-none sm:text-4xl'>{isLoggingIn ? 'Login' : 'Resgister'}</h1>

            {error && <div className='w-full max-w-[40ch] border-rose-400 border border-solid text-center text-rose-300 py-2'>{error}</div>}

            <input value={email} onChange={(e)=> setEmail(e.target.value)}
             type='text' placeholder='Email Address' className='outline-none duration-300
            border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full 
            max-w-[40ch]'/>
            <input value={password} onChange={(e)=> setPassword(e.target.value)}
             type='password' placeholder='Password' className='outline-none duration-300
            border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full 
            max-w-[40ch]'/>

            <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300
            relative after:absolute after:top-0 after:right-full
            after:bg-white after:z-10 after:w-full after:h-full
            overflow-hidden hover:after:translate-x-full after:duration-300 
            hover:text-slate-900 '> 
            <h2 className='relative z-20'>SUBMIT</h2>
            </button>
            <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={()=> setIsLoggingIn(!isLoggingIn)}> {!isLoggingIn ? 'Login' : 'Register'} </h2>

        </div>
    )
}