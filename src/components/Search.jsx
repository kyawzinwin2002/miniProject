import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchCom from './SearchCom';

const Search = () => {
    const {state} = useLocation()
    // console.log(state);
  return (
    <div>
        {state.filteredProduct.map(item => {
            return(
                <SearchCom key={item.id} {...item}/>
            )
        })}
    </div>
  )
}

export default Search