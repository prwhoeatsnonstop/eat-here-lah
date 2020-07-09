import React from 'react'

const AddRestaurant = () => {
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Restaurant name"/>
                    </div>
                    <div className="col">
                        <select className="custom-select my-1 mr-sm-2">
                            <option disabled>Location</option>
                            <option value="Central">Central</option>
                            <option value="North">North</option>
                            <option value="South">South</option>
                            <option value="East">East</option>
                            <option value="West">West</option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Cuisine"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Address"/>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant
