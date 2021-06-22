import React from 'react'
import { formatCurrency, keysList, mapCamelCaseToSentenceCase, truthyKeys } from '../../helpers/utils'

const ProductItem = ({ 
    make, 
    year, 
    image, 
    price, 
    isFourWheelDrive, 
    hasHeatedSeats, 
    hasSunroof, 
    hasPowerWindows, 
    hasLowMiles, 
    hasNavigation 
}) => {
    const productName = `${make} ${year}`
    const stats = {
        allWheelDrive: isFourWheelDrive,
        sunRoof: hasSunroof,
        lowMiles: hasLowMiles,
        powerWindows: hasPowerWindows,
        navigation: hasNavigation,
        heatedSeats: hasHeatedSeats
    }

    return (
        <div className="col-3 mt-4">
            <div className="product--container">
                <div>
                    <img className="img-fluid" src={image} alt={productName} />
                </div>
                <div className="product--body">
                    <div className="d-flex justify-content-between">
                        <h5>{ productName }</h5>
                        <h5 className="text-muted">{formatCurrency(price)}</h5>
                    </div>
                    <small className="row mt-2">
                        {
                            keysList(truthyKeys(stats)).map(stat => {
                                return (
                                    <span key={stat} className="col-6 text-nowrap text-muted">
                                        <i className="bi bi-check-circle-fill text-info"/> {mapCamelCaseToSentenceCase(stat)}
                                    </span>
                                )
                            })
                        }
                    </small>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
