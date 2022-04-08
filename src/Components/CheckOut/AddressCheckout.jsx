import React from "react";
import { Div } from "../StyledComponents/NykaaStyles";
import Nav from './Nav'
import SideBarRight from "./SideBarRight";
const Address = () => {

    return (
        <Div >
            <Nav active="address" />
            <div className="row">
                <div className="col-md-4">
                    <ul className='tabs'>
                        <li className='active'>New Address</li>

                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <h5>New Address</h5>
                        <hr />
                        <div className="address">
                            <form>
                                <input type="text" name="country" placeholder="Country" />
                                <input type="text" name="name" placeholder="Name" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="phone" placeholder="Phone" />
                                <input type="text" name="postalCode" placeholder="Postal Code" />
                                <textarea name="address" id="address" cols="30" rows="5" placeholder="Address"></textarea>
                            </form>
                            <div className="button">SHIP TO THIS ADDRESS  &gt;</div>
                        </div>
                    </div>
                </div>
                <SideBarRight />

            </div>
        </Div>
    )
}

export default Address