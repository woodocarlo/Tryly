// React Component: Products.js

import './Products.css'; // Import the CSS file
import Arrow from '../assets/Arrow.png';
import { useState } from 'react';

const Products = () => {
  const [liked, setLiked] = useState({});

  const companies = [
    {
      name: 'H&M',
      description: 'Long-sleeved Jersey Top',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd8%2F24%2Fd8240df86b567f1130e0447f845ee5a4bf703291.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 699,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'H&M',
      description: 'Crocodile-patterned mini dress',
      imgSrc: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F32%2Ffe%2F32fe2573f027ea976166e9f4af98c719581af145.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 1499,
      discount: 10,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'Only',
      description: 'Cream Printed Oversized T-shirt',
      imgSrc: 'https://images.bestsellerclothing.in/data/only/02-mar-2024/144290401_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto',
      price: 584,
      discount: 1299,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
    },
    {
      name: 'Only',
      description: 'Brown Front Button Cardigan',
      imgSrc: 'https://images.bestsellerclothing.in/data/only/29-sep-2023/283532701_g0.jpg?width=488&height=650&mode=fill&fill=blur&format=auto',
      price: 1259,
      discount: 59,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
      ],
      iconBg: '#d3b19a',
    },
    {
      name: 'Roadster',
      description: 'Roadster Women Black White Striped Round Neck',
      imgSrc: 'https://rukminim2.flixcart.com/image/1200/1440/xif0q/t-shirt/x/e/q/xxl-9740215-roadster-original-imagkf3y6yyvxnhy.jpeg?q=60&crop=false',
      price: 286,
      discount: 46,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'Max',
      description: 'Women Striped Polo T-shirt',
      imgSrc: 'https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000013971370-Brown-BROWN-1000013971370_01-2100.jpg',
      price: 599,
      discount: 20,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'packaging', color: '#70b3b1' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#d05fa2',
    },
    {
      name: 'Urbanic',
      description: 'Black A-Line flared Dress',
      imgSrc:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0H2z_GijAB0PihTk6DM4ZXPFp72OZkZqKX9Agwec6dIhqkBcgeNU81hzhAFh90mZhMDcqvjEH07fYGC_0V-V2oprqDDXSKGPUnZklaq8&usqp=CAc',
      price: 400,
      discount: 30,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'LittleBox',
      description: 'Ruffled Wrap V-Dress',
      imgSrc:'https://littleboxindia.com/cdn/shop/files/778_2_71a72689-8516-4a25-99af-111830b16b05_720x.jpg?v=1728902869',
      price: 600,
      discount: 23,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
     {
      name: 'LittleBox',
      description: 'Solid Cowl Neck Slit Midi Dress in Peach',
      imgSrc:'https://littleboxindia.com/cdn/shop/files/8a0ac9f61ca902ff4221a8a59495cdd5_720x.jpg?v=1717841569',
      price: 650,
      discount: 23,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'StyleCast',
      description: 'Red Bodycon Dress',
      imgSrc:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDmDA9KMuC0ULxa9pyGie7YBCqNIwKT2gNKTo-sGtdOJKpOPVNPbl1c06RMxGemRPIW1uDkHYDq79FxCScvh0UmuT8MT2VR51r0EpfTek',
      price: 350,
      discount: 23,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
   {
      name: 'H&M',
      description: 'Flared Low Jeans',
      imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2Ffc%2Ff8fcdf647cba11fa6da5ee7900de8f1e6bc8f29d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 250,
      discount: 17,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    {
      name: 'H&M',
      description: 'Brown Printed T-shirt',
      imgSrc:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2F91%2Fbe91b3ac24d9eaaba45c6796b2ff006467ca7b32.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
      price: 499,
      discount: 16,
      tags: [
        { name: 'branding', color: '#d3b19a' },
        { name: 'marketing', color: '#d05fa2' },
      ],
      iconBg: '#70b3b1',
    },
    
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

export default Products;
