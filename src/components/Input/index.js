import React, { useState } from 'react'
import { Button, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap'


const InputNormal = ({ value, title, icon, onChange }) => (
  <FormGroup>
    <InputGroup className="input-group-alternative">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={icon} />
        </InputGroupText>
      </InputGroupAddon>
      <Input value={value} placeholder={title} type={title === 'Email' ? 'email' : 'text'} onChange={onChange} required />
    </InputGroup>
  </FormGroup>
)

const InputPassword = ({ onChange }) => {

  const [flag, setFlag] = useState(false)

  return (
    <FormGroup>
      <InputGroup className="input-group-alternative">
        <InputGroupAddon addonType="prepend">
          <InputGroupText onClick={() => { setFlag(!flag) }}>
            <i className='ni ni-lock-circle-open' />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder='password' type={!flag ? 'password' : 'text'} autoComplete="off" onChange={onChange} required />
      </InputGroup>
    </FormGroup>
  )
}

const TextArea = () => (
  <>
    <textarea placeholder='Summary' className='textarea'>
    </textarea>
    <Button color='danger'>Send</Button>
  </>
)

export { InputNormal, InputPassword, TextArea }