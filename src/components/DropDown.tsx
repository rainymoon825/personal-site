import { useState } from "react";

interface Props {
  label: string;
  items: string[];
}

function DropDown({ label, items}: Props) {

    const [open, setOpen] = useState(false);

  return (
    <div className={"dropdown-center"}>
      <button
        className="btn btn-secondary dropdown-toggle w-100"
        type="button"
        data-bs-toggle="dropdown"
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>
      
      <ul className={open? "dropdown-menu show w-100" : "dropdown-menu w-100"}>
        {items.map((item, index) => (
          <ul key={index} className={"ps-0"}>
            <a className="dropdown-item" href = "#">{item}</a>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
