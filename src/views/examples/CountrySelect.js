import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

function MyComponent() {
    const [selected, setSelected] = useState('US')

    const onSelectFlag = (countryCode) => {
        setSelected(countryCode)
    }

    return (
        <div>
            <ReactFlagsSelect
                selected={selected}
                onSelect={onSelectFlag}
            />
            <p>Selected country code: {selected}</p>
        </div>
    )
}

export default MyComponent


