import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <div className='card'>
        <body>
          

          <div className='card-body'>
            <div>
            {user?.picture && (
            <img className='profile-image' src={user.picture} alt={user?.name} />
          )}
              <h2 className='name'>{user?.name}</h2>
              <div>
                
              <p href="#" className='mail'>{user.email}</p>
              <p class="job">Developer | Designer</p>

              </div>
              
              <div class='social-links'>
                <p href='#' class='fab fa-github social-icon'></p>
                <p href='#' class='fab fa-youtube social-icon'></p>
                <p href='#' class='fab fa-linkedin social-icon'></p>
              </div>
              <div class='card-footer'>
                <p class='count'>
                  <span>120k</span> Followers | <span>10k</span> Following
                </p>
              </div>
            </div>
          </div>
        </body>
      </div>
    )
  )
}

export default Profile
