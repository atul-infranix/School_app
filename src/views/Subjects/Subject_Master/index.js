//NAFIS

import { useMediaQuery } from '@mui/material'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Button, FormContainer, FormItem, Input, Select, Upload } from 'components/ui'
import React from 'react'
import ClassTable from './ClassTable'
import NavHeading from 'utilities/NavHeading'
import Subject_Form from './Subject_Form'

const Subject_Master = () => {
    const matches1 = useMediaQuery(`(min-width:1200px)`);

    return (
        <>
            <NavHeading heading="SUBJECT MASTER" />
            <AdaptableCard style={{marginTop:"-10px"}} >
                <div className={matches1 ? 'grid grid-cols-10 gap-4' : "grid grid-rows-2 grid-flow-col gap-2"} >
                    {matches1 &&
                        <div className={matches1 ? ' col-span-4 pr-8' : ""}  >
                            <Subject_Form />
                            <FormContainer className='w-full flex justify-end  pr-1'>
                                <FormItem>
                                    <Button variant="solid" type="submit">
                                        Save
                                    </Button>
                                </FormItem>
                            </FormContainer>
                        </div>
                    }
                    <div className={matches1 ? ' col-span-6 pl-8 relative' : ""}  >

                    {matches1 &&
                        <div className='absolute' style={{ borderLeft: '2px dashed #e5e7eb',height:"300px",top:"20px",left:"-10px" }}>
                        </div>
                    }
                        <ClassTable />
                    </div>
                </div>
            </AdaptableCard>
        </>
    )
}

export default Subject_Master
