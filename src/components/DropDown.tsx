import { useState } from "react";

interface DropDownItem {
  label: string;
  path: string;
}

interface Props {
  label: string;
  items: DropDownItem[];
  onSelect: (item: DropDownItem) => void;
}

function DropDown({ label, items, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const handleItemClick = (item: DropDownItem) => {
    onSelect(item);
    setOpen(false);
  };

  return (
    <div className="dropdown-center">
      <button
        className="btn btn-secondary dropdown-toggle w-100"
        type="button"
        data-bs-toggle="dropdown"
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>

      <ul className={open ? "dropdown-menu show w-100" : "dropdown-menu w-100"}>
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="dropdown-item w-100 text-start"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
