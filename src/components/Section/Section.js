import PropTypes from 'prop-types';
// import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={css.section}>
        <h2 className={css.section__title}>{title}</h2>

        {children}
      </section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
