import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/slice";

  export default function SearchBox() {
   const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
      dispatch(changeFilter(e.target.value));
   };

    return (
      <div className={css.searchBox}>
       <label className={css.label}>
         Find contacts by name:
          <input
           className={css.input}
            type="text"
            value={filter}
           onChange={handleChange}
          />
        </label>
      </div>
    );
    }
