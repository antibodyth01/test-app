import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Product.module.css";
import 'antd/dist/antd.css';
import { InputNumber,Rate } from 'antd';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const getProduct = async (id) => {
  const res = await fetch(`https://6228a0839fd6174ca82a273e.mockapi.io/api/v1/products/${id}`);

  const product = await res.json();

  return product;
};

const Product = ({ product }) => {
  var settings = {
    dots: false,
    slidesToShow: 2,
  };
  const slides = product.image_urls.map((image,index) => {
    return <div key={index} ><img className={styles.image2} src={image} /></div>
  })
  return (
    <Layout title={product.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <img src={product.image_urls[0]} alt={product.name}></img>   
          </div>
          <Slider {...settings}>
          {slides}
          </Slider>
        </div>
       
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
          <h1 className={styles.overview_name}>{product.name}</h1>
          <div className={styles.overview_rating}><Rate disabled allowHalf defaultValue={product.rating} style={{fontSize:'12px',padding:'2px'}} />{'1805 Ratings'}</div>    
          <div className={styles.overview_brand}><div>{'Brand '}</div><div className={styles.brand_text}>{product.brand}</div></div> 
          <div className={styles.overview_final_price}>{'฿'+product.final_price}</div> 
          <div className={styles.overview_regular_price}><div className={styles.overview_regular_price_text}>{'฿'+product.regular_price}</div><div className={styles.overview_percent}>{(parseInt((product.regular_price-product.final_price)/product.regular_price*100))+'%'}</div> </div> 
          <div className={styles.overview_qty}>
          <div className={styles.overview_qty_text}>Quantity</div>
          <div className={styles.overview_value}><InputNumber defaultValue={1}  /></div>
          </div>
          </div>
        </div>
        <div className={styles.overview_description}>{product.description}</div> 
      </div>
    </Layout>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const res = await fetch("https://6228a0839fd6174ca82a273e.mockapi.io/api/v1/products");
  const products = await res.json();

  const paths = products.items.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const product = await getProduct(params.id);

  return {
    props: {
      product,
    },
  };
};
