import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, Select, Avatar, Upload, Radio, Table } from 'components/ui'
import { HiOutlinePlus, HiMinus } from 'react-icons/hi'
import { Field, Form, Formik } from 'formik'
import { formLabelStyle } from './style'

const Personal_Information = (props) => {
    const { touched, errors, values } = props;
    // console.log(touched);
    const [avatarImg, setAvatarImg] = useState(null)
    const onFileUpload = file => {
        setAvatarImg(URL.createObjectURL(file[0]))
    }

    const beforeUpload = files => {
        let valid = true

        const allowedFileType = ['image/jpeg', 'image/png']

        for (let file of files) {
            if (!allowedFileType.includes(file.type)) {
                valid = 'Please upload a .jpeg or .png file!'
            }
        }

        return valid
    }
    return (



        <FormContainer className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-10 lg:gap-3 mb-0 ">

            <FormContainer >
                <FormContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0  mb-0">
                    <FormItem
                        className="mx-1"
                        asterisk
                        label="Registration Number"
                        invalid={errors.reg_no && touched.reg_no}
                        errorMessage={errors.reg_no}
                        style={formLabelStyle}
                        errorFontSize="13px"
                    >
                        <Field type="number" name="reg_no" placeholder="Registration No" component={Input} />
                    </FormItem>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Scholor No"
                        style={formLabelStyle}
                        errorFontSize="13px"

                    >
                        <Field type="text" autoComplete="off" name="scholorNumber" placeholder="Scholor Number" component={Input} />
                    </FormItem>
                </FormContainer>
                <FormContainer>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Name"
                        invalid={errors.name && touched.name}
                        errorMessage={errors.name}
                        style={formLabelStyle}
                        errorFontSize="13px"
                    >
                        <Field type="text" autoComplete="off" name="name" placeholder="Name" component={Input} />
                    </FormItem>
                </FormContainer>

                <FormContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 mb-0">
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Class"
                        style={formLabelStyle}
                        errorFontSize="13px"

                    >
                        <Field type="text" autoComplete="off" name="class" placeholder="Class" component={Input} />
                    </FormItem>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Section"
                        style={formLabelStyle}
                        errorFontSize="13px"

                    >
                        <Field type="text" autoComplete="off" name="section" placeholder="Section" component={Input} />
                    </FormItem>
                </FormContainer>
                <FormContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 mb-0">
                    <FormItem
                        className="mx-1"
                        asterisk
                        label="Nationality"
                        style={formLabelStyle}

                    >
                        <Field type="text" autoComplete="off" name="nationality" placeholder="nationality" component={Input} />
                    </FormItem>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Religion"
                        style={formLabelStyle}

                    >
                        <Field type="text" autoComplete="off" name="religion" placeholder="religion" component={Input} />
                    </FormItem>
                </FormContainer>
                <FormContainer>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Adhaar"
                        style={formLabelStyle}

                    >
                        <Field type="text" autoComplete="off" name="adhaar" placeholder="Adhaar No." component={Input} />
                    </FormItem>
                </FormContainer>
            </FormContainer>
            <FormContainer>
                <FormItem
                    className="mx-1"

                    asterisk
                    label="Date Of Admission"
                    style={formLabelStyle}

                >
                    <Field type="date" autoComplete="off" name="schoolName" placeholder="Date Of Admission" component={Input} />
                </FormItem>

                <FormItem
                    className="mx-1 "

                    asterisk
                    label="Gender"
                    style={{...formLabelStyle, display: 'flex', height: '100%' }}

                >

                    <Radio.Group style={{ flexDirection: 'colomn-reverse', height: '43px', width: '100%' }}>

                        <Radio value={'male'}>Male</Radio>
                        <Radio value={'female'}>Female</Radio>
                        <Radio value={'other'}>Other</Radio>

                    </Radio.Group>

                </FormItem>
                <FormContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 mb-0">
                    <FormItem
                        className="mx-1"
                        asterisk
                        label="Date of Birth"
                        style={formLabelStyle}

                    >
                        <Field type="date" autoComplete="off" name="dateOfBirth" placeholder="Date of Birth" component={Input} />
                    </FormItem>
                    <FormItem
                        className="mx-1"

                        asterisk
                        label="Blood Group"
                        style={formLabelStyle}

                    >
                        <Field type="text" autoComplete="off" name="bloodGroup" placeholder="Blood Groop" component={Input} />
                    </FormItem>
                </FormContainer>
                {/*<FormItem
                    className="mx-1 "

                    asterisk
                    label="Sponsored"

                >

                    <Radio.Group style={{ flexDirection: 'colomn-reverse', height: '43px', width: '100%', }}>

                        <Radio value={'yes'}>Yes</Radio>
                        <Radio value={'no'}>No</Radio>

                    </Radio.Group>

                </FormItem>*/}
                {/* <FormItem
										className="mx-1"

										asterisk
										label="Sponsored"
										invalid={errors.Sponsore && touched.Sponsore}
										errorMessage={errors.Sponsore}
									>
										<Radio.Group className="lg:py-4 md:py-4 sm:py-3" style={{ height: '100%', width: '100%', }} >
											<Radio value={'yes'}>Yes</Radio>
											<Radio value={'no'}>No</Radio>

										</Radio.Group>
									</FormItem> */}

                <FormItem
                    className="mx-1"

                    asterisk
                    label="Category"
                    style={formLabelStyle}

                >
                    <Select placeholder="Please Select" ></Select>
                </FormItem>



                <FormContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-0 mb-0">
                <FormItem
                className="mx-1"

                asterisk
                label="Previous School (if any)"
                style={formLabelStyle}

            >
                <Field type="text" autoComplete="off" name="scholorNumber" placeholder="Scholor Number" component={Input} />
            </FormItem>
                <FormItem
                    className="mx-1"

                    asterisk
                    label="Previous Class"
                    style={formLabelStyle}

                >
                    <Select placeholder="Please Select" ></Select>
                </FormItem>

            </FormContainer>
            </FormContainer>

            <FormContainer  >
                <FormItem
                    className="mx-1"

                    asterisk
                    label="Uplode Image"
                    style={formLabelStyle}

                >
                    <Upload
                        className="cursor-pointer"
                        onChange={onFileUpload}
                        showList={false}
                        uploadLimit={1}
                        beforeUpload={beforeUpload}
                    >
                        <Avatar size={150} src={avatarImg} icon={<HiOutlinePlus />} />
                    </Upload>
                </FormItem>

            </FormContainer>
        </FormContainer>



    )
}

export default Personal_Information;