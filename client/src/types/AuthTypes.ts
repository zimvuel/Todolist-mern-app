export interface RegisterParams {
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export interface RegisterData {
  username: string,
  email: string,
  password: string,
}

export interface LoginParams {
  identifier: string,
  password: string,
}