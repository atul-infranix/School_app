import { Button } from 'components/ui'
import React from 'react'

const SaveBtn = () => {
    return (
        <div className="flex justify-end my-4">
            <Button variant="solid" size="sm">
            Save
            </Button>
            <Button className="ml-4" variant="solid" size="sm" color="red-500">
            Reset
            </Button>
        </div>
    )
}

export default SaveBtn