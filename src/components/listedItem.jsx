
import { useState } from 'react';

interface IlistedItem {
    id: Number,
    name: String,
    unit: String,
    list: Array,
    setList: Function
}

const ListedItem = (props: IlistedItem) => {
    const [open, setOpen] = useState(false)

    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const addOne = () => {
        setOpen(true)
        props.setList(list => [...list, [props.id, "1"]])
    }

    const addThisOne = (value) => {
        delThisOne()
        props.setList(list => [...list, [props.id, value]])
    }

    const delThisOne = () => {
        for(let i = 0; i < props.list.length; i++){
            if(props.list[i][0] === props.id){
                let removedArray = props.list
                removedArray.splice(i, 1)
                props.setList(removedArray)
            }
        }
    }

    const close = () => {
        delThisOne()
        setOpen(false)
    }

  return (
    <>
        <li className={open ? "list-group-item list-group-item-info d-flex justify-content-between" : "list-group-item d-flex justify-content-between"}
        onClick={() => {open ? close() : addOne()}}>
            {capitalize(props.name)} {open ?

                <div onClick={(e) => e.stopPropagation()}><input onChange={(e) => {addThisOne(e.target.value)}} style={{width: "40px"}} type="number" min={1}/>
                    {props.unit !== "" ? props.unit : "ㅤ"}
                </div>

            : ""}
        </li>
          
    </>
  );
}

export default ListedItem;
