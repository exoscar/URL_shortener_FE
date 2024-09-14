import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './input'
import { Button } from './button'
import 


const Login = () => {

  const isLogged = false;



  return (
      <Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>to your account if you already have one</CardDescription>
  </CardHeader>
  <CardContent className='my-2'>
    <div className='my-1'>
      <Input name='email' type='email' placeholder='Enter Email'/>
    </div>
    <div className='mt-2'>
      <Input name='password' type='password' placeholder='Enter Password'/>
    </div>
    
  </CardContent>
  <CardFooter>
    <Button>
      {isLogged? <CircleLoader/> }
      Login
    </Button>
  </CardFooter>
      </Card>
  )
}

export default Login
