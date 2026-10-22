import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactPage() {
  const [name, setName] = useState<string>('')
  const [sent, setSent] = useState<boolean>(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section>
        <h1>Thank you, {name}!</h1>
        <p>Your message was received.</p>
      </section>
    )
  }

  return (
    <section>
      <h1>Contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Message
          <textarea rows={4} required />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
