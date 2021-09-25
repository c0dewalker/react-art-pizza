import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Header } from './layout/header/Header'
import { Screen } from './layout/Screen'
import { InputField } from './shared/InputField'
import { Section } from './layout/Section'
import './Login.css'

export const Login = () => {
    const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })
    const { errors } = formState
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <Header rightElement="logout">Login</Header>
            <Screen>
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

                        <button disabled={!formState.isValid} className="btn btn-primary bold" type="submit">
                            Login
                        </button>

                        <div className="link-to">
                            'Or '
                            <Link className="link black" to="/signup">
                                signup
                            </Link>
                        </div>
                    </form>
                </Section>
            </Screen>
        </>
    )
}
