'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Calendar } from 'primereact/calendar'
import { Dropdown } from 'primereact/dropdown'

import { BiLoaderAlt } from 'react-icons/bi'
import { HiOutlineMail, HiOutlineUser, HiOutlinePhone } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FaGoogle, FaFacebookF, FaCity } from 'react-icons/fa'
import { GiModernCity } from 'react-icons/gi'
import { MdOutlineLocationOn } from 'react-icons/md'

import '../../styles/login.scss'

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
]

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    dob: null,
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

 const handleSubmit = async (e: any) => {
  e.preventDefault()
  // setIsLoading(true)
  console.log(formData,"Check data")

  // try {
  //   const response = await fetch('http://192.168.220.218:8090/api/users/register', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })

  //   if (!response.ok) {
  //     throw new Error('Registration failed')
  //   }

  //   const data = await response.json()
  //   console.log('Registration successful:', data)
  //   // Redirect or show success message
  //   // router.push('/login') // Uncomment if you want to navigate to login

  // } catch (err) {
  //   console.error('Submit failed', err)
  //   alert('Registration failed. Please try again.')
  // } finally {
  //   setIsLoading(false)
  // }
}


  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-gradient">Shopee</h1>
            <h2 className="h4 mb-3">Create your account</h2>
            <p className="text-muted">
              Already have an account?{' '}
              <Link href="/login" className="text-primary fw-semibold">
                Sign in
              </Link>
            </p>
          </div>

          <div className="card shadow-sm border-0 p-4">
            <form onSubmit={handleSubmit}>
              {/* First Name */}
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <div className="input-group">
                  <span className="input-group-text"><HiOutlineUser /></span>
                  <InputText name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* Last Name */}
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <div className="input-group">
                  <span className="input-group-text"><HiOutlineUser /></span>
                  <InputText name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <Dropdown
                  value={formData.gender}
                  options={genders}
                  onChange={(e) => setFormData({ ...formData, gender: e.value })}
                  placeholder="Select Gender"
                  className="w-100"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><HiOutlineMail /></span>
                  <InputText type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><RiLockPasswordLine /></span>
                  <Password name="password" value={formData.password} onChange={handleChange} className="form-control w-100" toggleMask required />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <Calendar
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.value })}
                  className="w-100"
                  showIcon
                  dateFormat="yy-mm-dd"
                  required
                />
              </div>

              {/* Mobile */}
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <div className="input-group">
                  <span className="input-group-text"><HiOutlinePhone /></span>
                  <InputText name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <div className="input-group">
                  <span className="input-group-text"><MdOutlineLocationOn /></span>
                  <InputText name="address" value={formData.address} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* City */}
              <div className="mb-3">
                <label className="form-label">City</label>
                <div className="input-group">
                  <span className="input-group-text"><GiModernCity /></span>
                  <InputText name="city" value={formData.city} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* State */}
              <div className="mb-3">
                <label className="form-label">State</label>
                <div className="input-group">
                  <span className="input-group-text"><FaCity /></span>
                  <InputText name="state" value={formData.state} onChange={handleChange} className="form-control" required />
                </div>
              </div>

              {/* Pincode */}
              <div className="mb-3">
                <label className="form-label">Pincode</label>
                <InputText name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" required />
              </div>

              {/* Submit */}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                  {isLoading && <BiLoaderAlt className="me-2 spinner-border spinner-border-sm" />}
                  {isLoading ? 'Signing in...' : 'Sign In'}
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

export default Register
