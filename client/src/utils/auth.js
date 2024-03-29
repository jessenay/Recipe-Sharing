class AuthService {
    async decodeToken(token) {
      if (!token) return null;
      const { default: decode } = await import('jwt-decode');
      return decode(token);
    }
  
    async getProfile() {
      const token = this.getToken();
      if (!token) return null;
      return await this.decodeToken(token);
    }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpiredSync(token) {
    return !!token;
  }

  async isTokenExpired(token) {
    try {
      const decoded = await this.decodeToken(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      console.error("Error decoding token:", err);
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
