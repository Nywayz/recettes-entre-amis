import { useState } from 'react';
import {IlistedItem} from "./ListedItem";

const useListedItem = (props: IlistedItem) => {
    const [open, setOpen] = useState(false)
    const [currentValue, setCurrentValue] = useState(1)

    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const addOne = () => {
        setOpen(true)
        setCurrentValue(1)
        props.setList(list => [...list, [props.id, "1"]])
        return [props.id, "1"]
    }

    const addThisOne = (value) => {
        delThisOne()
        props.setList(list => [...list, [props.id, value]])
        return list => [...list, [props.id, value]]
    }

    const delThisOne = () => {
        for(let i = 0; i < props.list.length; i++){
            if(props.list[i][0] === props.id){
                let removedArray = props.list
                removedArray.splice(i, 1)
                props.setList(removedArray)
                return "Deleted"
            }
        }
        return "Nothind deleted"
    }

    const close = () => {
        delThisOne()
        setOpen(false)
        return "Closed"
    }

    return {
        open,
        currentValue,
        addOne, close, addThisOne, capitalize, setCurrentValue, delThisOne
    }
}

export default useListedItem;