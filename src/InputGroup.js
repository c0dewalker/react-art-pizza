import React from 'react'

export const InputGroup = ({ type, onChange, options, label }) => {
    return (
        <>
            {label && <label data-testid="inputGroupLabel">{label}</label>}
            <form onChange={onChange}>
                {Object.values(options).map(
                    ({ category, value, defaultChecked, label }) => {
                        const id = category + '-' + value
                        return (
                            <React.Fragment key={id}>
                                <input
                                    type={type}
                                    name={category}
                                    id={id}
                                    value={value}
                                    defaultChecked={defaultChecked}
                                />
                                <label htmlFor={id}>{label}</label>
                            </React.Fragment>
                        )
                    }
                )}
            </form>
        </>
    )
}
