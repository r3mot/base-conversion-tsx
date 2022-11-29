/**
 * Interface for Button Component
 * @member {string} id - id of the button
 * @member {string} name - name of the button
 * @member {React.MouseEventHandler<HTMLButtonElement>} onClick - onClick event handler
 */
interface IButtonProps {
  id: string;
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
