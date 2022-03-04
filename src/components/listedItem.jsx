import useListedItem from "./useListedItem";


export interface IlistedItem {
    id: Number,
    name: String,
    unit: String,
    list: Array,
    setList: Function
}

const ListedItem = (props: IlistedItem) => {
    const {
        open,
        currentValue,
        addOne,
        close,
        addThisOne, capitalize, setCurrentValue
    } = useListedItem(props);

  return (
    <>
        <li className={open ? "list-group-item list-group-item-info d-flex justify-content-between" : "list-group-item d-flex justify-content-between"}
        onClick={() => {open ? close() : addOne()}}>
            {capitalize(props.name)} {open ?

                <div onClick={(e) => e.stopPropagation()}>
                    <input onChange={(e) => {addThisOne(e.target.value); setCurrentValue(e.target.value)}} style={{width: "40px"}} type="number" min={1} value={currentValue}/>
                    {props.unit !== "" ? props.unit : "ㅤ"}
                </div>

            : ""}
        </li>
          
    </>
  );
}

export default ListedItem;
