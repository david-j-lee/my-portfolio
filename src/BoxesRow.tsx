interface Props {
  bottom?: boolean;
}

export const BoxesRow = ({ bottom = false }: Props) => (
  <div className="flex w-full flex-nowrap">
    <div
      className={
        'h-20 flex-1 border-light dark:border-dark ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
    <div
      className={
        'h-20 w-full max-w-[600px] border-x border-light dark:border-dark ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
    <div
      className={
        'h-20 flex-1 border-light dark:border-dark ' +
        (bottom ? 'border-t' : 'border-b')
      }
    />
  </div>
);

export default BoxesRow;
