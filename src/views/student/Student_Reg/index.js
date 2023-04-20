import React, { forwardRef, useState } from 'react'
import { Steps, Button, } from 'components/ui'
import Personal_Information from './personal_Information'

// import personal_Information from '../../../src/./personal_Information'

import { Field, Form, Formik } from 'formik'
import Parents_Information from './parents_Information'
import Contact_details from './contact_details'
import Fees_details from './fees_details'
import cloneDeep from 'lodash/cloneDeep'
import { StickyFooter } from 'components/shared'
/** Example purpose only */
import * as Yup from 'yup'
import { AiOutlineSave } from 'react-icons/ai';
import useMediaQuery from '@mui/material/useMediaQuery';
import Preview from './Preview'
import Document_details from './Document_details'
import NavHeading from 'utilities/NavHeading'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Student Name Required'),
    // studentCode: Yup.number().required('Number is required'),
    reg_no: Yup.number().required("Reg Num is required")
})

const Student_Reg = forwardRef((props, ref) => {
    const [step, setStep] = useState(0)
    const { type, initialData, onFormSubmit, onDiscard, onDelete } = props
    const onChange = nextStep => {
        if (nextStep < 0) {
            setStep(0)
        } else if (nextStep > 4) {
            setStep(4)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => {
        alert("j");
        onChange(step + 1)
    }

    const onPrevious = () => onChange(step - 1)

    const Savenew = () => onChange(step - 4);

    const insertData = (data) => { }

    const updateData = (data) => { }

    const matches = useMediaQuery('(min-width:1023px)');

    return (
        <>
            <NavHeading heading="STUDENT REGISTRATION" />
            {
                matches ?
                    <Steps current={step}>
                        <Steps.Item title="Personal Details" />
                        <Steps.Item title="Parent's Details" />
                        <Steps.Item title="Contact Details" />
                        <Steps.Item title="Document" />
                        <Steps.Item title="Preview" />
                    </Steps>
                    :
                    <Steps current={step}>
                        <Steps.Item title={step == 0 ? "Personal Details" : ''} />
                        <Steps.Item title={step == 1 ? "Parent's Details" : ''} />
                        <Steps.Item title={step == 2 ? "Contact Details" : ''} />
                        <Steps.Item title={step == 3 ? "Document Details" : ''} />
                        <Steps.Item title={step == 4 ? "Preview" : ''} />
                    </Steps>
            }

            <div className="mt-6">
                <Formik
                    innerRef={ref}
                    initialValues={{
                        ...initialData,
                        tags: initialData?.tags ? initialData.tags.map(value => ({ label: value, value })) : []
                    }}

                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        if (step == 0) {
                            insertData(values)
                        }
                        else {
                            updateData(values)
                        }
                        if (step < 4) {
                            setStep(step + 1)
                        }
                        else {
                            setStep(0)
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ values, touched, errors, isSubmitting }) => (
                        <Form>
                            {
                                step == 0 && <Personal_Information touched={touched} errors={errors} values={values} />
                            }
                            {
                                step == 1 && <Parents_Information touched={touched} errors={errors} values={values} />
                            }
                            {
                                step == 2 && <Contact_details touched={touched} errors={errors} values={values} />
                            }
                            {
                                step == 3 && <Document_details touched={touched} errors={errors} values={values} />
                            }
                            {
                                step == 4 && <Preview touched={touched} errors={errors} values={values} setstep={setStep} />
                            }
                            <StickyFooter
                                className="px-8 flex items-center justify-end py-5"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                style={{ position: "fixed", bottom: "0px", right: "0px", zIndex: "1" }}
                            >
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        onClick={onPrevious}
                                        type="button"
                                        disabled={step === 0}
                                    >
                                        Previous
                                    </Button>
                                    {step <= 4 && <Button
                                        size="sm"
                                        className="mr-3"
                                        variant="solid"
                                        loading={isSubmitting}
                                        type="submit"
                                    >
                                        {step <= 3 ? "Next" : "Save & New"}
                                    </Button>
                                    }
                                    {
                                        step == 4 &&
                                        <Button
                                            size="sm"
                                            variant="solid"
                                            loading={isSubmitting}
                                            icon={<AiOutlineSave />}
                                            type="submit"
                                        >
                                            {"Save & Close"}
                                        </Button>
                                    }
                                </div>
                            </StickyFooter>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
})

Student_Reg.defaultProps = {
    type: 'edit',
    initialData: {
        // id: '',
        reg_no: '',
        name: '',
        // studentCode: '',
        // dob: '',
        // tob: '',
        // address: '',
        // productCode: '',
        // img: '',
        // imgList: [],
        // category: '',
        // price: 0,
        // stock: 0,
        // status: 0,
        // costPerItem: 0,
        // bulkDiscountPrice: 0,
        // taxRate: 6,
        // tags: [],
        // brand: '',
        // vendor: '',
        // description: '',
    }
}

export default Student_Reg


