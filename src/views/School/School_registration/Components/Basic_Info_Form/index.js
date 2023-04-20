import React, { useRef, useState } from 'react'
import { AdaptableCard, RichTextEditor } from 'components/shared'
import { Input, FormItem, Upload, Avatar, Select, Steps } from 'components/ui'
import { Field } from 'formik'
import DateTimepicker from 'components/ui/DatePicker/DateTimepicker'
import { HiOutlinePlus } from 'react-icons/hi'

import { school_label, formfield } from './Formstyle'
import { Logo_cover } from './Logo_cover'
import { GrLocation, IconName } from "react-icons/gr";
import mapImg from '../../../assets/map.png'
import AvatarImage from './AvtarImage'
import { useMediaQuery } from '@mui/material';
import Map_Modal from '../Map_Modal'


export const categories = [
	{ label: 'Bags', value: 'bags' },
	{ label: 'Cloths', value: 'cloths' },
	{ label: 'Devices', value: 'devices' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Watches', value: 'watches' }
]

const Basic_Info_Form = props => {

	const { touched, errors, values } = props;
	const [stu_name, setstu_name] = useState("");
	const [stu_address, setstu_address] = useState("");
	const matches = useMediaQuery(`(min-width:1490px)`)

	const colourOptions = [
		{ value: 'ocean', label: 'Ocean', color: '#00B8D9' },
		{ value: 'blue', label: 'Blue', color: '#0052CC' },
		{ value: 'purple', label: 'Purple', color: '#5243AA' },
		{ value: 'red', label: 'Red', color: '#FF5630' },
		{ value: 'orange', label: 'Orange', color: '#FF8B00' },
		{ value: 'yellow', label: 'Yellow', color: '#FFC400' },
		{ value: 'green', label: 'Green', color: '#36B37E' },
		{ value: 'forest', label: 'Forest', color: '#00875A' },
		{ value: 'slate', label: 'Slate', color: '#253858' },
		{ value: 'silver', label: 'Silver', color: '#666666' },
	]

	return (

		<AdaptableCard className="mb-4" divider style={{ width: "100%" }}>

			<h5>ABOUT SCHOOL: </h5>
			<p className="mb-6">School Information</p>
			<div className={matches ? "grid grid-flow-row-dense grid-cols-3 gap-3" : "grid grid-flow-row-dense grid-cols-1"} >
				<div className="col-span-2">
					<div className="grid grid-cols-2 " style={{ height: "78px" }}>
						<div style={{ width: '98%' }}>

							<FormItem
								label="School Name"
								invalid={errors.name && touched.name}
								errorMessage={errors.name}
								style={school_label}
							>
								<Field
									type="text"
									autoComplete="off"
									name="name"
									placeholder="Enter School Name"
									component={Input}
								/>
							</FormItem>
						</div>
						<FormItem
							label="Website"

							style={school_label}

						>
							<Field
								type="text"
								autoComplete="off"
								name="name"
								placeholder="website"
								component={Input}
							/>
						</FormItem>
					</div>
					<div className="grid grid-cols-2 mt-4">
						<div style={{ width: '98%' }}>
							<FormItem
								label="Board"
								invalid={errors.name && touched.name}
								errorMessage={errors.name}
								style={school_label}

							>
								<Select className="mb-2" placeholder="Please Select Board" options={colourOptions}></Select>

							</FormItem>
						</div>
						<div style={{ width: '100%' }}>

							<FormItem
								label="Branch"
								invalid={errors.name && touched.name}
								errorMessage={errors.name}
								style={school_label}

							>
								<Field
									type="text"
									autoComplete="off"
									name="address"
									placeholder="Branch"
									component={Input}
								/>
							</FormItem>
						</div>
					</div>

				</div>
				<div className='grid grid-cols-3 gap-4' >

					<div className="grid col-span-1" >
						<FormItem
							label="School Logo"

							style={school_label}
							className='col-span-1'

						>
							<AvatarImage />
							{/* <Upload draggable style={{height:"120px",width:"95%"}}></Upload> */}
						</FormItem>
					</div>

					<div className="grid col-span-2">
						<FormItem
							label="School Cover"
							invalid={errors.name && touched.name}
							errorMessage={errors.name}
							style={{ ...school_label, marginLeft: "20px" }}
							className='col-span-2'
						>

							<Upload draggable style={{ height: "136px", marginLeft: "20px" }}>

							</Upload>
						</FormItem>
					</div>

				</div>
			</div>


			<FormItem
				label="School Description"
				labelClass="!justify-start"
				invalid={errors.description && touched.description}
				errorMessage={errors.description}
				style={school_label}

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

			<FormItem
				label="ADDRESS"
				invalid={errors.description && touched.description}
				errorMessage={errors.name}
				style={school_label}
			>


				<Input placeholder="Text area example" textArea />


			</FormItem>

			<div className="grid grid-cols-4 " >
				<div style={{ width: '97%' }}>


					<FormItem
						label="State"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
						style={school_label}
					>



						<Select className="mb-2" placeholder="Select" options={colourOptions}></Select>
					</FormItem>
				</div>
				<div style={{ width: '95%' }}>
					<FormItem
						label="City"
						invalid={errors.name && touched.name}
						errorMessage={errors.name}
						style={school_label}
					>


						<Select className="mb-2" placeholder="Select" options={colourOptions}></Select>


					</FormItem>
				</div>
			</div>






			<div className="flex items-start">
				<FormItem
					label="Locate On Google"

					style={{ ...school_label, fontSize: '18px' }}
				>

				</FormItem> &nbsp;&nbsp;&nbsp;
				<Map_Modal values={values} />
			</div>




		</AdaptableCard>
	)
}

export default Basic_Info_Form