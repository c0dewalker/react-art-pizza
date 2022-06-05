import { Link } from 'react-router-dom'
import { Header, PageLayout, InputField, Button } from '../../components'
import { useForm } from 'react-hook-form'
import { AuthForm } from '../login/LoginPage'


export const SignupPage = () => {
   const { register, handleSubmit, formState } = useForm()
   const { errors } = formState

   const onSubmit = data => {
      console.log(data)
   }

   return (
      <>
         <Header rightElement="logout">Signup</Header>
         <PageLayout>
            <AuthForm>
               <form onSubmit={handleSubmit(onSubmit)}>
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

                  <InputField
                     type="password"
                     label="Repeat password"
                     invalid={!!errors?.passwordRepeat}
                     {...register('passwordRepeat', { required: true })}
                  />
                  {errors?.passwordRepeat && <div className="error-message text-sm">This field is required</div>}

                  <Button disabled={Object.keys(errors).length > 0} type="submit" fullWidth>
                     Signup
                  </Button>

                  <div className="link-to">
                     Or{' '}
                     <Link className="link" to="/login">
                        login
                     </Link>
                  </div>
               </form>
            </AuthForm>
         </PageLayout>
      </>
   )
}
