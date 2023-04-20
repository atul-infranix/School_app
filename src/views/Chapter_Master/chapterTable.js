import React, { useEffect, useState, useRef } from 'react'
import { Table, Input } from 'components/ui'
import { HiOutlinePlusCircle, HiOutlineXCircle } from 'react-icons/hi'
import NewChapterPop from './newChapterPop'
const { Tr, Th, Td, THead, TBody } = Table
const ChapterTable = (props) => {
    // const [arrRow, setarrRow] = useState([1])
    const [rowdata, setRowData] = useState([])
    const [height, setHeight] = useState('auto');
    const [chapName, setChapName] = useState("A Letter to God Dust of Snow")
    const textareaRef = useRef(null);
    useEffect(() => {
        setRowData([props.rowData])
    }, [])
    const onChangeInput = (e, id) => {
        const { name, value } = e.target
        if (e.target.value == "") {
            setHeight(`auto`);
        }
        const editData = rowdata.map((item) =>
            item.id === id && name ? { ...item, [name]: value } : item
        )
        setRowData(editData)
    }
    const removeItem = (index) => {
    if (index>0) {
        const filteredItems = rowdata.filter((item, i) => {
            return i !== index;
        });
        setRowData(filteredItems);
    }
    }
    // this is for temprary testing
    const stateTemp = (chName) => {
        setChapName(chName)
    }
    useEffect(() => {
        if (textareaRef.current) {
            setHeight(`${textareaRef.current.scrollHeight}px`);
        }
    }, [rowdata]);
    return (
        <>
            <div className='pb-5'   >
                <div className='mb-1 mt-2 flex items-center'><span style={{ fontSize: "15px", fontWeight: 600 }}>Chapter :</span><span >{chapName}</span> <span><NewChapterPop chapName={chapName} stateTemp={stateTemp} /></span></div>
                <div className='border mx-3'>
                    <Table >
                        <THead style={{ background: '#f5f0ffd1' }}>
                            <Tr  >
                                <Th style={{ textAlign: 'center', fontWeight: 800, fontSize: '12px', }} >Topic</Th>
                                <Th style={{ textAlign: 'center', fontWeight: 800, fontSize: '12px', }} >Description</Th>
                                <Th style={{ textAlign: 'center', fontWeight: 800, fontSize: '12px', }} ></Th>
                            </Tr>
                        </THead>
                        <TBody style={{ backgroundColor: '#f5f0ff75' }}>
                            {
                                rowdata.map(({ topic, Description, id }, index) => {
                                    return <Tr key={id} style={{ fontSize: '13px' }}>
                                        <Td style={{ margin: 0, padding: "5px 10px", cursor: 'pointer', width: '20%' }} ><Input ref={textareaRef} className="overflow-hidden resize-none scrollbar-none border-transparent bg-transparent hover:border-gray-300 focus:bg-white " textArea style={{ minHeight: height, margin: '0px', padding: '0px 5px', }} size={"sm"} name="topic" value={topic} onChange={(e) => onChangeInput(e, id)} placeholder="Write Topic" />   </Td>
                                        <Td style={{ margin: 0, padding: "5px 10px", cursor: 'pointer' }} >{<Input ref={textareaRef} className="overflow-hidden resize-none scrollbar-none border-transparent bg-transparent hover:border-gray-300 focus:bg-white " textArea style={{ minHeight: height, margin: '0px', padding: '0px 5px' }} size={"sm"} name="Description" value={Description} onChange={(e) => onChangeInput(e, id)} placeholder="Write Description" />}</Td>
                                        <Td className="" style={{ margin: 0, padding: "5px 10px", textAlign: "center", width: '0%' }}>
                                            <div className='flex  items-center' >
                                                <HiOutlineXCircle className='mx-1' style={{ fontSize: '22px', cursor: 'pointer' }}
                                                    onClick={() => removeItem(index)} />
                                                {index == rowdata.indexOf(rowdata[rowdata.length - 1]) && < HiOutlinePlusCircle className='mx-1' style={{ fontSize: '22px', cursor: 'pointer' }} onClick={() => { setRowData([...rowdata, rowdata[rowdata.length - 1] + 1]) }} />}
                                            </div>
                                        </Td>
                                    </Tr>
                                })
                            }
                        </TBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
export default ChapterTable









