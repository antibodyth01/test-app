import { useState } from "react";
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import ProductsList from "../components/ProductsList/ProductsList";
import 'antd/dist/antd.css';

export default function Home({ products }) {

  const [keyword, setKeyword] = useState("");

  const filteredProducts = products.items.filter(
    (product) =>
    product.name.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
    <div className={styles.inputContainer}>
     <div className={styles.input}>
        <SearchInput
          placeholder=""
          onChange={onInputChange}
        />
      </div>
    </div>
    <ProductsList products={filteredProducts}/>
  </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://6228a0839fd6174ca82a273e.mockapi.io/api/v1/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
