import { ButtonHTMLAttributes, FC } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IProps> = (props) => {
  return (
    <button
      type="button"
      {...props}
    />
  );
};

export default Button;
