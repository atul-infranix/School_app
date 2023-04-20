// import { useMediaQuery } from '@mui/material';
import { AdaptableCard } from 'components/shared';
import { Avatar, Checkbox, FormItem, Input, Select, Upload } from 'components/ui';
import { Field } from 'formik';
import React, { useEffect, useState } from 'react'
import { contStyle } from './Contactstyle';
import { HiOutlinePlusCircle, HiOutlinePlus, HiOutlineUserCircle, HiOutlineXCircle } from 'react-icons/hi'
import useMediaQuery from '@mui/material/useMediaQuery';


export const categories = [
	{ label: 'Bags', value: 'bags' },
	{ label: 'Cloths', value: 'cloths' },
	{ label: 'Devices', value: 'devices' },
	{ label: 'Shoes', value: 'shoes' },
	{ label: 'Watches', value: 'watches' }
]

const Contact_Form = (props) => {

	const { touched, errors, values } = props;
	// const matches = useMediaQuery(`(min-width:1168px)`)
	const matches1 = useMediaQuery(`(min-width:840px)`)


	const colourOptions = [
		{ value: '0', label: 'Contact Type' },
		{ value: '1', label: 'Ocean' },
		{ value: '2', label: 'Blue' },
		{ value: '3', label: 'Purple' },
		{ value: '4', label: 'Red' },
		{ value: '5', label: 'Orange' },
	]




	const onCheck = (value, e) => {
		console.log(value, e)
	}


	// const [arr, setarr] = useState([1])
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
	let contact_object = { type: 0, name: "", email: "", phone: "", qualification: "", primary: false, profile: "" };
	const [contact_info, setcontact_info] = useState([contact_object])

	const updateContactList = () => {
		values.contact_info = contact_info;
		return;
	}

	const changeData = (key, data, data_item) => {
		// console.log(key + ',' + data + ',' + data_item);
		setcontact_info(contact_info.map((item, index) => {
			if (index == contact_info.indexOf(data_item)) {
				if (key == 'primary') {
					item.primary = data
				}
				if (key == 'type') {
					item.type = data
				}
				if (key == 'name') {
					item.name = data
				}
				if (key == 'email') {
					item.email = data
				}
				if (key == 'phone') {
					item.phone = data
				}
				if (key == 'qualification') {
					item.qualification = data
				}
				if (key == 'profile') {
					item.profile = data
				}
				return item;
			}
			else {
				return item;
			}
		}));
		updateContactList();
	}

	const deleteData = (data_item) => {
		setcontact_info(contact_info.filter((item, index) => {
			return index != contact_info.indexOf(data_item);
		}).map((item, index) => {
			return item;
		}));
		updateContactList();
	}

	const matches = useMediaQuery('(min-width:1220px)');
	useEffect(() => {
		setcontact_info(values.contact_info);
	}, []);

	return (
		<AdaptableCard className="mb-4" divider style={{ width: "100%" }} onBlur={() => {
			// console.log(contact_info);
			values.contact_info = contact_info
		}}>
			{contact_info.map((item, index) => {
				return (
					<div className='mb-5' style={{ height: '100%', }} key={index}>
						<div style={{ position: 'relative', top: 0, left: 0 }}>
							<fieldset style={{ border: "2px dashed #c9c9c9", padding: '20px 0px 0px 0px', borderRadius: "10px" }}>
								<legend style={{ display: "flex", justifyContent: 'center', alignItems: 'center', marginLeft: "10px" }}>
									<div><HiOutlineUserCircle size={43} /></div>
									<hr style={{ width: "20px", borderTop: "dotted 1px #c9c9c9" }} />
									<div style={{ width: "180px", borderRadius: '50px' }}>
										<Select size="sm" placeholder="Type" options={colourOptions} value={{ value: item.type, label: colourOptions.filter((colour_item) => { return item.type == colour_item.value })[0].label }} onChange={(e) => {
											changeData('type', e.value, item);
										}} ></Select>
									</div>
									<hr style={{ width: "20px", borderTop: "dotted 1px #c9c9c9" }} />
									<div style={{ display: 'flex', alignItems: 'center', fontSize: "15px", padding: "0px 5px" }}>
										<Checkbox onClick={() => {
											if (item.primary) {
												changeData('primary', false, item);
											}
											else {
												changeData('primary', true, item);
											}
										}} checked={item.primary} ><p>Set as primary contact</p></Checkbox>
									</div>
								</legend>
								<div className={"grid grid-flow-col gap-5 grid-cols-5"} style={{ padding: "0px" }}>
									<div className='col-span-2' >
										<div style={{ width: matches ? "90%" : "100%", paddingLeft: matches ? "73px" : "20px" }}>
											<FormItem
												label="Name:"
												layout="vertical"
												align-items='center'
												style={{ ...contStyle, height: "5px" }}
											>
												<Input type="text" value={item.name} onChange={(e) => {
													changeData('name', e.target.value, item)
												}} />
											</FormItem>
											<FormItem
												label="Email:"
												layout="vertical"
												style={{ ...contStyle, height: "5px", marginTop: "-12px" }}
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
										</div>
									</div>
									<div className='col-span-2'>
										<div style={{ width: matches ? "90%" : "95%", padding: matches ? "0px 36px" : "0px 0px 0px 0px" }}>
											<FormItem
												label="Phone:"
												layout="vertical"
												style={{ ...contStyle, height: "5px" }}
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
												label="Qualificaton:"
												layout="vertical"
												style={{ ...contStyle, height: "5px", marginTop: "-12px" }}
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
									</div>

									<div className={matches ? 'col-span-1' : 'col-span-1'}>
										<FormItem
											label="Photo"
											invalid={errors.name && touched.name}
											errorMessage={errors.name}
											style={{ ...contStyle, height: "15px", marginLeft: matches ? "" : "-10px" }}
										>
											<Upload
												className="cursor-pointer"
												onChange={onFileUpload}
												showList={false}
												uploadLimit={1}
												beforeUpload={beforeUpload}
												style={{ marginLeft: matches ? "" : "-10px" }}
											>
												<Avatar size={matches ? 106 : 70} src={avatarImg} icon={<HiOutlinePlus />} />
											</Upload>
										</FormItem>
									</div>

								</div>

							</fieldset>
							{
								contact_info.length != 1 &&
								<div style={{ position: 'absolute', zIndex: "1", top: 15, right: -10 }}>
									<HiOutlineXCircle style={{ width: '25px', height: "25px", cursor: 'pointer', backgroundColor: "#fff" }} onClick={() => {
										deleteData(item);
									}} />
								</div>
							}

						</div>
						{index == contact_info.indexOf(contact_info[contact_info.length - 1]) &&
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>

								<div className='hover:underline' style={{ display: 'flex', alignItems: 'center', paddingTop: "4px", fontSize: "14px", cursor: 'pointer' }} onClick={() => {
									setcontact_info([...contact_info, contact_object]);
									updateContactList();
									// values.contact_info = [...values.contact_info, contact_info];
								}}>
									<HiOutlinePlusCircle size={20} />&nbsp;Add More Contacts
								</div>
							</div>
						}
					</div>
				)
			})
			}


		</AdaptableCard>
	)
}

export default Contact_Form



