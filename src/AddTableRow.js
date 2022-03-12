import { useState } from "react"
import NewModal from "./NewModal"

const AddTableRow = (props) => {

    const { data, setData, handleClickCloseAddTableRow } = props

    const [addFormData, setAddFormData] = useState({
        id: "",
        orderNo: "",
        date: "",
        customer: "",
        trackingNo: "",
        consignee: "",
        status: "",
    })

    // input onChange
    const handleAddFormChange = (e) => {
        e.preventDefault()

        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value

        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
    }

    // save button
    const handleClickSaveAddTableRow = () => {

        const newData = {
            id: addFormData.orderNo,
            orderNo: addFormData.orderNo,
            date: addFormData.date,
            customer: addFormData.customer,
            trackingNo: addFormData.trackingNo,
            consignee: addFormData.consignee,
            status: addFormData.status,
        }

        const newAllTheData = [newData, ...data]

        // browser mode, without JSON POST method
        if (addFormData.orderNo != null) {
            setData(newAllTheData)
            handleClickCloseAddTableRow()
        } else {
            alert("Enter the order number.")
        }

    }


    return (
        <>
            { data && <NewModal 
            handleClickCloseAddTableRow={ handleClickCloseAddTableRow } 
            handleClickSaveAddTableRow= { handleClickSaveAddTableRow }
            handleAddFormChange={ handleAddFormChange }
            />}
        </>
    )

}
 
export default AddTableRow