import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Main } from '../../components/layout/Main'
import { Section } from '../../components/layout/Section'
import { InputField } from '../../components/InputField'
import { useForm } from 'react-hook-form'

export const SignupPage = () => {
    const { register, handleSubmit, formState } = useForm()
    const { errors } = formState

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <>
            <Header rightElement="logout">Signup</Header>
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

                        <InputField
                            type="password"
                            label="Repeat password"
                            invalid={!!errors?.passwordRepeat}
                            {...register('passwordRepeat', { required: true })}
                        />
                        {errors?.passwordRepeat && <div className="error-message text-sm">This field is required</div>}

                        <button
                            disabled={Object.keys(errors).length > 0}
                            className="btn btn-primary bold"
                            type="submit"
                        >
                            Signup
                        </button>

                        <div className="link-to">
                            Or{' '}
                            <Link className="link black" to="/login">
                                login
                            </Link>
                        </div>
                    </form>
                </Section>
            </Main>
        </>
    )
}
