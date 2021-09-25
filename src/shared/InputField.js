import React from 'react'
import classNames from 'classnames'
import './InputField.css'

export const InputField = React.forwardRef((props, ref) => {
    const { type = 'text', label, className, invalid, ...restProps } = props
    const classes = classNames('input', { invalid }, className)
    return (
        <div className="input-wrapper">
            {label && <label className="text-sm">{label}</label>}
            <input ref={ref} className={classes} type={type} {...restProps} />
        </div>
    )
})
