import React, { useState } from 'react'
import { FormItem, Input, Select, Button, Checkbox } from 'components/ui'
import useMediaQuery from '@mui/material/useMediaQuery';
import { HiOutlinePlus } from 'react-icons/hi';


const CreateExam = () => {
    const [checkboxList] = useState(['Selection A'])
    const matches = useMediaQuery('(max-width:1023px)');
    const matches3 = useMediaQuery('(max-width:560px)');
    return (
        <div >
            <div className='flex w-full' style={matches3 || matches ? { flexWrap: 'wrap' } : {}}>
                <div className=' w-full px-3' style={matches3 || matches ? {} : { borderRight: '0.1px solid #e5e7eb' }}>
                    <div className='flex'>
                        <div className='w-full'>
                            <FormItem
                                className="  m-0  whitespace-nowrap "
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Select exam"
                            >
                                <Select size={"sm"} />
                            </FormItem>
                            <FormItem
                                className="mt-3  m-0  whitespace-nowrap "
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Class"
                            >
                                <div className='flex  justify-between ' style={!matches ? { marginLeft: '46px', } : { marginLeft: '0px' }}>
                                    <div className='flex flex-col'>
                                        <Checkbox className="py-1" value="Selection A">Class I</Checkbox>
                                        <Checkbox className="py-1" value="Selection B">Class II </Checkbox>
                                        <Checkbox className="py-1" value="Selection C">Class III</Checkbox>
                                        <Checkbox className="py-1" value="Selection B">Class IV</Checkbox>
                                        <Checkbox className="py-1" value="Selection C">Class V</Checkbox>
                                    </div>
                                    <div className='flex flex-col'>
                                        <Checkbox className="py-1" value="Selection A">Class VI</Checkbox>
                                        <Checkbox className="py-1" value="Selection B">Class VII</Checkbox>
                                        <Checkbox className="py-1" value="Selection C">Class VIII</Checkbox>
                                        <Checkbox className="py-1" value="Selection B">Class IX</Checkbox>
                                        <Checkbox className="py-1" value="Selection C">Class X</Checkbox>
                                    </div>
                                </div>
                            </FormItem>
                        </div>
                        <div className=' ml-2 lg:mt-0 mt-5' style={{ display: "flex", height: 'fit-content' }}>
                            <Button
                                shape="circle"
                                size="sm"
                                icon={<HiOutlinePlus />}
                            />
                        </div>
                    </div>
                </div>
                <div className=' w-full px-3' style={matches3 || matches ? {} : { borderLeft: '0.1px solid #e5e7eb' }}>
                    <div>
                        <div className=" flex justify-between mb-0 lg:gap-5 gap-1">
                            <FormItem
                                className="mx-1 m-0 mt-3 whitespace-nowrap w-full"
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Min"
                            >
                                <div className="flex lg:justify-end">
                                    <Input size={"sm"} type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} className="lg:ml-14" />
                                </div>
                            </FormItem>

                            <FormItem
                                className="mx-1  m-0 mt-3 whitespace-nowrap w-full"
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Max"
                            >
                                <div className="flex lg:justify-end">
                                    <Input size={"sm"} type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} className="lg:ml-9" />
                                </div>
                            </FormItem>
                        </div>
                        <div className=" flex justify-between mb-0 lg:gap-5 gap-1">
                            <FormItem
                                className="mx-1 m-0 mt-3 whitespace-nowrap w-full "
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Theory"
                            >
                                <div className="flex lg:justify-end">
                                    <Input size={"sm"} type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} className="lg:ml-8" />
                                </div>
                            </FormItem>
                            <FormItem
                                className="mx-1  m-0 mt-3 whitespace-nowrap w-full  "
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Practical"
                            >
                                <div className="flex lg:justify-end">
                                    <Input size={"sm"} type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} className="lg:ml-2" />
                                </div>
                            </FormItem>
                        </div>
                        <div className=" grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-6  mb-0">
                            <FormItem
                                className="mx-1 m-0 mt-3 whitespace-nowrap col-span-4"
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Start Month"
                            >
                                <div className="flex lg:justify-end ">
                                    <Select size={"sm"} className="w-full" />
                                </div>
                            </FormItem>
                        </div>
                        <div className=" grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-6  mb-0">
                            <FormItem
                                className="mx-1 m-0 mt-3 whitespace-nowrap col-span-4"
                                layout={matches ? "vertical" : "horizontal"}
                                style={!matches ? { alignItems: 'normal', } : { margin: '0px' }}
                                size="sm"
                                labelWidth="sm"
                                label="Wetage"
                            >
                                <div className="flex lg:justify-end ">
                                    <Input size={"sm"} type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} className="lg:ml-7" />
                                </div>
                            </FormItem>
                        </div>
                    </div>
                </div >
            </div >
            <div className='flex justify-center mt-5'><Button  variant="solid" size="sm">Save</Button> </div>
        </div>
    )
}
export default CreateExam