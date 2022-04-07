import React from 'react';
const SideBarRight = () => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className='sideHeading'>1 Items in your Bag
          <span>Edit</span>
        </div>
        <div className="products row">
          <img src="/product1.jpg" alt="product" className='col-md-4' />
          <div className="col-md-8">
            <div className="productNmae">Ponds Bright Beauty Vitamin C Face Serum Infused With Lemon .</div>
            <div className="quantity">3ml</div>
            <hr />
            <div className="productFooter row">
              <div className="qty col-md-6">Qty : 1</div>
              <div className="price col-md-6">
                <strike>499</strike>
                &nbsp;
                <span>424</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bill">
          <div className="content">
            Sub Total
            <span>424</span>
          </div>
          <div className="content">
            Shipping Charge
            <span>Free</span>
          </div>
          <div className="content">
            Discount
            <span>-0</span>
          </div>
          <div className="content">
            Grand Total
            <span>424</span>
          </div>
        </div>
        <div className="address">
          <div className="heading">
            SHIPPING ADDRESS
            <span>CHANGE</span>
          </div>
          <p>ulb
            MS bhavan Room number 05, First floor, MS Bhavan , near modern pulic school, nathupur, Gurgao , Hariyana - 122002,  Gurgaon  -  122002,  , India</p>
          <div className="subHeading">9897270083</div>
        </div>
      </div>
    </div>
  )
}

export default SideBarRight;