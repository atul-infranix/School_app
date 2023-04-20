import React from 'react'
import { Input, Select, Radio, Button, Checkbox, FormItem, FormContainer } from 'components/ui'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'

const validationSchema = Yup.object().shape({

    transportType: Yup.string().required(' Required'),
    location_Area: Yup.string().required(' Required'),
    vehicleRegistrationNo: Yup.string().min(3, 'Too Short!').required(' Required'),
    driver: Yup.string().required(' Required'),
    conductor: Yup.string().required(' Required'),
    gpsId: Yup.string().required('Required')
})

const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
]
const TransportRegistrationForm = () => {
    return (
        <div>
            <Formik
                initialValues={{ transportType: '', location_Area: '', vehicleRegistrationNo: '', driver: '', conductor: '', gpsId: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                        resetForm()
                    }, 400)
                }}
            >
                {({ touched, errors, resetForm }) => (
                    <Form>
                        <div className='grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 xl:gap-0 lg:gap-0 gap-5'>
                            <div className='col-span-1 '>
                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="Transport Type"
                                        errorEnd={true}
                                        invalid={errors.transportType && touched.transportType}
                                        errorMessage={errors.transportType}

                                    >
                                        {/* <Field size="sm" autoComplete="off" name="transportType" component={Select} /> */}

                                        <Field size={"sm"} name="transportType">
                                            {({ field, form }) => (
                                                <Select
                                                    size={"sm"}
                                                    field={field}
                                                    form={form}
                                                    options={options}
                                                // value={options.filter(option => option.value === values.select)}
                                                // onChange={option => form.setFieldValue(field.name, option.value)}
                                                />
                                            )}
                                        </Field>

                                    </FormItem>
                                </FormContainer>
                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="Vehicle No."
                                        errorEnd={true}
                                        invalid={errors.vehicleRegistrationNo && touched.vehicleRegistrationNo}
                                        errorMessage={errors.vehicleRegistrationNo}

                                    >
                                        <Field size="sm" type="text" autoComplete="off" name="vehicleRegistrationNo" placeholder="Enter Exemption" component={Input} />

                                    </FormItem>
                                </FormContainer>


                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="Location/Area"
                                        errorEnd={true}
                                        invalid={errors.location_Area && touched.location_Area}
                                        errorMessage={errors.location_Area}

                                    >
                                        {/* <Select size="sm" name="location_Area" /> */}
                                        <Field size={"sm"} name="location_Area">
                                            {({ field, form }) => (
                                                <Select
                                                    size={"sm"}
                                                    field={field}
                                                    form={form}
                                                    options={options}
                                                // value={options.filter(option => option.value === values.select)}
                                                // onChange={option => form.setFieldValue(field.name, option.value)}
                                                />
                                            )}
                                        </Field>

                                    </FormItem>
                                </FormContainer>
                            </div>
                            <div className='col-span-1'>
                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="Driver"
                                        errorEnd={true}
                                        invalid={errors.driver && touched.driver}
                                        errorMessage={errors.driver}

                                    >
                                        {/* <Select size="sm" name="driver" /> */}

                                        <Field size={"sm"} name="driver">
                                            {({ field, form }) => (
                                                <Select
                                                    size={"sm"}
                                                    field={field}
                                                    form={form}
                                                    options={options}
                                                // value={options.filter(option => option.value === values.select)}
                                                // onChange={option => form.setFieldValue(field.name, option.value)}
                                                />
                                            )}
                                        </Field>

                                    </FormItem>
                                </FormContainer>
                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="Conductor"
                                        errorEnd={true}

                                        invalid={errors.conductor && touched.conductor}
                                        errorMessage={errors.conductor}
                                    >
                                        {/* <Select size="sm" name="conductor" /> */}

                                        <Field size={"sm"} name="conductor">
                                            {({ field, form }) => (
                                                <Select
                                                    size={"sm"}
                                                    field={field}
                                                    form={form}
                                                    options={options}
                                                // value={options.filter(option => option.value === values.select)}
                                                // onChange={option => form.setFieldValue(field.name, option.value)}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                </FormContainer>
                                <FormContainer className='mt-5'>
                                    <FormItem
                                        className=" m-0 whitespace-nowrap"
                                        style={{ margin: '0px' }}
                                        asterisk
                                        label="GPS Id "
                                        invalid={errors.gpsId && touched.gpsId}
                                        errorMessage={errors.gpsId}
                                        errorEnd={true}


                                    >
                                        <Field size="sm" type="text" autoComplete="off" name="gpsId" placeholder="Enter GPS" component={Input} />

                                    </FormItem>
                                </FormContainer>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default TransportRegistrationForm