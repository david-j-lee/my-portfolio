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
      'block border p-5 transition-colors duration-500 dark:border-neutral-800 dark:hover:bg-neutral-50 dark:hover:text-neutral-900 ' +
      className
    }
  >
    {children}
  </a>
);
