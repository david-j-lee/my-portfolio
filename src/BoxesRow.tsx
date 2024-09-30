type Props = {
  bottom?: boolean;
};

export const BoxesRow = ({ bottom = false }: Props) => (
  <div className="flex w-full flex-nowrap">
    <div
      className={
        'h-20 flex-1 dark:border-neutral-800 ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
    <div
      className={
        'h-20 w-full max-w-[600px] border-x dark:border-neutral-800 ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
    <div
      className={
        'h-20 flex-1 dark:border-neutral-800 ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
  </div>
);

export default BoxesRow;
