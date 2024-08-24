export type SelectProps = {
  variant?: "primary" | "secondary";
  placeholder?: string;
  value?: string;
  children: React.ReactNode;
};

export type OptionProps = {
  value: string;
  text?: string;
};

export type DataMap = {
  [key: string]: string;
};
