import styles from '../styles/addNewBook.module.css';

const AddNewBook = () => (
  <>
    <div className={styles.addNewBookWrapper}>
      <div className={styles.addNewBookWrapperTitle}>
        <h3>ADD NEW BOOK</h3>
      </div>
      <div className={styles.addNewBookWrapperInputs}>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <input type="text" id="title" placeholder="Book Title Here..." />
        </div>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <input type="text" id="name" placeholder="Author Name Here..." />
        </div>
        <div className={styles.addNewBookWrapperInputSeprator}>
          <button type="submit">Add Book</button>
        </div>
      </div>
    </div>
  </>
);

export default AddNewBook;
