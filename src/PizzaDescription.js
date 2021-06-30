export const PizzaDescription = ({ options, data }) => {
    const extraCategories = ['cheese', 'vegetables', 'meat']
    const extras = extraCategories.reduce((extras, category) => {
        options[category].forEach(ingridient =>
            extras.push(data[category][ingridient].label)
        )
        return extras
    }, [])

    return (
        <>
            <h2>Your Pizza</h2>
            <p>
                {data.size[options.size].label} on{' '}
                {data.bread[options.bread].label} bread
            </p>
            <p>
                {data.sauce[options.sauce].label} sauce{' '}
                {extras.map(extra => `* ${extra}`)}
            </p>
        </>
    )
}
