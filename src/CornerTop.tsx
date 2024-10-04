interface Props {
  className?: string;
}

const Corner = ({ className }: Props) => (
  <div
    className={
      'absolute left-0 top-0 flex size-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dimmer dark:border-dim ' +
      className
    }
  >
    <div className="relative">
      <div className="absolute h-4 border-l border-dimmer dark:border-dim" />
      <div className="absolute w-4 border-t border-dimmer dark:border-dim" />
    </div>
  </div>
);

export default Corner;
