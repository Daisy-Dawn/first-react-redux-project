import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const Users = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <main>
        <h2>List of Users:</h2>
        {user.loading && <div>Loading.........</div> }
        {!user.loading && user.error ? <p> {user.error} </p> : null}
        {!user.loading && user.users.length ? <div>
          {user.users.map(user => (
            <ul className='users' key={user.id}>
              <li>Name: {user.name} </li>
              <li>Email:  {user.email} </li>
              <li>Street: {user.address.street}</li>
              <li>City: {user.address.city} </li>
            </ul>
          ))}
        </div> : null}
    </main>
  )
}
