import { RichTextEditor } from 'components/shared'
import { Button, FormContainer, FormItem, Input, Upload } from 'components/ui'
import React from 'react';
import { useMediaQuery } from '@mui/material'

const Home_Work_Form = (props) => {
    const { onDialogClose } = props;
    const matches1 = useMediaQuery(`(min-width:1200px)`);
    return (
        <div style={{ marginTop: matches1 ? "6px" : "" }}>
            <FormContainer className="grid grid-rows-1 grid-flow-col gap-2" >
                <FormItem

                    className="mt-0 mb-2 "
                    asterisk
                    label="Class"
                    style={{ height: '12px' }}

                >
                    <Input
                        type="text"
                        size={"sm"}
                        placeholder="Enter Class Name"



                    />

                </FormItem>


                <FormItem
                    className="mt-0 mb-2"
                    asterisk
                    label="Section"
                    style={{ height: '12px' }}
                >

                    <Input
                        type="text"
                        size={"sm"}
                        placeholder="Enter Section Name"



                    />
                </FormItem>
            </FormContainer>

            {!matches1 && <FormContainer className="grid grid-rows-1 grid-flow-col gap-2">

                <FormItem
                    className=""

                    asterisk
                    label="Subject"
                >


                    <Input
                        type="text"
                        size={"sm"}
                        placeholder="Subject Name"
                    />

                </FormItem>

                <FormItem
                    className="my-0"

                    asterisk
                    label="Title"
                >
                    <Input
                        type="text"
                        size={"sm"}
                        placeholder="Title Name"

                    />

                </FormItem>
            </FormContainer>}


            <FormContainer className={matches1 ? "grid grid-rows-2 grid-flow-col gap-2 " : "grid grid-rows-1 grid-flow-col gap-2 "} style={{ backgroundColor: 'red', height: '100px' }}>

                {matches1 && <div>
                    <FormItem

                        className="my-0"
                        asterisk
                        label="Subject"
                    >
                        <Input
                            type="text"
                            size={"sm"}
                            placeholder="Subject Name"
                        />

                    </FormItem>

                    <FormItem
                        className="my-2"
                        asterisk
                        label="Title"
                    >
                        <Input
                            type="text"
                            size={"sm"}
                            placeholder="Title Name"
                        />

                    </FormItem>
                </div>
                }
                <FormItem
                    className="my-0"
                    asterisk
                    style={{ marginTop: '-20px' }}
                    label="Description"
                >
                    <RichTextEditor />
                </FormItem>
            </FormContainer>
        </div>
    )
}

export default Home_Work_Form