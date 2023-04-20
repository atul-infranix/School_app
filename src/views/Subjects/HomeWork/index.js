//NAFIS

import { useMediaQuery } from '@mui/material'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Button, FormContainer, FormItem, Input, Upload } from 'components/ui'
import React from 'react'
import HomeWorkTable from './HomeWorkTable'
import NavHeading from 'utilities/NavHeading'
import Home_Work_Form from './Home_Work_Form'

const HomeWork = () => {
    const matches1 = useMediaQuery(`(min-width:1200px)`);

    return (
        <>
            <NavHeading heading="HOMEWORK" />
            <AdaptableCard style={{marginTop:"-10px"}} >
                <div style={{ height: '100%' }}>
                    <div className='grid grid-cols-10 gap-4' >
                        {matches1 &&
                            <div className={matches1 ? ' col-span-4 pr-8 mt-5' : "col-span-10"}  >
                                <Home_Work_Form />
                                <FormContainer>
                                    <FormItem
                                        className="mt-2"
                                        asterisk
                                        label="Attachment"
                                    >
                                        <div className='relative' >
                                            <div>
                                                <Upload />
                                            </div>
                                            <Button variant="solid" type="submit" className="absolute" style={{ right: "0px",top:"0px" }}>
                                                Save
                                            </Button>
                                        </div>
                                    </FormItem>
                                </FormContainer>
                            </div>
                        }
                        {/* {matches1 && <div className='col-span-1 ' style={{ borderLeft: '2px dashed #e5e7eb', margin: '0px auto', marginBottom: '210px' }}>
                    </div>} */}
                        <div className={matches1 ? ' col-span-6 pl-8 relative' : "col-span-10"} >
                            {matches1 &&
                                <div className='absolute' style={{ borderLeft: '2px dashed #e5e7eb', height: "520px", top: "20px", left: "-10px" }}>
                                </div>
                            }
                            <HomeWorkTable />
                        </div>
                    </div>

                </div>
            </AdaptableCard>
        </>
    )
}

export default HomeWork
