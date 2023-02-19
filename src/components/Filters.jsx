import React, { useState, useId, useEffect } from 'react'
import Option from '../elements/Option';
import './Filters.css'

import { useFilters } from './hooks/useFilters';

const Filters = ({products}) => {
    const {filters, setFilters}= useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId =useId()
    const [categories, setCategories] = useState([])

    
    useEffect(() => {
        products.map(product =>{
            if(categories.includes(product.category)){
                return categories
            } else {
            setCategories([...categories, product.category])   
            }}
            )      
    }, [categories])
   
  

    const handleOnChangePrice = (e)=>{
        setFilters( prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
    const handleOnChangeCategory =(e)=>{
        setFilters( prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }
  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFilterId}>Min Price</label>
            <input type="range" id={minPriceFilterId}
            min= '0'
            max='1000'
            value={filters.minPrice}
            onChange={handleOnChangePrice}
            />
            <p>{filters.minPrice}€</p>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select name="category" id={categoryFilterId}
            onChange={handleOnChangeCategory}
            >
                <option value='all'>All</option>
                {categories.map(category =>
                    <Option key={category} value={category}/>)}
            </select>
        </div>
    </section>
  )
}

export default Filters