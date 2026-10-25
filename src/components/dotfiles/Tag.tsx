interface TagProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'pill';
}

export function Tag({ label, active, onClick, variant = 'default' }: TagProps) {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors';
  const styles =
    variant === 'pill'
      ? active
        ? 'bg-primary text-primary-content'
        : 'bg-base-200 text-base-content/70 hover:bg-base-300'
      : 'bg-base-200 text-base-content/70';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={`${base} ${styles} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {label}
    </button>
  );
}