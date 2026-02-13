import './Icon.css';

interface IconProps {
  name: string;
  className?: string;
  'aria-hidden'?: boolean;
  style?: React.CSSProperties;
}

export function Icon({ name, className = '', style, ...props }: IconProps) {
  return (
    <span
      className={`material-icons icon ${className}`.trim()}
      style={style}
      {...props}
    >
      {name}
    </span>
  );
}
