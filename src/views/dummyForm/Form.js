import React, { useState } from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem, DatePicker, TimeInput, Upload, Avatar } from 'components/ui'
import { Field } from 'formik'
import DateTimepicker from 'components/ui/DatePicker/DateTimepicker'
import { HiOutlinePhotograph, HiOutlinePlus } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';



export const categories = [
	{ label: 'Bags', value: 'bags' },
	{ label: 'Cloths', value: 'cloths' },
	{ label: 'Devices', value: 'devices' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Watches', value: 'watches' }
]

const FormBody = props => {

	const { touched, errors, values } = props;
	const [stu_name, setstu_name] = useState("");
	const [stu_address, setstu_address] = useState("");

	const [avatarImg, setAvatarImg] = useState(null)

	const onFileUpload = file => {
		setAvatarImg(URL.createObjectURL(file[0]))
	}

	const matches = useMediaQuery('(min-width:600px)');

	return (
		<AdaptableCard className="mb-4" divider>
			<h5>Basic Student Information - {values.name}</h5>
			<p className="mb-6">Section to config basic student information</p>
			<div className="grid grid-flow-row-dense grid-cols-3 gap-4">
				<div className="col-span-2">
					<FormItem
						label="Student Name"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
					>
						<Field
							type="text"
							autoComplete="off"
							name="name"
							placeholder="Name"
							component={Input}
						/>
					</FormItem>
					<FormItem
						label="Address"
					>
						<Field
							type="text"
							autoComplete="off"
							name="address"
							placeholder="Address"
							component={Input}
						/>
					</FormItem>
					<FormItem
						label="Student Roll Number"
						invalid={errors.studentCode && touched.studentCode}
						errorMessage={errors.studentCode}
					>
						<Field
							type="number"
							autoComplete="off"
							name="studentCode"
							placeholder="Code"
							component={Input}
						/>
					</FormItem>
				</div>
				<div>
					<FormItem
						label="Student Logo"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
					>
						<Upload
							className="cursor-pointer"
							onChange={onFileUpload}
							showList={false}
							uploadLimit={1}
						// beforeUpload={beforeUpload}
						>
							<Avatar size={80} src={avatarImg} icon={<HiOutlinePhotograph />} />
						</Upload>
					</FormItem>
					<FormItem
						label="Student Cover"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
					>
						<Upload draggable />
					</FormItem>
				</div>
			</div>
			<FormItem
				label="Date of birth"
			>
				<Field name="dob" >
					{({ field, form }) => (
						<DatePicker placeholder="enter date of birth" inputFormat="MMM, DD YYYY" value={field.value}
							onChange={val => {
								// console.log(val);
								form.setFieldValue(field.name, val)
							}} />
					)}
				</Field>
			</FormItem>
			<FormItem
				label="Time of birth"
			>
				<Field name="dob" >
					{({ field, form }) => (

						<TimeInput placeholder="enter time of birth" format="12" value={field.value}
							onChange={val => {
								// console.log(val);
								form.setFieldValue(field.name, val)
							}} />
					)}
				</Field>
			</FormItem>
			<FormItem
				label="Description"
				labelClass="!justify-start"
				invalid={errors.description && touched.description}
				errorMessage={errors.description}
			>
				<Field name="description" >
					{({ field, form }) => (
						<RichTextEditor
							value={field.value}
							onChange={val => {
								// console.log(val);
								form.setFieldValue(field.name, val)
							}}
						/>
					)}
				</Field>
			</FormItem>
		</AdaptableCard>
	)
}

export default FormBody