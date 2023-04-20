import React from 'react'
import { Input, Select, Radio, Button, Checkbox, FormItem, FormContainer } from 'components/ui'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
const validationSchema = Yup.object().shape({

    locationName: Yup.string().required(' Required'),
    distance: Yup.string().required(' Required'),
    transportCharge: Yup.string().required(' Required'),

})
const TransportProfileForm = () => {
    return (
        <div>
            <div>
                <Formik
                    initialValues={{ locationName: '', distance: '', transportCharge: '' }}
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
                            <FormContainer className='my-2'>
                                <FormItem
                                    className=" m-0 whitespace-nowrap"
                                    style={{ margin: '0px' }}
                                    asterisk
                                    label="Location Name"
                                    errorEnd={true}
                                    invalid={errors.locationName && touched.locationName}
                                    errorMessage={errors.locationName}
                                >
                                    <Field size="sm" type="text" autoComplete="off" name="locationName" placeholder="Enter Exemption" component={Input} />
                                </FormItem>
                            </FormContainer>
                            <FormContainer className='mt-3'>
                                <FormItem
                                    className=" m-0 whitespace-nowrap"
                                    style={{ margin: '0px' }}
                                    asterisk
                                    label="Distance"
                                    errorEnd={true}
                                    invalid={errors.distance && touched.distance}
                                    errorMessage={errors.distance}
                                >
                                    <Field size="sm" type="text" autoComplete="off" name="distance" placeholder="Enter Exemption" component={Input} />
                                </FormItem>
                            </FormContainer>
                            <FormContainer className='mt-3'>
                                <FormItem
                                    className=" m-0 whitespace-nowrap"
                                    style={{ margin: '0px' }}
                                    asterisk
                                    label="Transport Charge"
                                    errorEnd={true}
                                    invalid={errors.transportCharge && touched.transportCharge}
                                    errorMessage={errors.transportCharge}
                                >
                                    <Field size="sm" type="text" autoComplete="off" name="transportCharge" placeholder="Enter Exemption" component={Input} />
                                </FormItem>
                            </FormContainer>

                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    )
}
export default TransportProfileForm
