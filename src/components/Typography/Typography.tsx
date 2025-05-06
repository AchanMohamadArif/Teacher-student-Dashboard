import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export const H1: React.FC<HeadingProps> = ({ children, className }) => (
  <h1 className={clsx("text-4xl font-bold tracking-tight", className)}>{children}</h1>
);

export const H2: React.FC<HeadingProps> = ({ children, className }) => (
  <h2 className={clsx("text-3xl font-semibold tracking-tight", className)}>{children}</h2>
);

export const H3: React.FC<HeadingProps> = ({ children, className }) => (
  <h3 className={clsx("text-2xl font-semibold tracking-tight", className)}>{children}</h3>
);

export const H4: React.FC<HeadingProps> = ({ children, className }) => (
  <h4 className={clsx("text-xl font-medium", className)}>{children}</h4>
);

export const H5: React.FC<HeadingProps> = ({ children, className }) => (
  <h5 className={clsx("text-lg font-medium", className)}>{children}</h5>
);

export const H6: React.FC<HeadingProps> = ({ children, className }) => (
  <h6 className={clsx("text-base font-medium", className)}>{children}</h6>
);
