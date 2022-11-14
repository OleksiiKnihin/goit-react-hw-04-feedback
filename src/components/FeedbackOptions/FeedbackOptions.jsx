import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ul className={css.feedback__list}>
      {options.map(option => (
        <li key={option}>
          <button
            className={css.feedback__item}
            type="button"
            name={option}
            // onClick={onLeaveFeedback}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
