export type Props = {
  data: string[];
  label: string;
  selected?: string;
  onClick: (data: string | any) => void;
  side?: "left" | "right";
};
