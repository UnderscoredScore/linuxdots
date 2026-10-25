interface PlatformIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function PlatformIcon({ name, className, size = 16 }: PlatformIconProps) {
  const src = `/logos/${name.toLowerCase()}.svg`;
  return (
    <span
      aria-label={name}
      role="img"
      className={`inline-block bg-current ${className ?? ''}`}
      style={{
        width: size,
        height: size,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
}