import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try {
    const { name, email, phone, company, need, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      )
    }

    const response = await resend.emails.send({
      from: 'Orpheon <geral@orpheon.pt>',
      to: 'francisco.s.santos77@gmail.com',
      replyTo: email,
      subject: `Novo contacto: ${name}`,
      html: `
        <h2>Novo contacto recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
        ${need ? `<p><strong>Necessidade:</strong> ${need}</p>` : ''}
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (response.error) {
      return NextResponse.json(
        { error: response.error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Email enviado com sucesso!'
    })
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    )
  }
}