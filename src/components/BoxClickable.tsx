import clsx from 'clsx';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const BoxClickable = ({ children, className, href }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={clsx(
      'block',
      'border',
      'border-light',
      'p-5',
      'transition-colors',
      'duration-500',
      'hover:bg-light',
      'dark:border-dark',
      'dark:hover:bg-dark',
      className
    )}
  >
    {children}
  </a>
);
