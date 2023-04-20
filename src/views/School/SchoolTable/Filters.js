import { Button, FormContainer, FormItem, Input } from 'components/ui'
import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const Filters = () => {
    return (
        <div>
            <FormContainer className="grid grid-cols-2 gap-4">
                <FormItem
                    label="Reg No."
                    className="  m-0 whitespace-nowrap "
                    style={{ margin: '0px' }}
                >
                    <Input size="sm" />
                </FormItem>
                <FormItem
                    label="Scholar No."
                    className="  m-0 whitespace-nowrap "
                    style={{ margin: '0px' }}
                >
                    <Input size="sm" />
                </FormItem>
            </FormContainer>
            <FormContainer className="grid grid-cols-2 gap-4 mt-3">
                <FormItem
                    label="Class/Section"
                    className="  m-0 whitespace-nowrap "
                    style={{ margin: '0px' }}
                >
                    <Input size="sm" />
                </FormItem>
                <FormItem
                    label="Name"
                    className="  m-0 whitespace-nowrap "
                    style={{ margin: '0px' }}
                >
                    <Input size="sm" />
                </FormItem>
            </FormContainer>
            <FormContainer className="grid grid-cols-3 gap-4 mt-3">
                <FormItem
                    label="DOA"
                    className="  m-0 whitespace-nowrap col-span-2"
                    style={{ margin: '0px' }}
                >
                    <div className="flex justify-between items-center">
                        <Input type="date" size="sm" style={{ width: "45%" }} />
                        <span>To</span>
                        <Input type="date" size="sm" style={{ width: "45%" }} />
                    </div>
                </FormItem>
                <Button variant="solid" size="sm" type="button" className="mt-5 flex justify-center items-center"><HiOutlineSearch size={18} />&nbsp;<span>Filter</span></Button>
            </FormContainer>

        </div>
    )
}

export default Filters