import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

const MinePage: FC<IProps> = () => {
  return (
    <div>
      <h1>MINE</h1>
      <Link to="/">home</Link>
    </div>
  );
};

export default MinePage;
