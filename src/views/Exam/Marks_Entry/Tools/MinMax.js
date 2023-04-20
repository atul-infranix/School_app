import { Input, Select } from 'components/ui'
import React from 'react'

const MinMaxFilter = (props) => {
    return (
        <div className={'flex' + (props.marginLeft ? " ml-4" : "")}>
            <Input type="number" size="sm" placeholder="Min" style={{ maxWidth: "100px" }} />
            <Input type="number" className="ml-1" size="sm" placeholder="Max" style={{ maxWidth: "100px" }} />
        </div>
    )
}

export default MinMaxFilter