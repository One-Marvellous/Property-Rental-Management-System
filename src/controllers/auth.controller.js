import authService from '../services/auth.service.js';

class AuthController {
  async register(req, res) {
    try {
      const { email, password, firstName, lastName, phoneNumber } = req.body;

      const result = await authService.registerUser({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });

      res.status(201).json(result);
    } catch (error) {
      if (error.message === 'Email already registered') {
        return res.status(409).json({ error: error.message });
      }
      if (error.message === 'Tenant role not found in database') {
        return res.status(500).json({ error: 'System configuration error' });
      }
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const result = await authService.loginUser(email, password);

      res.status(200).json(result);
    } catch (error) {
      if (error.message === 'Invalid credentials') {
        return res.status(401).json({ error: error.message });
      }
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token required' });
      }

      const result = await authService.refreshTokens(refreshToken);

      res.status(200).json(result);
    } catch (error) {
      console.error('Token refresh error:', error);
      res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
  }
}

export default new AuthController();
