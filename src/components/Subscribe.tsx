import React from 'react'

const Subscribe = () => {
  return (
    <div>
          <h1>Contact Us</h1>
          <form 
            name="newsletter" method="POST" 
            data-netlify="true"
            data-netlify-honeypot="bot-field">
              
            <input type="hidden" name="form-name" value="newsletter" />
        
            <div>
              <label>
                Email: <input type="email" name="email"/>
              </label>
            </div>
           
            <div>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
  )
}

export default Subscribe