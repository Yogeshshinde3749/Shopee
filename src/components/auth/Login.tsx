'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { BiLoaderAlt } from 'react-icons/bi'

import '../../styles/login.scss' // You can keep this for custom Bootstrap overrides

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Login attempt:', formData)
      router.push('/')
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-gradient">Shopee</h1>
            <h2 className="h4 mb-3">Sign in to your account</h2>
            <p className="text-muted">
              Or{' '}
              <Link href="/register" className="text-primary fw-semibold">
                create a new account
              </Link>
            </p>
          </div>

          <div className="card shadow-sm border-0 p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <div className="input-group">
                  <span className="input-group-text"><HiOutlineMail /></span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><RiLockPasswordLine /></span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me">Remember me</label>
                </div>
                <Link href="/forgot-password" className="text-primary fw-semibold">Forgot password?</Link>
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading && <BiLoaderAlt className="me-2 spinner-border spinner-border-sm" />}
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </form>

            <div className="text-center my-3 text-muted">Or continue with</div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
                <FaGoogle className="me-2 text-danger" /> Google
              </button>
              <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
                <FaFacebookF className="me-2 text-primary" /> Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
