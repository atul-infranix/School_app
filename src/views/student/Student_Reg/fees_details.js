import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Field, Form, Formik } from 'formik'

const { Tr, Th, Td, THead, TBody } = Table
const Fees_details = () => {
    const matches = useMediaQuery('(max-width:1023px)');
    return (
        <div className=''>

            <div>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Fees Exemption Setting</p>

                <FormContainer className=" grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-10  mb-0">

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Fee's type"

                    >
                        <Select placeholder="Choose fee type" ></Select>
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Exemption"


                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Enter Exemption" component={Input} />
                    </FormItem>

                    <div className='h-full  flex flex-col-reverse col-span-1'>
                        <Button
                            className="mb-1 bg-green-300"
                            shape="circle"
                            size="sm"
                            icon={<HiOutlinePlus />}

                        />

                    </div>





                </FormContainer>

                <div className='mt-8 mb-8 border'>
                    <Table>
                        <THead >
                            <Tr >
                                <Th style={{ textAlign: "center" }}>#</Th>
                                <Th style={{ textAlign: "center" }} > Fee's Details</Th>
                                <Th style={{ textAlign: "center" }}> Exemption %</Th>
                                <Th style={{ textAlign: "center" }} > Action</Th>
                            </Tr>
                        </THead>
                        <TBody >
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>

                        </TBody>
                    </Table>
                </div>
            </div>
            <div>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Transport Setting</p>
                <FormContainer className=" grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10  mb-0 mt-0">

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Transports Type"

                    >
                        <Radio.Group className=" md:py-0 flex-wrap  " style={{ height: '100%', width: '100%', }}>

                            <Radio value={'Bus'}>Bus</Radio>
                            <Radio value={'Rickshaw'}>Rickshaw</Radio>
                            <Radio value={'None'}>None</Radio>

                        </Radio.Group>
                    </FormItem>
                </FormContainer>


                <FormContainer className=" grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-10  mb-0 mt-0">

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Destination"

                    >
                        <Select placeholder="Choose Destination" ></Select>
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2  pb-2 "
                        // layout={matches ? "vertical" : "horizontal"}

                        style={{ flexDirection: 'column-reverse', display: 'flex', height: '100%' }}



                    >
                        <Radio.Group className=" md:py-0 " style={{ height: '100%', width: '100%', }}>

                            <Radio value={'oneWay'}>OneWay</Radio>
                            <Radio value={'twoWay'}>TwoWay</Radio>


                        </Radio.Group>
                    </FormItem>







                </FormContainer>

            </div>
            <div className='mt-6'>
                <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Subject Setting</p>
                <FormContainer className=" grid grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-10  mb-0 ">

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Subject"

                    >
                        <Select placeholder="Choose Subject" ></Select>
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap col-span-2"
                        // layout={matches ? "vertical" : "horizontal"}
                        // style={!matches ? { alignItems: 'normal' } : {}}
                        asterisk
                        label="Fees"


                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Fees" component={Input} />
                    </FormItem>

                    <div className='h-full  flex flex-col-reverse col-span-1'>
                        <Button
                            className="mb-1 bg-green-300"
                            shape="circle"
                            size="sm"
                            icon={<HiOutlinePlus />}

                        />

                    </div>





                </FormContainer>


                <div className='mt-8 mb-8 border'>
                    <Table>
                        <THead >
                            <Tr >
                                <Th style={{ textAlign: "center" }}>#</Th>
                                <Th style={{ textAlign: "center" }} > Subject's</Th>
                                <Th style={{ textAlign: "center" }}> Fees</Th>
                                <Th style={{ textAlign: "center" }} > Action</Th>
                            </Tr>
                        </THead>
                        <TBody >
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>
                            <Tr>
                                <Td style={{ margin: '0px', padding: '10px 0px', textAlign: "center" }}>1</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>Exam fee</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}>50%</Td>
                                <Td style={{ margin: '0px', padding: '0px', textAlign: "center" }}><Button
                                    className="mb-1 bg-red-300"
                                    style={{ width: '25px', height: '25px' }}
                                    shape="circle"
                                    // size="sm"
                                    icon={<HiMinus />}

                                /></Td>
                            </Tr>

                        </TBody>
                    </Table>
                </div>
            </div>




        </div >
    )
}
export default Fees_details