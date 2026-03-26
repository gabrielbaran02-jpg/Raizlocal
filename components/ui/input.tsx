import { clsx } from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-brand-500 focus:ring-2',
        className
      )}
      {...props}
    />
  );
}
