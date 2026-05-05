import clsx from 'clsx';

interface Props {
  bottom?: boolean;
}

export const BoxesRow = ({ bottom = false }: Props) => (
  <div className={clsx('flex', 'w-full', 'flex-nowrap', bottom && 'grow')}>
    <div
      className={clsx(
        'min-h-20',
        'flex-1',
        'border-light',
        'dark:border-dark',
        bottom ? 'border-t' : 'border-b'
      )}
    />
    <div
      className={clsx(
        'min-h-20',
        'w-full',
        'max-w-150',
        'border-x',
        'border-light',
        'dark:border-dark',
        bottom ? 'border-t' : 'border-b'
      )}
    />
    <div
      className={clsx(
        'min-h-20',
        'flex-1',
        'border-light',
        'dark:border-dark',
        bottom ? 'border-t' : 'border-b'
      )}
    />
  </div>
);

export default BoxesRow;
