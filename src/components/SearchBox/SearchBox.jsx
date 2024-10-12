import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";
import { getFilter } from "../../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const inputId = useId();
  const onChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
        id={inputId}
      ></input>
    </div>
  );
}
