import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import {useDispatch, useSelector} from "react-redux";
import {writeShowSearch} from "../store/reducers/search";

function Search(props) {
    const dispatch = useDispatch()
    const {showSearch} = useSelector(state => state.search)

    const cats = ['Vegetables','Fruits','Herbs']
    const startSearch = (event) => {
        event.preventDefault()

    }
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    // setSelectedCondition(null);
                    dispatch(writeShowSearch())
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)

    return showSearch? (
        <div className='fixed w-full h-screen-h top-0 left-0 bg-gray-500/70 z-10 flex items-center justify-center'>
            <div className="w-500px max-w-90% rounded-lg p-2" ref={wrapperRef}>
                <div>
                    <form onSubmit={startSearch} className='flex gap-2'>
                        <fieldset className="relative w-full h-8 bg-white flex items-center gap-2 rounded-md px-2">
                            <input type="text" className='bg-transparent h-full w-full'/>
                            <button className='w-8 h-8'>
                                <FontAwesomeIcon icon={solid('search')} className='h-4'/>
                            </button>
                        </fieldset>
                        <button className="min-w-150px h-8 bg-primary text-white whitespace-nowrap rounded-md">Advanced search</button>


                    </form>
                    <div className='rounded-md w-full bg-white h-200px mt-2 p-4'>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <select className='w-full h-8 border-1px rounded-md px-2 focus:outline-none'>
                                <option value="--Select category--">--Select category--</option>
                                {
                                    cats.map((value, index) => (
                                        <option value={value} key={index}>
                                            {value}
                                        </option>
                                    ))
                                }
                            </select>
                            <select className='w-full h-8 border-1px rounded-md px-2 focus:outline-none'>
                                <option value="--Select subcategory--">--Select subcategory--</option>
                                {
                                    cats.map((value, index) => (
                                        <option value={value} key={index}>
                                            {value}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                            <select className='w-full h-8 border-1px rounded-md px-2 focus:outline-none'>
                                <option value="--Select variety--">--Select variety--</option>
                                {
                                    cats.map((value, index) => (
                                        <option value={value} key={index}>
                                            {value}
                                        </option>
                                    ))
                                }
                            </select>
                            <select className='w-full h-8 border-1px rounded-md px-2 focus:outline-none'>
                                <option value="--Select size--">--Select size--</option>
                                {
                                    cats.map((value, index) => (
                                        <option value={value} key={index}>
                                            {value}
                                        </option>
                                    ))
                                }
                            </select>

                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button className="min-w-150px h-8 bg-slate-200 whitespace-nowrap rounded-md" onClick={()=>{dispatch(writeShowSearch())}}>Cancel</button>
                            <button className="min-w-150px h-8 bg-primary text-white whitespace-nowrap rounded-md">Apply</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    ):
        ''
}

export default Search;
