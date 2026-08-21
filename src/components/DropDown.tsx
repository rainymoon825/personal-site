import { useState } from "react";

interface DropDownItem {
  label: string;
  path: string;
}

interface Props {
  label: string;
  items: DropDownItem[];
  onHover: (item: DropDownItem) => void;
}

function DropDown({ label, items, onHover }: Props) {
  const [open, setOpen] = useState(false);
  const handleItemClick = (item: DropDownItem) => {
    onHover(item);
    setOpen(false);
  };

  return (
    <div
      className="dropdown-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="btn btn-secondary dropdown-toggle w-100"
        type="button"
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
