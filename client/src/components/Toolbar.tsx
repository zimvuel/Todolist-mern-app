import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineDarkMode, MdOutlineLightMode, MdOutlineSearch } from "react-icons/md";
import type { ToolbarProps } from "../types/CardTypes";

const Toolbar = ({
  search, setSearch, 
  filter, setFilter, 
  isDarkMode, setIsDarkMode
} : ToolbarProps) => {
    const [isDropdown, setIsDropdown] = useState(false);

    return (
    <div className="flex gap-4 w-full max-w-3xl items-center">
        <form 
          onSubmit={(e) => {
            e.preventDefault()
          }} 
          className="flex flex-1 items-center border-primary-purple/90 border-2 rounded-lg focus-within:outline-2 focus-within:outline-primary-purple/30"
        >
          <input 
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="flex-1 w-xl h-12 placeholder: pl-2 outline-none text-lg caret-primary-purple "
            placeholder="Search todo..."
          />
          <button type="submit">
            <MdOutlineSearch className="text-4xl text-primary-purple/90"/>
          </button>
        </form>
        <div className="flex flex-col relative">
            <button 
            className={`flex justify-between min-w-30 text-2xl items-center bg-primary-purple/90 rounded-lg text-white 
                        ${isDropdown 
                          ? "p-[6.5px] border-2 border-primary-purple rounded-lg" 
                          : "p-2"
                        }`
                      } 
            onClick={() => {
              setIsDropdown(!isDropdown)
            }}
            >
            {filter}
            {isDropdown 
              ? <MdOutlineArrowDropUp /> 
              : <MdOutlineArrowDropDown />
            }
          </button>
          {isDropdown && 
            <div className="absolute flex flex-col text-primary-purple border border-primary-purple rounded-lg bg-white z-3 mt-13 w-full">
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("ALL");
                  setIsDropdown(false);
                }}
              >
                All
              </button>
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("Complete");
                  setIsDropdown(false);
                }}
              >
                Complete
              </button>
              <button 
                className="hover:bg-gray-200 pl-2 text-left"
                onClick={() => {
                  setFilter("Incomplete");
                  setIsDropdown(false);
                }}
              >
                Incomplete
              </button>
            </div>
          } 
        </div>
        <button
            className="bg-primary-purple p-1.5 rounded-lg"
            onClick={() => {
              setIsDarkMode(!isDarkMode)
            }}
          >
            {isDarkMode 
              ? <MdOutlineLightMode className="text-4xl text-white"/> 
              : <MdOutlineDarkMode className="text-4xl text-white"/> 
            }
        </button>
    </div>
    )
}

export default Toolbar
