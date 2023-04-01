const getAccessToken = () => {
  const accessToken = localStorage.getItem('access-token')
  return accessToken
}

const setAccessToken = (newAccessToken) => {
  localStorage.setItem('access-token', newAccessToken)
}

export {
  getAccessToken,
  setAccessToken
}