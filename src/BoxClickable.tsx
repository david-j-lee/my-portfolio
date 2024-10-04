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
    className={
      'block border border-light p-5 transition-colors duration-500 hover:bg-dark hover:text-lightest dark:border-dark dark:hover:bg-lightest dark:hover:text-darkest ' +
      className
    }
  >
    {children}
  </a>
);
