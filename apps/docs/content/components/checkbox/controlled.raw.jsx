import {Checkbox} from "@heroui/react";

export default function App() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        Subscribe (controlled)
      </Checkbox>
      <p className="text-default-500">Selected: {isSelected ? "true" : "false"}</p>
    </div>
  );
}
