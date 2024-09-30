type Props = {
  className?: string;
};

const Corner = ({ className }: Props) => (
  <div
    className={
      'absolute left-0 top-0 flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border dark:border-neutral-400 ' +
      className
    }
  >
    <div className="relative">
      <div className="absolute h-4 border-l dark:border-neutral-400" />
      <div className="absolute w-4 border-t dark:border-neutral-400" />
    </div>
  </div>
);

export default Corner;
