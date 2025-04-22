// React Component: Products.js

import './Products.css'; // Import the CSS file
import Arrow from '../assets/Arrow.png';
import { useState } from 'react';

const MenProd = () => {
  const [liked, setLiked] = useState({});

  const companies = [
    {
      name: 'StyleCast',
      description: 'Men Checked without Longline Tailored Jacket',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTyKryvoioT2uUHbhBHtOGs5huwLgLBsmaEmFUicBXnKucbmPAJ7Lg4wRlEPolamyoNdBmCe1RLhc0tSq4aoYS9n2q2LfHwjx_HdnGeCPw&usqp=CAE',
      price: 1649,
      discount: 20,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
      productType: 'Jacket',
      color: '112,79,59',
      occasion: 'Casual',
    },
    {
      name: 'Roadster',
      description: 'Men Charcoal Grey Solid Corduroy Jacket',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQQcBsjLwovu78-VRchPe0Exy5pxJUo0oP1AJl0mqAdyyLHk0_8ZsD5uXJwncrJeu3ypPDw1cx9tQFOn2YD_HFQqtiro70IvDh1bRJFVk0&usqp=CAE',
      price: 1299,
      discount: 15,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
      productType: 'Jacket',
      color: '59,49,50',
      occasion: 'Casual',
    },
    {
      name: 'Mast & Harbour',
      description: 'Regular Fit Denim Jacket',
      imgSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvAYuPpPWfbviQawQ4-Go7lLXRVZlTRhXQKJ2v3H2t6AO1B4joDJZzy5upbJdrwyeyof9fmux9gtkgBIOvXrsGHedvNmwXuKFHjlDEOQscJG3PgokolPM0&usqp=CAc',
      price: 1399,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'jacket',
      color: '237,227,218',
      occasion: 'Casual',
    },
    {
      name: 'Urbano Fasion',
      description: 'men Light Blue Solid Regular Fit Washed Full Sleeve Denim Jacket',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTU1F4fajwjb44vG7ES-BF-7DcnUAzxDmvrogdhfZsOFDMe7BLafilknH5T21Rs4nA7Ytxmk30QMgbfSO5C_JpKsGt-JU6L1feLScvxvL8f86JS1XnCwbwraA&usqp=CAc',
      price: 2000,
      discount: 15,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
      productType: 'Jacket',
      color: '101,137,182',
      occasion: 'Casual',
    },
    {
      name: 'Washed Jacket',
      description: 'Locomotive Men Full Sleeve Washed Jacket',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSmWSxT-MLFLIdtEPChJmYMsAXU6wUGlH09AK_WMk359gXZjL2AJk7B0KUYO6SatddEEMEMcXVYJP3GKdC_nCzXcIIEh2gPMpBAKhyfvjgQF6noIu44Ibds',
      price: 1670,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'Jacket',
      color: '193,200,212',
      occasion: 'Casual',
    },
    {
      name: 'Invictus',
      description: 'Men Easy Care Grey & Black Self Design Sustainable Formal Shirt',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwoY5NKSHPrShLzeB1FYR7BozFTlM6RevNL8sqzGRklUf2QB7d6j52VpHBe8_MSf7vJpwwJ9Hr-Q9h8_7liBdXlcc6GPUSCwYr6M4TH-t5&usqp=CAE',
      price: 670,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'Shirt',
      color: '78,70,67',
      occasion: 'Formal',
    },
    {
      name: 'SATIN STRETCH SHIRT',
      description: 'HOLAND - DUSKY PURPLE',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRp97MnAGnpvSJgN-v4U6L-VMFbqNbcg0pXL_mvNaAvWEu4WHCeQopB7Om-P_WZ2IegiKkrzyFofpYlIj3V-IkG1EGxO6g5t8F9OFeuX0uogByarYyROwB_&usqp=CAE',
      price: 2013,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'Shirt',
      color: '159,166,200',
      occasion: 'Formal',
    },
    {
      name: 'Solid Formal White Shirt',
      description: 'He Spoke',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0aogs28hjFhpzMCz7fKkKW4qJBDSk4gDUJYNBUqxQ-qs-tWG6ptJcQme5jDF0xuWi2m3fr2OCgq0TxRScA-9_W7_J5xSzgS5zyffzcgs&usqp=CAE',
      price: 1199,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'Shirt',
      color: '200,200,200',
      occasion: 'Formal',
    },
    {
      name: 'TONAL CHECK SHIRT',
      description: 'BOXLINE - LIGHT PINK',
      imgSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRAmFhsMwruuOQn0iUNhybYyRA-aDwBOdv4_37dWetuQWQT1TBv4r19DN9znuY_dZJRiUUe2wOxVaeclv-0OBnOCKToZbIARhxsjYnYnH4lZjA0-qhkqBZt&usqp=CAE',
      price: 670,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
      productType: 'Shirt',
      color: '229,213,213',
      occasion: 'Formal',
    }
  ];

  const toggleLike = (index) => {
    setLiked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="trusted-companies">
      <div className="container">
        {companies.map((company, index) => (
          <div className="card" key={index}>
            <div className="card-inner" style={{ '--clr': '#fff' }}>
              <div className="box">
                <div className="imgBox">
                  <img src={company.imgSrc} alt={company.name} />
                </div>
                <div className="icon">
                  <a href="#" className="iconBox" style={{ background: company.iconBg }}>
                    <img src={Arrow} className="arrimg" alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h3>{company.name}</h3>
              <p>{company.description}</p>

              <div className="price-details">
                <span className="price">${(company.price - (company.price * company.discount) / 100).toFixed(2)}</span>
                <span className="discount">{company.discount}% OFF</span>
              </div>
              <div className="actions">
                <button className="add-to-cart">Add to Cart</button>
                <button
                  className={`like-button ${liked[index] ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  {liked[index] ? '❤️' : '♡'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenProd;
