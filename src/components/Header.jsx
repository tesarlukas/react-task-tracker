import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const AddTask = () => {
    console.log('Task added!');
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={AddTask} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,
};

export default Header;
