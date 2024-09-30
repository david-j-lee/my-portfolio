type Props = {
  className?: string;
};

const CornerBottom = ({ className }: Props) => (
  <div
    className={
      'absolute bottom-0 right-0 flex size-2 translate-x-1/2 translate-y-1/2 items-center justify-center ' +
      className
    }
  >
    <div className="relative">
      <div className="absolute h-4 -translate-y-full border-l dark:border-neutral-400" />
      <div className="absolute w-4 -translate-x-full border-t dark:border-neutral-400" />
    </div>
  </div>
);

export default CornerBottom;
