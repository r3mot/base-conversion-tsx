/**
 * Interface for Button Component
 * @member {string} name - name of the button
 * @member {CSSModuleClass} styles - optional custom styles
 * @member {boolean} disabled - optional disabled state
 * @member {React.MouseEventHandler<HTMLButtonElement>} onClick - onClick event handler
 */
interface IButtonProps {
  name: string;
  styles?: CSSModuleClass;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
