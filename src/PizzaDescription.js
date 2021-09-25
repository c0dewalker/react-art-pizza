export const PizzaDescription = ({ options, data }) => {
    const extraCategories = ['cheese', 'vegetables', 'meat']
    const extras = extraCategories.reduce((extras, category) => {
        options[category].forEach(ingredient => extras.push(data[category][ingredient].label))
        return extras
    }, [])

    return (
        <>
            <h2 className="h2 medium black">Your Pizza</h2>
            <div className="text-xs">
                {data.size[options.size].label} on {data.bread[options.bread].label} bread
            </div>
            <div className="text-xs">
                {data.sauce[options.sauce].label} sauce {extras.map(extra => ` * ${extra}`)}
            </div>
        </>
    )
}
