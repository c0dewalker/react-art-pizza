import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Main } from '../layout/Main'
import { Header } from '../layout/header/Header'
import { InputField } from '../shared/InputField'
import { Button } from '../shared/Button'
import { Section } from '../layout/Section'
import '../styles/Login.css'

export const LoginPage = () => {
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })
    const { errors } = formState
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <Header rightElement="logout">Login</Header>
            <Main>
                <Section>
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

                        <Button disabled={!formState.isValid} variant="ghost" type="submit" fullWidth>
                            Login
                        </Button>

                        <div className="link-to">
                            'Or '
                            <Link className="link black" to="/signup">
                                signup
                            </Link>
                        </div>
                    </form>
                </Section>
            </Main>
        </>
    )
}
