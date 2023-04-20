import React from 'react';
import Add_Subjects_Form from './Components/Forms';
import NavHeading from 'utilities/NavHeading';

const Add_Subjects = () => {
  return (
    <div>
      <NavHeading heading="ADD SUBJECTS" />
      <Add_Subjects_Form />
    </div>
  )
}

export default Add_Subjects