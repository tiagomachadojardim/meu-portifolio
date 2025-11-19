import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, disabled }) => {
  return (
    <button type={type} disabled={disabled} className={classNames(['btn', disabled && 'opacity-60 cursor-not-allowed', className])}>
      {children}
    </button>
  );
};

export default Button;