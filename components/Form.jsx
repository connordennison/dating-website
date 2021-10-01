import { useState } from 'react';

const Form = () => {
  const [nameState, setnameState] = useState('')
  const [emailState, setemailState] = useState('')
  const [messageState, setmessageState] = useState('')
  return (
    <div>
      <form onSubmit={async (e) => {
        e.preventDefault()
        try {
          const res = await fetch('/api/entries/push', {
            'method': 'POST',
            'headers': {
              'Content-Type': 'application/json'
            },
            'body': JSON.stringify({
              name: nameState,
              email: emailState,
              message: messageState,
            })
          })
          if (res.status == 200) {
            alert(`Submission sent! It may take up to ${Math.round(Math.random() * 23)} year(s) for your entry to be approved.`)
          } else {
            alert('Failed to send submission, please try again later.')
          }
          setnameState('')
          setemailState('')
          setmessageState('')
        } catch (err) {
          console.error(err)
        }
        }}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' className='input name' name='name' placeholder='John Doe' autoComplete='off' required={true} onChange={(e) => setnameState(e.target.value)} value={nameState} />
        <label htmlFor='email'>Email (optional, will be shown publicly): </label>
        <input type='email' id='email' className='input email' name='email' placeholder='me@cnnd.co.uk' required={false} onChange={(e) => setemailState(e.target.value)} value={emailState} />
        <label htmlFor='message'>Reason: </label>
        <textarea name='message' className='input textarea' placeholder='My 250 character or less great reason to date Connor' autoComplete='off' maxLength={250} required={true} onChange={(e) => setmessageState(e.target.value)} value={messageState} />
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default Form
