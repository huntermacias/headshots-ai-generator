import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey('G.Yz_Za-_KR56XSkqvsLlf2Q.P0B2dmIWuanEZ7Kx7YKnRYXhym7lMb-9h20o68RX3w4') 

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const supabase = createRouteHandlerClient({ cookies })

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return NextResponse.redirect(`${requestUrl.origin}/login?error=Could not authenticate user`, {
      status: 301,
    })
  }

  if (data) {
    // Construct the welcome email
    const msg = {
      to: email, // Use the email provided by the user
      from: 'cr.leadbird@gmail.com', // Replace with your verified sender email in SendGrid
      subject: 'Welcome to HeadshotHub!',
      text: `Welcome to HeadshotHub, ${email}! We're excited to have you on board.`,
      html: `<strong>Welcome to HeadshotHub, ${email}!</strong> <br/> We're excited to have you on board.`,
    }

    // Send the email
    try {
      await sgMail.send(msg)
      console.log('Welcome email sent successfully')
    } catch (error) {
      console.error('Error sending welcome email:', error)
      // Consider how you want to handle email sending failures. For simplicity, this example logs the error.
    }
  }

  // Redirect to a confirmation page or login page with a success message
  return NextResponse.redirect(`${requestUrl.origin}/login?message=Registration successful. Please log in to continue.`, {
    status: 301,
  })
}
