import React from "react";
import styled from "styled-components";
import { Collapisble, Collapisble2 } from "./Collapisble";
import { useSelector } from "react-redux";

const FilterDiv = styled.div`
    position: sticky;
    top: 1rem;
`;

const Div = styled.div`
    width: 100%
    padding: 0 1.5rem;
`;

const Check = styled.div`
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    background-color: white;
    padding: 0.7rem 1rem 0.7rem 3rem;

    & > input[type="checkbox"] {
        border-radius: 50%;
    }
`;

const Hr1 = styled.div`
    width: 80%;
    height: 2px;
    background-color: rgb(243, 243, 243);
    margin: auto;
`;
const Hr2 = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgb(243, 243, 243);
    margin: auto;
`;
export const Sort = () => {
    const data = useSelector((state) => state.products);

    return <Collapisble name="Sort By : ">fdsfklhlkfasdjb</Collapisble>;
};

export const Filter = () => {
    const data = useSelector((state) => state.products);
    let brand = [];
    data.forEach((ele) => {
        brand.push(ele.brand);
    });
    brand = new Set(brand);
    console.log(brand);
    return (
        <FilterDiv>
            <Collapisble name="Category">
                <Div>
                    <Collapisble2 name="Hair Styling Tools">
                        <Hr1 />
                        <Check>
                            <label htmlFor="Straighteners">Straighteners</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Straighteners"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Curling_Irons/Stylers">
                                Curling Irons/Stylers
                            </label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Curling_Irons/Stylers"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Hair_Dryers">Hair Dryers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Hair_Dryers"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Multi_Stylers">Multi Stylers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Multi_Stylers"
                            />
                        </Check>
                        <Hr2 />
                    </Collapisble2>
                    <Collapisble2 name="Massage Tools">
                        <Hr1 />
                        <Check>
                            <label htmlFor="Massagers">Massagers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Massagers"
                            />
                        </Check>
                        <Hr2 />
                    </Collapisble2>
                    <Collapisble2 name="Shaving Tools">
                        <Hr1 />
                        <Check>
                            <label htmlFor="Trimmers">Trimmers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Trimmers"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Shavers">Shavers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Shavers"
                            />
                        </Check>
                        <Hr2 />
                    </Collapisble2>
                    <Collapisble2 name="Face/Skin Tools">
                        <Hr1 />
                        <Check>
                            <label htmlFor="Dermarollers">Dermarollers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Dermarollers"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Cleansing_Brushes">
                                Cleansing Brushes
                            </label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Cleansing_Brushes"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Face_Epilator">Face Epilator</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Face_Epilator"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Acne_Removal">Acne Removal</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Acne_Removal"
                            />
                        </Check>
                        <Hr2 />
                    </Collapisble2>
                    <Collapisble2 name="Hair Removal Tools">
                        <Hr1 />
                        <Check>
                            <label htmlFor="Epilators">Epilators</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Epilators"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Body_Groomers">Body Groomers</label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Body_Groomers"
                            />
                        </Check>
                        <Check>
                            <label htmlFor="Bikini_Trimmers">
                                Bikini Trimmers
                            </label>
                            <input
                                type="checkbox"
                                name="sub_category"
                                value="Bikini_Trimmers"
                            />
                        </Check>
                        <Hr2 />
                    </Collapisble2>
                </Div>
            </Collapisble>
            <Collapisble name="Brand">
                <Hr1 />
                <div
                    style={{
                        height: "fit-content",
                        maxHeigth: "10rem",
                        overflow: "hidden",
                    }}
                >
                    <Check>
                        <label htmlFor="Agaro"> Agaro </label>
                        <input type="checkbox" name="brand" value="Agaro" />
                    </Check>
                    <Check>
                        <label htmlFor="Alan Truman"> Alan Truman </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Alan Truman"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="Bombay Shaving Company">
                            {" "}
                            Bombay Shaving Company{" "}
                        </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Bombay Shaving Company"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="Braun"> Braun </label>
                        <input type="checkbox" name="brand" value="Braun" />
                    </Check>
                    <Check>
                        <label htmlFor="Bronson Professional">
                            Bronson Professional
                        </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Bronson Professional"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="CARRERA"> CARRERA </label>
                        <input type="checkbox" name="brand" value="CARRERA" />
                    </Check>
                    <Check>
                        <label htmlFor="Flawless"> Flawless </label>
                        <input type="checkbox" name="brand" value="Flawless" />
                    </Check>
                    <Check>
                        <label htmlFor="Gorgio Professional">
                            {" "}
                            Gorgio Professional{" "}
                        </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Gorgio Professional"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="IGRiD"> IGRiD </label>
                        <input type="checkbox" name="brand" value="IGRiD" />
                    </Check>
                    <Check>
                        <label htmlFor="Ikonic Professional">
                            {" "}
                            Ikonic Professional{" "}
                        </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Ikonic Professional"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="Nova"> Nova </label>
                        <input type="checkbox" name="brand" value="Nova" />
                    </Check>
                    <Check>
                        <label htmlFor="Nykaa Naturals"> Nykaa Naturals </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Nykaa Naturals"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="Philips India"> Philips India </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Philips India"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="Veet"> Veet </label>
                        <input type="checkbox" name="brand" value="Veet" />
                    </Check>
                    <Check>
                        <label htmlFor="Winston Electronics">
                            {" "}
                            Winston Electronics{" "}
                        </label>
                        <input
                            type="checkbox"
                            name="brand"
                            value="Winston Electronics"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="ZLADE"> ZLADE </label>
                        <input type="checkbox" name="brand" value="ZLADE" />
                    </Check>
                </div>
                <Hr2 />
            </Collapisble>
            <Collapisble name="Price">
                <div>
                    <Hr1 />
                    <Check>
                        <label htmlFor="0-500"> Rs. 0 - Rs. 499 </label>
                        <input type="checkbox" name="price" value="0-500" />
                    </Check>
                    <Check>
                        <label htmlFor="500-999"> Rs. 500 - Rs. 999 </label>
                        <input type="checkbox" name="price" value="500-999" />
                    </Check>
                    <Check>
                        <label htmlFor="1000-1999"> Rs. 1000 - Rs. 1999 </label>
                        <input type="checkbox" name="price" value="1000-1999" />
                    </Check>
                    <Check>
                        <label htmlFor="2000-3999"> Rs. 2000 - Rs. 3999 </label>
                        <input type="checkbox" name="price" value="2000-3999" />
                    </Check>
                    <Check>
                        <label htmlFor="4000&above"> Rs. 4000 & Above </label>
                        <input
                            type="checkbox"
                            name="price"
                            value="4000&above"
                        />
                    </Check>
                    <Hr2 />
                </div>
            </Collapisble>
            <Collapisble name="Discount">
                <div>
                    <Check>
                        <label htmlFor="70andAvove"> 70% And Above </label>
                        <input
                            type="checkbox"
                            name="discount"
                            value="70andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="50andAvove"> 50% And Above </label>
                        <input
                            type="checkbox"
                            name="discount"
                            value="50andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="30andAvove"> 30% And Above </label>
                        <input
                            type="checkbox"
                            name="discount"
                            value="30andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="10andAvove"> 10% And Above </label>
                        <input
                            type="checkbox"
                            name="discount"
                            value="10andAvove"
                        />
                    </Check>
                </div>
            </Collapisble>
            <Collapisble name="Avg Customer Rating">
                <div>
                    <Check>
                        <label htmlFor="4andAvove"> 4 Stars & Above </label>
                        <input
                            type="checkbox"
                            name="rating"
                            value="10andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="3andAvove"> 3 Stars & Above </label>
                        <input
                            type="checkbox"
                            name="rating"
                            value="10andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="2andAvove"> 2 Stars & Above </label>
                        <input
                            type="checkbox"
                            name="rating"
                            value="10andAvove"
                        />
                    </Check>
                    <Check>
                        <label htmlFor="1andAvove"> 1 Star & Above </label>
                        <input
                            type="checkbox"
                            name="rating"
                            value="10andAvove"
                        />
                    </Check>
                </div>
            </Collapisble>
            <Collapisble name="Concern" value={"this is working"} />
            <Collapisble name="Gender" value={"this is working"} />
            <Collapisble name="Preference" value={"this is working"} />
            <Collapisble name="Hair Type" value={"this is working"} />
            <Collapisble name="Skin Type" value={"this is working"} />
            <Collapisble name="Formulation" value={"this is working"} />
        </FilterDiv>
    );
};
