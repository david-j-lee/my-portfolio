type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Box = ({ children, className }: Props) => (
  <div className={'border p-5 dark:border-neutral-800 ' + className}>
    {children}
  </div>
);

export default Box;
