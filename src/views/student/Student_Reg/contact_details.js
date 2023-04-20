import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Field, Form, Formik } from 'formik'
import { formLabelStyle } from './style';
export default function Contact_details(props) {
    const { errors, touched, values } = props;
    const matches = useMediaQuery('(max-width:1023px)');
    return (
        <div className=''>

            <FormContainer className="grid grid-cols-2 lg:grid-cols-8 xl:grid-cols-8 gap-6  mb-0">

                <FormContainer className=" w-full box-border col-span-1 lg:col-span-4 xl:lg:col-span-4 xl:px-11 lg:px-5 px-0"  >


                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap "
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Local address"
                    >
                        <Input placeholder="Text area example" textArea />
                    </FormItem>
                    <FormContainer className="grid grid-cols-2 gap-0  mt-3">
                        <FormItem
                            className="mx-1"
                            asterisk
                            layout={matches ? "vertical" : "horizontal"}
                            label="State"
                            invalid={errors.reg_no && touched.reg_no}
                            errorMessage={errors.reg_no}
                            style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                            errorFontSize="13px"
                        >
                            <Field type="number" name="reg_no" placeholder="Registration No" component={Input} />
                        </FormItem>
                        <FormItem
                            layout={matches ? "vertical" : "horizontal"}
                            asterisk
                            label="City"
                            style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                            errorFontSize="13px"
                        >
                            <Field type="text" autoComplete="off" name="scholorNumber" placeholder="Scholor Number" component={Input} />
                        </FormItem>
                    </FormContainer>
                </FormContainer>
                <FormContainer className=" w-full box-border col-span-1 lg:col-span-4 xl:lg:col-span-4 xl:px-11 lg:px-5 px-0" >


                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Address"

                    >
                        <Input placeholder="Text area example" textArea />
                    </FormItem>

                    <FormItem
                        className="mx-1  m-0 mt-3 whitespace-nowrap"
                        layout={matches ? "vertical" : "horizontal"}
                        style={!matches ? { ...formLabelStyle,alignItems: 'normal' } : formLabelStyle}
                        errorFontSize="13px"
                        asterisk
                        label="Contact"

                    >
                        <Field type="text" autoComplete="off" name="scholorNumber" placeholder="Scholor Number" component={Input} />
                    </FormItem>


                </FormContainer>


            </FormContainer>

        </div>
    )
}
