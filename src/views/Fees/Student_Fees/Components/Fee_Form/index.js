import { FormContainer, FormItem, Input, Select } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import React from 'react'

const Fee_Form = () => {
    return (
        <div>

                <Formik >
                    <Form  >
                        <FormContainer >
                            <FormContainer className="col-span-5 lg:col-span-4 xl:col-span-4 " >
                                <FormContainer className="mb-2">
                                    <FormItem
                                        className="whitespace-nowrap m-0 p-0"
                                        layout="horizontal"
                                        label="Select Month"
                                        style={{ fontSize: "13px", justifyContent: "start" }}
                                    >
                                        <Select placeholder="Please Select" size="sm" ></Select>
                                    </FormItem>
                                    <div className='flex w-100% justify-end items-center mt-1'>
                                        <p className='mx-2' style={{ fontSize: '14px' }}>Jan</p>
                                        <p className='mx-2' style={{ fontSize: '14px' }}>Feb</p>
                                        <p className='mx-2' style={{ fontSize: '14px' }}>Mar</p>
                                    </div>
                                </FormContainer>
                                <hr style={{ height: "0px", border: "1px dashed grey" }} />
                                <FormContainer className="mb-3">
                                    <FormItem
                                        className="whitespace-nowrap m-0"
                                        layout="horizontal"

                                        label="Total Fee Due"
                                        style={{ fontSize: "13px", justifyContent: "start" }}

                                    >
                                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>₹ 1200</span>
                                        {/*<Field type="text" autoComplete="off" size="sm" name="registrationNo" placeholder="Registration No" component={Input} />*/}
                                    </FormItem>
                                    <FormItem
                                        className=" whitespace-nowrap m-0 mt-0"
                                        layout="horizontal"

                                        label="Rebate (if any)"
                                        style={{ fontSize: "13px", justifyContent: "start" }}

                                    >
                                        <Field type="text" autoComplete="off" size="sm" name="registrationNo" placeholder="Enter Rebate" component={Input} />
                                    </FormItem>
                                </FormContainer>
                                <hr style={{ height: "0px", border: "1px dashed grey" }} />
                                <FormContainer className="mb-3">
                                    <FormItem
                                        className=" whitespace-nowrap m-0"
                                        layout="horizontal"

                                        label="Net Fees"
                                        style={{ fontSize: "13px", justifyContent: "start" }}

                                    >
                                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>₹ 1200</span>
                                    </FormItem>
                                    <FormItem
                                        className=" whitespace-nowrap m-0 mt-1"
                                        layout="horizontal"

                                        label="Paid Amount"
                                        style={{ fontSize: "13px", justifyContent: "start" }}

                                    >
                                        <Field type="text" autoComplete="off" size="sm" name="registrationNo" placeholder="Enter Amount" component={Input} />
                                    </FormItem>
                                </FormContainer>
                                <hr style={{ height: "0px", border: "1px dashed grey" }} />
                                <FormContainer className="mb-3">
                                    <FormItem
                                        className=" whitespace-nowrap m-0"
                                        layout="horizontal"

                                        label="Balance Fee"
                                        style={{ fontSize: "13px", justifyContent: "start" }}

                                    >
                                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>₹ 1200</span>
                                    </FormItem>

                                </FormContainer>
                            </FormContainer>

                        </FormContainer>

                    </Form>
                </Formik>
            </div>

    )
}

export default Fee_Form