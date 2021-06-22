import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { keysList, mapCamelCaseToSentenceCase } from '../../helpers/utils'
import { changeOption } from '../../redux/slices/HeaderSlice'
import { fetchProducts } from '../../redux/slices/ProductSlice'

const Header = () => {

    const dispatch = useDispatch()

    const options = useSelector(state => state.header)

    const colors = ['Any', 'Red', 'White', 'Gray', 'Silver', 'Black']

    const handleOptionChange = (value, option = 'color') => {
        dispatch(changeOption({value, option}))
    }

    const handleSearch = () => dispatch(fetchProducts())

    return (
        <div className="header--container d-flex text-nowrap">
            <h6 className="logo">Cari Go</h6>
            <div className="filter--container">
                <select className="form-select select--component" value={options.color} onChange={e => handleOptionChange(e.target.value)}>
                    {
                        colors.map(color => <option key={color} value={color}>{color}</option>)
                    }
                </select>
                <div className="row checkbox--container">
                    {
                        keysList(options).map(option => {
                            if (option === 'color') return null
                            return (
                                <small key={option} className="form-check col">
                                    <input className="form-check-input" type="checkbox" onChange={e => handleOptionChange(e.target.checked, option)} checked={options[option]} />
                                    <label className="form-check-label">
                                        { mapCamelCaseToSentenceCase(option) }
                                    </label>
                                </small>
                            )
                        })
                    }
                </div>
                <button className="btn btn-outline-primary" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default Header
