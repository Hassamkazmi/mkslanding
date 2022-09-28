import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from '../Components/Reuseable/Error'
import { userLogin } from '../redux/postReducer/UserPost'
import Layout from '../Components/Reuseable/layout'
import '../Components/CSS/registration.css'
import Footer from '../Components/Reuseable/Footer';
import Copyrights from '../Components/Reuseable/Copyrights';

const Login = () => {
  const { loading, userInfo, error ,success} = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate('/user-profile')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
    navigate('/user-profile')
  }

  // const AllFilled = (register.Email !== '') && (register.password !== "")
  // console.log(AllFilled,'register')
  return (
    <>
    <Layout />
   <div className='registrationform'>
   <form onSubmit={handleSubmit(submitForm)}>
      {/* {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>} */}
      <div className='form-group'>
      
        <input
          type='email'
          className='form-input'
          placeholder='Email'
          {...register('Email')}
          required
        />
      </div>
     
    
      <div className='form-group'>
      
        <input
          type='text'
          placeholder='Password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='buttonRegister' 
      disabled={loading}>
        Login
      </button>
    </form>
   </div>
   <Footer />
   <Copyrights />
    </>
  )
}

export default Login