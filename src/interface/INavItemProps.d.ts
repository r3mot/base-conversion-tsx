/**
 * Interface for Button Component
 * @member {string} name - name of the item
 * @member {string} id - id of the item
 * @member {CSSModuleClass} iconStyle - optional custom styles
 */
interface INavItemProps {
  name: string;
  id: string;
  index: number;
  iconStyle?: CSSModuleClass;
}
