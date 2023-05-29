import { useParams } from "react-router-dom"

const UserDetails = () => {
    const { id } = useParams()
  return (
    <div>Users Details { id }</div>
  )
}

export default UserDetails