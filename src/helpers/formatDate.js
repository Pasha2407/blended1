import { format } from "date-fns"


const formatDate = (date) => {
    return (
        format(new Date(date), 'Pp', { addSuffix: true })
    )
}

export default formatDate
