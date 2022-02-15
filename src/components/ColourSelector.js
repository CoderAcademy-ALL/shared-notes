import React from 'react'

const ColourSelector = (props) => {

    const hex = props.hex
    function onInputChange(event) {
        const onColourSelectorChange = props.onColourSelectorChange
        onColourSelectorChange(event.target.value)
    }
    return (
        <input
            type="color"
            value={hex}
            onChange={onInputChange}
        />
    )

}

export default ColourSelector