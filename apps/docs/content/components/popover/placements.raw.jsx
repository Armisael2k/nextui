import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";

export default function App() {
  const content = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">Popover Content</div>
        <div className="text-tiny">This is the popover content</div>
      </div>
    </PopoverContent>
  );

  const placements = [
    "top-start",
    "top",
    "top-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "right-start",
    "right",
    "right-end",
    "left-start",
    "left",
    "left-end",
  ];

  return (
    <div className="flex flex-wrap md:inline-grid md:grid-cols-3 gap-4">
      {placements.map((placement) => (
        <Popover key={placement} color="secondary" placement={placement}>
          <PopoverTrigger>
            <Button className="capitalize" color="secondary" variant="flat">
              {placement.replace("-", " ")}
            </Button>
          </PopoverTrigger>
          {content}
        </Popover>
      ))}
    </div>
  );
}
