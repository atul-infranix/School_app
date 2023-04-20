import React from 'react'
import FeeProfile from './feeProfile'
import FeeProfileTable from './feeProfileTable'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavHeading from 'utilities/NavHeading';
const Fee_Installments = () => {
    const matches = useMediaQuery('(max-width:1023px)');
    return (
        <div>
            <NavHeading heading="FEE INSTALLMENTS" />
            <div className='grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-2  ' >
                <div className='pl-1 lg:col-span-2 xl:col-span-2 col-span-2 lg:pr-5 ' style={!matches ? { borderRight: '1px dashed  #e5e7eb' } : {}} >
                    <FeeProfile />
                </div>
                <div className='pt-3 xl:col-span-3 lg:col-span-2 col-span-2 lg:pl-5 ' style={!matches ? { borderLeft: '1px dashed  #e5e7eb' } : {}}>
                    <div>
                        <FeeProfileTable />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fee_Installments

