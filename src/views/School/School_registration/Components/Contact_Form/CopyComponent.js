import { useMediaQuery } from '@mui/material';
import { AdaptableCard } from 'components/shared';
import { Avatar, Checkbox, FormItem, Input, Select, Upload } from 'components/ui';
import { Field } from 'formik';
import React, { useState } from 'react'

import { contStyle } from './Contactstyle';
import { HiOutlinePlusCircle, HiOutlinePlus } from 'react-icons/hi'

import { useEffect } from 'react';


export const categories = [
	{ label: 'Bags', value: 'bags' },
	{ label: 'Cloths', value: 'cloths' },
	{ label: 'Devices', value: 'devices' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Watches', value: 'watches' }
]

const ContactForm = (props) => {

	const { touched, errors, values } = props;
	const matches = useMediaQuery(`(min-width:1168px)`)
	const matches1 = useMediaQuery(`(min-width:840px)`)


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

	const onCheck = (value, e) => {
		console.log(value, e)
	}


	const [arr, setarr] = useState([1])
	const [bool, setbool] = useState(false)


	const [avatarImg, setAvatarImg] = useState(null)

	const onFileUpload = file => {
		setAvatarImg(URL.createObjectURL(file[0]))
	}

	const beforeUpload = (files) => {
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
		<AdaptableCard className="mb-4" divider style={{ width: "100%" }}>
			{/* <h5>CONTACT SCHOOL: </h5> */}

			<div className='grid grid-rows-2 grid-flow-col gap-2' >
				<div className={matches ? "grid grid-flow-row-dense grid-cols-4" : "grid grid-flow-row-dense grid-cols-1"} style={{}}>

					{arr.map((item, index) => {
						return (
							<div className="col-span-3" key={index} style={{ position: "relative", marginBottom: "5px" }} >
								<div className="grid grid-rows-2 grid-flow-col gap-2" style={{ border: "2px solid grey", padding: '20px 20px 5px 20px', borderRadius: "10px", position: "relative", left: 0 }}>
									<FormItem
										// layout={matches ? "horizontal" : "vertical"}
										label="Contact Type"
										invalid={errors.name && touched.name}
										errorMessage={errors.name}
										style={{ whiteSpace: 'nowrap', ...contStyle, height: "15px" }}
									>
										<Select className="" placeholder="Please Select" options={colourOptions}  ></Select>
									</FormItem>

									<FormItem
										label="Phone"
										style={{ ...contStyle, height: "15px" }}
										extra={<div style={{ paddingTop: "8px" }}><Checkbox onChange={onCheck} style={{ marginLeft: "10px" }} /></div>}
										invalid={errors.name && touched.name}
										errorMessage={errors.name}
									>
										<Field
											type="Number"
											autoComplete="off"
											name="address"
											placeholder="Phone Number"
											component={Input}
										/>
									</FormItem>

									<FormItem
										label="Name"
										invalid={errors.name && touched.name}
										errorMessage={errors.name}
										style={{ ...contStyle, height: "15px" }}
									>
										<Field
											type="text"
											autoComplete="off"
											name="name"
											placeholder="Enter Name"
											component={Input}

										/>
									</FormItem>

									<FormItem
										label="Email"
										extra={<div style={{ paddingTop: "8px" }}><Checkbox onChange={onCheck} style={{ marginLeft: "10px" }} /></div>}
										style={{ ...contStyle, height: "15px" }}
										invalid={errors.name && touched.name}
										errorMessage={errors.name}
									>
										<Field
											type="email"
											autoComplete="off"
											name="address"
											placeholder="Email"
											component={Input}
										/>
									</FormItem>


									<FormItem
										label="Profile Pic"
										invalid={errors.name && touched.name}
										errorMessage={errors.name}
										style={{ ...contStyle, height: "15px" }}


									>
										{/* <AvatarImage /> */}

										<Upload
											className="cursor-pointer"
											onChange={onFileUpload}
											showList={false}
											uploadLimit={1}
											beforeUpload={beforeUpload}
										>
											<Avatar size={43} src={avatarImg} icon={<HiOutlinePlus />} />
										</Upload>



									</FormItem>

									<FormItem
										label="Qualificaton"
										style={{ ...contStyle, height: "15px" }}
										invalid={errors.name && touched.name}
										errorMessage={errors.name}


									>
										<Field
											type="text"
											autoComplete="off"
											name="address"
											placeholder="Qualification"
											component={Input}
										/>
									</FormItem>



								</div>

								{index == arr.indexOf(arr[arr.length - 1]) && <div style={{ position: "absolute", right: matches ? -100 : 0, top: matches ? 70 : matches1 ? 227 : 235 }}>
									<HiOutlinePlusCircle style={{ ...contStyle, fontSize: matches ? "70px" : "35px", cursor: "pointer" }} onClick={() => {
										// arr.push(parseInt();
										// console.log(arr);
										// console.count(arr);
										setarr([...arr, (parseInt(arr[arr.length - 1]) + 1)])
									}} />

								</div>}

								{/* { index==arr.indexOf(arr[arr.length-1]) && <div style={{position:"absolute",right:0,top:matches1?227:236}}>
						<HiOutlinePlusCircle  style={{ ...contStyle, fontSize: "35px",cursor:"pointer" }} onClick={() => {
							// arr.push(parseInt();
							// console.log(arr);
							// console.count(arr);
							setarr([...arr,(parseInt(arr[arr.length-1])+1)])
						}} />

					</div>} */}
							</div>
						)
					})
					}

				</div>



			</div>

		</AdaptableCard>
	)
}

export default ContactForm



