import React, { useEffect, useMemo, useState } from 'react'

const getUserData = () => fetch('/users.json').then(response => response.json())

export default function BatchUpdating() {
  // const [name, setName] = useState();
  // const [roles, setRoles] = useState();
  // const [roleList, setRoleList] = useState();
  const [info, setInfo] = useState({
    name: "info",
    roles: []
  })
  
  const roleList = useMemo(
    () => Object.keys(info.roles).filter((k) => info.roles[k]), [info.roles])
  
  // const [roleList, setRoleList] = useState();
  // useEffect(() => {
  //     setRoleList(Object.keys(info.roles).filter((k) => {
  //       return info.roles[k]
  //     }))    
  // }, [info.roles])

  const onLoadUser = async () => {
    const data = await getUserData();
    setInfo(data)
  }

  // const onLoadUser = () => {
  //   setName('Test User');
  //   setRoles({
  //     editor: true,
  //     coco: false
  //   })
  // }

  return (
    <div>
      <span>Name: {JSON.stringify(info.name)}</span>
      <span>Roles: {JSON.stringify(info.roles)}</span>
      <span>Role List: {JSON.stringify(roleList)}</span>
      <div>
        <button onClick={onLoadUser}>Load User</button>
      </div>
    </div>
  )
}
