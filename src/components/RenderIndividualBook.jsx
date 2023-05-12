// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import styles from '../styles/renderIndividual.module.css';

const RenderIndividualBook = ({ renderData }) => (
  <>
    {renderData.map((item) => (
      <div key={item.id} className={styles.renderWrapper}>
        <div className={styles.renderWrapperBookInfo}>
          <small className={styles.bookCategory}>
            {item.category}
          </small>
          <h2 className={styles.bookTitle}>{item.title}</h2>
          <small className={styles.bookAuthor}>
            {item.author}
          </small>
          <div className={styles.buttons}>
            <button type="button" id="remove">Content</button>
            <button type="button" id="remove">Remove</button>
            <button type="button" id="remove">Edit</button>
          </div>
        </div>
        <div className={styles.renderWrapperCurrentState}>
          <div className={styles.renderWrapperCurrentStateShape}>
            <h4>State</h4>
          </div>
          <div className={styles.renderWrapperPercentage}>
            <h1>64%</h1>
            <small>Completed</small>
          </div>
        </div>
        <div className={styles.renderWrapperCurrentChapter}>
          <h5 className={styles.currentChapterTitle}>CURRENT CHAPTER</h5>
          <h5 className={styles.chapterTitle}>Chapter title</h5>
          <button type="button" className={styles.btnUpdateProgress}>UPDATE PROGRESS</button>
        </div>
      </div>
    ))}
  </>
);
RenderIndividualBook.propTypes = {
  renderData: PropTypes.string.isRequired,
};

export default RenderIndividualBook;
