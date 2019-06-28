const axiosConfig = {
    headers: {
       authorization: localStorage.getItem('token')
    }
}

export default axiosConfig;