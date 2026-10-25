interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({ size = 'md' }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <span
      className={`font-brand ${sizeClasses[size]} tracking-tight select-none`}
      style={{ fontFamily: 'DynaPuff, cursive' }}
    >
      <span className="text-black">./_inu</span>
      <span style={{ color: '#FF6C00' }}>x</span>
    </span>
  );
}