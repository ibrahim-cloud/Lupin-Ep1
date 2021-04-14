export const isAuthenticated = () => {

    const jwt = localStorage.getItem('token');

    if(jwt) {

        return JSON.parse(jwt)

    }

    return false

}


export const isAuthenticatedSuperAdmin = () => {

    const jwtS = localStorage.getItem('is_super_admin');

    if(jwtS) {

        return JSON.parse(jwtS)

    }

    return false

}

