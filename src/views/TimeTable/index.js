import React from 'react'
import Calender from './Components/Calender'
import Test_Calender from './Components/Test_Calender';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavHeading from 'utilities/NavHeading';

const TimeTable = () => {
  const matches = useMediaQuery('(min-width:1220px)');
  return (
    <>
        <NavHeading heading="TIME-TABLE"/>
      <Test_Calender />
    </>
  )
}

export default TimeTable