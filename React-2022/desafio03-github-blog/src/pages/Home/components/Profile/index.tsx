import { ProfileContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface User {
  id: number
  html_url: string
  name: string
  bio: string
  followers: string
  login: string
  company: string
  avatar_url: string
}


export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get('/users/vinicastroo')

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <div>
          <strong>{user.name}</strong>

          <a href={user.html_url}>GitHub <i className="fa-solid fa-arrow-up-right-from-square" /></a>
        </div>
        <p>{user.bio}</p>

        <div>
          <div>
            <i className="fa-brands fa-github" />
            <span>{user.login}</span>
          </div>
          <div>
            <i className="fa-solid fa-building" />
            <span>{user.company}</span>
          </div>
          <div>
            <i className="fa-solid fa-user-group" />
            <span>{user.followers} seguidores</span>
          </div>
        </div>
      </div>
    </ProfileContainer>
  )
}