interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Box = ({ children, className }: Props) => (
  <div className={'border border-light p-5 dark:border-dark ' + className}>
    {children}
  </div>
);

export default Box;
