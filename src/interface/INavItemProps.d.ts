/**
 * Interface for Button Component
 * @member {string} name - name of the item
 * @member {string} id - id of the item
 * @member {CSSModuleClass} iconStyle - optional custom styles
 */
interface INavItemProps {
  name: string;
  id: string;
  iconStyle?: CSSModuleClass;
  ref: React<HTMLLIElement>;
}

type NavItemProps = {
  props: INavItemProps;
};
