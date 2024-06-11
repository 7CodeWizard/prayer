const auth = {
    isAuthenticated() {
        if (typeof window === "undefined")
            return false

        if (sessionStorage.getItem('jwt'))
            return JSON.parse(sessionStorage.getItem('jwt'))
        else
            return false
    },
    authenticate(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
        const event = new CustomEvent('sessionStorageChange', {
            detail: { key, value },
        });
        window.dispatchEvent(event);
    },
}

export default auth