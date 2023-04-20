import React, { forwardRef, useState, useRef } from 'react'
import { FormContainer, Button, hooks, Steps } from 'components/ui'
import { StickyFooter, ConfirmDialog } from 'components/shared'
import { Form, Formik } from 'formik'
import Basic_Info_Form from './Components/Basic_Info_Form'

import cloneDeep from 'lodash/cloneDeep'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineSave } from 'react-icons/ai'
import * as Yup from 'yup'
import ContactForm from './Components/Contact_Form'
import { useNavigate } from 'react-router-dom'
import School_profile from './Components/School_profile'
import Settings from './Components/Settings'
import NavHeading from 'utilities/NavHeading'










const { useUniqueId } = hooks

const validationSchema = Yup.object().shape({
	name: Yup.string().required('School Name Required'),
	studentCode: Yup.number().required('Website is required')
})

const DeleteProductButton = ({ onDelete }) => {

	const [dialogOpen, setDialogOpen] = useState(false)

	const onConfirmDialogOpen = () => {
		setDialogOpen(true)
	}

	const onConfirmDialogClose = () => {
		setDialogOpen(false)
	}

	const handleConfirm = () => {
		onDelete?.(setDialogOpen)
	}


	return (
		<div>
			<Button
				className="text-red-600"
				variant="plain"
				size="sm"
				icon={<HiOutlineTrash />}
				type="button"
				style={{ display: 'none' }}
				onClick={onConfirmDialogOpen}
			>
				Delete
			</Button>
			<ConfirmDialog
				isOpen={dialogOpen}
				onClose={onConfirmDialogClose}
				onRequestClose={onConfirmDialogClose}
				type="danger"
				title="Delete product"
				onCancel={onConfirmDialogClose}
				onConfirm={handleConfirm}
				confirmButtonColor="red-600"
			>
				<p>
					Are you sure you want to delete this product?
					All record related to this product will be deleted as well.
					This action cannot be undone.
				</p>
			</ConfirmDialog>
		</div>
	)
}

const dummyForm = forwardRef((props, ref) => {

	const stepRef = useRef(0);
	const [step, setstep] = useState(0)
	const navigate = useNavigate();
	const handleNext = () => {
		stepRef.current = stepRef.current + 1;
		navigate('/ContactForm')

	};
	const handlePrev = () => {
		stepRef.current = stepRef.current - 1;
		navigate('/form')

	};


	const { type, initialData, onFormSubmit, onDiscard, onDelete } = props

	const newId = useUniqueId('product-')

	return (
		<div>
			<NavHeading heading="SCHOOL REGISTRATION" />
			<Steps current={step} >
				<Steps.Item title="Personel" />
				<Steps.Item title="Contact" />
				<Steps.Item title="Settings" />
				<Steps.Item title="Preview" />
			</Steps>
			<Formik
				innerRef={ref}
				initialValues={{
					...initialData,
					tags: initialData?.tags ? initialData.tags.map(value => ({ label: value, value })) : []
				}}
				// validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					console.log(values);
					if (step < 3) {
						setstep(step + 1);
					} else {
						setstep(0)
					}
					setSubmitting(false);
				}}
			>
				{({ values, touched, errors, isSubmitting }) => (

					<Form>
						<FormContainer>
							<div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
								{
									step == 0 &&
									<div className="lg:col-span-2">
										<Basic_Info_Form touched={touched} errors={errors} values={values} />
									</div>
								}
								{
									step == 1 &&
									<div className="lg:col-span-2">
										<ContactForm touched={touched} errors={errors} values={values} />
									</div>
								}

								{
									step == 2 &&
									<div className="lg:col-span-2">
										<Settings touched={touched} errors={errors} values={values} />
									</div>
								}
								{
									step == 3 &&
									<div className="lg:col-span-2">
										<School_profile touched={touched} errors={errors} values={values} />
									</div>
								}
							</div>
							<StickyFooter
								className="px-8 flex items-center justify-between py-5"
								stickyClass="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
								style={{ position: "fixed", bottom: "0px", right: "0px", zIndex: "1" }}
							>
								<div>
									{type === 'edit' && <DeleteProductButton onDelete={onDelete} />}
								</div>
								<div className="md:flex items-center">
									<Button
										size="sm"
										className="ltr:mr-3 rtl:ml-3"
										// onClick={() => onDiscard?.()}
										onClick={() => {
											if (step > 0) {
												setstep(step - 1)
											}

										}}
										type="button"
									>
										Previous
									</Button>
									<Button
										size="sm"
										variant="solid"
										loading={isSubmitting}
										icon={<AiOutlineSave />}
										// onClick={handleNext}
										// onClick={}
										type="submit"
									>
										Save
									</Button>
								</div>
							</StickyFooter>
						</FormContainer>

					</Form>
				)}
			</Formik>
		</div>
	)
})


dummyForm.defaultProps = {
	type: 'edit',
	initialData: {
		id: '',
		name: '',
		studentCode: '',
		dob: '',
		tob: '',
		address: '',
		productCode: '',
		img: '',
		imgList: [],
		category: '',
		price: 0,
		stock: 0,
		status: 0,
		costPerItem: 0,
		bulkDiscountPrice: 0,
		taxRate: 6,
		tags: [],
		brand: '',
		vendor: '',
		description: '',
		lat: '',
		lng: '',
		contact_info: [{ type: '0', name: "", email: "", phone: "", qualification: "", primary: false, profile: "" }],
		shift_settings: [{ from: '', to: "", period: "", interval: "", break_after: "" }]
	}
}

export default dummyForm