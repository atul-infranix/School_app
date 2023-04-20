import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchButton = (props) => {
    const {searchIcon} = props;
    return (
        <div className={"rounded-md cursor-pointer ml-4"+(searchIcon?"":" flex justify-center items-center bg-indigo-600 text-white")} style={{ padding: "5px", border: "1px solid #D1D5DB" }} >
        <HiOutlineSearch size={searchIcon?25:20} /> {searchIcon ? "": " Search"}
        </div>
    )
}

export default SearchButton