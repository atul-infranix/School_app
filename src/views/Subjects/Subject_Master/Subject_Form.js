import { Button, FormContainer, FormItem, Input, Select } from 'components/ui'
import React from 'react'

const Subject_Form = (props) => {
    const { onDialogClose } = props;

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-2 mt-3 mb-2">
            <FormContainer >
                <FormItem
                    className="my-1 mb-0"
                    asterisk
                    label="Class"
                >
                    <Select placeholder="class.." size={"sm"} />
                </FormItem>
            </FormContainer >
            <FormContainer >
                <FormItem
                    className="my-1 mb-0"
                    asterisk
                    label="Subject"
                >
                    <Select placeholder="subject.." size={"sm"} />
                </FormItem>
            </FormContainer>
            <FormContainer >
                <FormItem
                    className="my-1"
                    asterisk
                    label="Chapter"
                >
                    <Input
                        type="text"
                        size={"sm"}
                        placeholder="Enter Section Name"
                    />
                </FormItem>
            </FormContainer>
        </div>
    )
}

export default Subject_Form