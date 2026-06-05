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
    <div className="grid w-full max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:gap-4">
        <form 
          onSubmit={(e) => {
            e.preventDefault()
          }} 
          className="col-span-2 flex min-w-0 items-center border-primary-purple/90 focus-within:outline-primary-purple/30 border-2 rounded-lg focus-within:outline-2 sm:flex-1
                      dark:border-white/90 dark:focus-within:outline-white/30 dark:bg-black-mode"
        >
          <input 
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="min-w-0 flex-1 h-11 px-3 outline-none text-base text-primary-purple caret-primary-purple sm:h-12 sm:text-lg
                        dark:text-white dark:caret-white"
            placeholder="Search todo..."
          />
          <button 
            type="submit"
            className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-12 sm:w-12"
            aria-label="Search todos"
          >
            <MdOutlineSearch className="text-3xl text-primary-purple/90 dark:text-white sm:text-4xl"/>
          </button>
        </form>
        <div className="relative flex min-w-0 flex-col">
            <button 
            type="button"
            className={`flex h-11 min-w-0 items-center justify-between rounded-lg border-2 bg-primary-purple/90 px-3 text-base text-white sm:h-12 sm:min-w-30 sm:text-2xl 
                        ${isDropdown 
                          ? "border-primary-purple" 
                          : "border-transparent"
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
            <div className="absolute top-full z-3 mt-2 flex w-full min-w-36 flex-col overflow-hidden rounded-lg border border-primary-purple bg-white text-primary-purple shadow-sm dark:bg-black-mode dark:text-white">
              <button 
                type="button"
                className="px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-white/10"
                onClick={() => {
                  setFilter("ALL");
                  setIsDropdown(false);
                }}
              >
                All
              </button>
              <button 
                type="button"
                className="px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-white/10"
                onClick={() => {
                  setFilter("Complete");
                  setIsDropdown(false);
                }}
              >
                Complete
              </button>
              <button 
                type="button"
                className="px-3 py-2 text-left hover:bg-gray-200 dark:hover:bg-white/10"
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
            type="button"
            aria-label="Toggle theme"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-purple sm:h-12 sm:w-12"
            onClick={() => {
              setIsDarkMode(!isDarkMode)
            }}
          >
            {isDarkMode 
              ? <MdOutlineLightMode className="text-3xl text-white sm:text-4xl"/> 
              : <MdOutlineDarkMode className="text-3xl text-white sm:text-4xl"/> 
            }
        </button>
    </div>
    )
}

export default Toolbar
