import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { PageLayout, Header, InputField, Button } from '../../components'
import { box } from '../../styles/styles.mixins'

export const LoginPage = () => {
   const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })
   const { errors } = formState
   const onSubmit = data => {
      console.log(data)
   }

   return (
      <>
         <Header rightElement="logout">Login</Header>
         <PageLayout>
            <AuthForm onSubmit={handleSubmit(onSubmit)}>
               <InputField
                  type="email"
                  label="E-mail"
                  invalid={!!errors?.email}
                  {...register('email', { required: true })}
               />
               {errors?.email && <div className="error-message text-sm">This field is required</div>}

               <InputField
                  type="password"
                  label="Password"
                  invalid={!!errors?.password}
                  {...register('password', { required: true })}
               />
               {errors?.password && <div className="error-message text-sm">This field is required</div>}

               <Button disabled={!formState.isValid} type="submit" fullWidth>
                  Login
               </Button>

               <div className="link-to">
                  {'Or '}
                  <Link className="link" to="/signup">
                     signup
                  </Link>
               </div>
            </AuthForm>
         </PageLayout>
      </>
   )
}

export const AuthForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  ${box}
  & button {
    margin-top: 1.25rem;
  }

  & .link-to {
    text-align: center;
    margin-top: 0.75rem;
  }

  & .link {
    cursor: pointer;
    font-weight: 800;
  }
}
`
