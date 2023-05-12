import AddNewBook from './AddNewBook';
import RenderIndividualBook from './RenderIndividualBook';
import styles from '../styles/bookList.module.css';

const BookList = () => {
  const data = [
    {
      id: 1,
      title: 'Setup React website',
      author: 'Elham',
      category: 'Action'
    },
    {
      id: 2,
      title: 'C# programing',
      author: 'Lg',
      category: 'Since Fiction'
    },
    {
      id: 3,
      title: 'Who moved my cheese',
      author: 'Pk ',
      category: 'Economy'
    },
  ];
  return (
    <>

      <div className={styles.renderContainer}>
        <RenderIndividualBook renderData={data} />
        <AddNewBook />
      </div>
    </>
  );
};

export default BookList;