import styles from "./SearchInput.module.css";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
    
      <input className={styles.input} {...rest} />
      <SearchOutlined  style={{ color: 'white', backgroundColor:'#ff6500',padding:'10px' }} />

    </div>
    
  );
};

export default SearchInput;
