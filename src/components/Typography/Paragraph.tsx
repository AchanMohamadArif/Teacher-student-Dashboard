import React, { ReactNode, HTMLAttributes } from 'react';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-base leading-normal ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
