export type SelectProps = {
  variant?: "primary" | "secondary";
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
};

export type OptionProps = {
  value: string;
  text?: string;
};

export type DataMap = {
  [key: string]: string;
};
