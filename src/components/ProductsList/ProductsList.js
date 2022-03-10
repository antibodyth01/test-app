import Link from "next/link";
import { useState,useEffect } from "react";
import styles from "./ProductsList.module.css";
import { Pagination,Rate } from 'antd';

const ProductsList = ({ products }) => {
  const [data, setData] = useState(products);
  const [totalPage, setTotalPage] = useState(products.length);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(8)

  const indexOfLastPage = page * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const currentData = products.slice(indexOfFirstPage, indexOfLastPage)
  return (
    <div>    
      <div className={styles.products_list}>
      {currentData.map((product) => (
        <Link href={`/product/${product.id}`} key={product.name}>
          <div className={styles.row}>
            <div className={styles.image}>
              <img src={product.image_urls[0]} alt={product.image_urls[0]} />
            </div>
            <div className={styles.name}>{product.name}</div>           
            <div className={styles.final_price}>{'฿'+product.final_price}</div>
            <div className={styles.regular_price}><div className={styles.regular_price_text}>{'฿'+product.regular_price}</div><div className={styles.percent}>{(parseInt((product.regular_price-product.final_price)/product.regular_price*100))+'%'}</div></div>
            <div className={styles.rating}><Rate disabled allowHalf defaultValue={product.rating} style={{fontSize:'12px',padding:'2px'}} />{'('+product.rating+')'}</div>
          </div>
          </Link>
      ))}
      </div>
      <div className={styles.pagination}>
      <Pagination pageSize={dataPerPage}
          total={products.length} current={page}
          onChange={(value) => setPage(value)} />
      </div>
    </div>
  );
};

export default ProductsList;
