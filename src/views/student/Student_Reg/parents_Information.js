
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Field, Form, Formik } from 'formik'
import { formLabelStyle } from './style';
const Parents_Information = () => {

    const matches = useMediaQuery('(max-width:1023px)');
    return (
        <div className=''>

            <FormContainer className="grid grid-cols-2 lg:grid-cols-8 xl:grid-cols-8 gap-6  mb-0">

                <FormContainer className=" w-full box-border col-span-1 lg:col-span-4 xl:lg:col-span-4 xl:px-11 lg:px-5 px-0"  >

                    <Checkbox onChange={()=>{

                    }}>Set as primary contact</Checkbox>
                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap "
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Father Name"

                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Name" component={Input} />
                    </FormItem>



                    <FormItem
                        className="mx-1  m-0  mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Proff./Qual."

                    >
                        <div style={{ display: "flex" }}>
                            <Field type="text" autoComplete="off" name="scholorNumber" className="mr-1" placeholder="Profession" component={Input} />
                            <Field type="text" autoComplete="off" name="scholorNumber" className="ml-1" placeholder="Qualification" component={Input} />
                        </div>
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Email/Phone"
                    >
                        <div style={{ display: "flex" }}>
                            <Field type="text" autoComplete="off" name="scholorNumber" className="mr-1" placeholder="Email" component={Input} />
                            <Field type="text" autoComplete="off" name="scholorNumber" className="ml-1" placeholder="Phone" component={Input} />
                        </div>
                    </FormItem>

                </FormContainer>
                <FormContainer className=" w-full box-border col-span-1 lg:col-span-4 xl:lg:col-span-4 xl:px-11 lg:px-5 px-0" >
                    <Checkbox onChange={()=>{

                    }}>Set as primary contact</Checkbox>
                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Mother Name"

                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Name" component={Input} />
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0  mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Proff./Qual."

                    >
                        <div style={{ display: "flex" }}>
                            <Field type="text" autoComplete="off" name="scholorNumber" className="mr-1" placeholder="Profession" component={Input} />
                            <Field type="text" autoComplete="off" name="scholorNumber" className="ml-1" placeholder="Qualification" component={Input} />
                        </div>
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Email/Phone"
                    >
                        <div style={{ display: "flex" }}>
                            <Field type="text" autoComplete="off" name="scholorNumber" className="mr-1" placeholder="Email" component={Input} />
                            <Field type="text" autoComplete="off" name="scholorNumber" className="ml-1" placeholder="Phone" component={Input} />
                        </div>
                    </FormItem>

                </FormContainer>


            </FormContainer>

            <FormContainer className="grid grid-cols-2 lg:grid-cols-8 xl:grid-cols-8 gap-10  mb-0 mt-11">

                <FormContainer className=" w-full box-border col-span-1 lg:col-span-4 xl:lg:col-span-4 xl:px-11 lg:px-5 px-0"  >
                    <Checkbox onChange={()=>{

                    }}>Set as primary contact</Checkbox>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap "
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Guardian"

                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Name" component={Input} />
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Email/Phone"
                    >
                        <div style={{ display: "flex" }}>
                            <Field type="text" autoComplete="off" name="scholorNumber" className="mr-1" placeholder="Email" component={Input} />
                            <Field type="text" autoComplete="off" name="scholorNumber" className="ml-1" placeholder="Phone" component={Input} />
                        </div>
                    </FormItem>
                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap "
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Relation"

                    >
                        <Field type="text" autoComplete="off" name="relation" placeholder="Relation with student" component={Input} />
                    </FormItem>
                </FormContainer>



            </FormContainer>




        </div>
    )
}
export default Parents_Information;