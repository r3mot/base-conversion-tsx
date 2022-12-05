interface HiddenLabelProps {
  use: string;
}

/**
 * Accessability label for screen readers
 * @param use - The use of the label
 * @returns
 */
const HiddenLabel = ({ use }: HiddenLabelProps) => {
  return (
    <label
      style={{ display: "none" }}
      htmlFor={use}
      aria-hidden={true}
      aria-label={`hidden label for ${use}`}></label>
  );
};

export { HiddenLabel };
