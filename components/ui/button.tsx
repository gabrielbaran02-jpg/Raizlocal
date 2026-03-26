import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60',
        variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-700',
        variant === 'outline' && 'border border-slate-300 bg-white hover:bg-slate-100',
        variant === 'ghost' && 'text-slate-600 hover:bg-slate-100',
        className
      )}
      {...props}
    />
  );
}
