import React from 'react'

const Subscribe = () => {
  const style = {
    textBlack:{
      color:'black'
    }
  }
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
                Email: <input type="email" name="email" style={style.textBlack}/>
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