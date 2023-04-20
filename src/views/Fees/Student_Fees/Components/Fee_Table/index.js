import { Table } from 'components/ui';
import React from 'react'
import AddFinePopup from '../PopUps/addFinePopup';
import ExtraFee from '../PopUps/extraFeepopup';
import FeeExemptionPopup from '../PopUps/feeExemptionPopup';
import FeeStrcturePopup from '../PopUps/feesStructurePopup';
import Table_Component from './Table';
const { Tr, Th, Td, THead, TBody } = Table

const Fee_Table = (props) => {
    const { matches } = props;

    return (
        <div>
            {matches && <div className="absolute" style={{ height: "inherit", width: "1px", height: "315px", backgroundColor: "#c9c9c9", left: "-27px", top: "12px" }}></div>}
            <div className="flex items-center justify-end gap-0 mt-1 mb-2" >
                <ExtraFee widthPop={matches ? "130px" : ""} classPop={matches ? "mr-3" : "mr-2"} />
                <AddFinePopup widthPop={matches ? "130px" : ""} classPop={matches ? "mr-3" : "mr-2"} />
                <FeeStrcturePopup widthPop={matches ? "130px" : ""} classPop={matches ? "mr-3" : "mr-2"} />
                <FeeExemptionPopup widthPop={matches ? "130px" : ""} />
            </div>
            <div className='w-full   mt-4 border' style={{ height: '255px', overflowY: 'auto' }}>
                <Table_Component />
            </div>
        </div>
    )
}

export default Fee_Table