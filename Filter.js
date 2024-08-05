import React, { useState } from 'React';

const Filter=({column,onFilterChange})=>{
    const [filterType,setFilterType]=useState('');
    const [filterValue,setFilterValue]=useState('');
    const handleFilterChange=()=>{
        onFilterChange({
            column:column.name,
            type:filterType,
            value:filterValue
        });
    };
}
const FilterOptions=()=>{
    switch(column.type){
        case 'Integer':
            return(
                <>
                <select value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                    <option value="">Select Filter</option>
                    <option value="equals">Equals</option>
                    <option value="lessThan">Less than</option>
                    <option value="lessThanOrEqual">Less than or equal</option>
                    <option value="greaterThan">Greater than</option>
                    <option value="greaterThanOrEqual">Greater than or equal</option>
                    <option value="range">Range</option>
                    <option value="notEqual">Not equal</option>
                </select>
                {filterType==="range"?(
                    
                )}
                </>
            )
    }
}