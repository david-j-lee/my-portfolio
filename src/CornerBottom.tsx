interface Props {
  className?: string;
}

const CornerBottom = ({ className }: Props) => (
  <div
    className={
      'absolute bottom-0 right-0 flex size-2 translate-x-1/2 translate-y-1/2 items-center justify-center ' +
      className
    }
  >
    <div className="relative">
      <div className="absolute h-4 -translate-y-full border-l border-dimmer dark:border-dim" />
      <div className="absolute w-4 -translate-x-full border-t border-dimmer dark:border-dim" />
    </div>
  </div>
);

export default CornerBottom;
