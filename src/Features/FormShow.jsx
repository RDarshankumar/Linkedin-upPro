import React from 'react'

const FormShow = () => {
  return (
    <div>
      <Routes>
          <Route path="/EmployeeForm" element={ <EmployeeSignup />} />
          <Route path="/AgencyForm" element={<AgencyForm/>} />
    </Routes>
    </div>
  )
}

export default FormShow
