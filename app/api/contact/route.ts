import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json()

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Pakollisia kenttiä puuttuu' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"RGT Rakennuspalvelut" <${process.env.ZOHO_EMAIL}>`,
      to: 'info@rgt.fi',
      replyTo: email || undefined,
      subject: `Uusi yhteydenotto - ${service || 'Ei palvelua valittu'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px;">
          <h2 style="color: #000; border-bottom: 3px solid #F5C518; padding-bottom: 12px; margin-bottom: 24px;">
            Uusi yhteydenotto - RGT Rakennuspalvelut
          </h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; width: 140px; font-weight: bold;">Nimi:</td>
              <td style="padding: 10px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Puhelin:</td>
              <td style="padding: 10px 0; color: #111;">${phone}</td>
            </tr>
            ${email ? `<tr>
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Sahköposti:</td>
              <td style="padding: 10px 0; color: #111;">${email}</td>
            </tr>` : ''}
            ${service ? `<tr>
              <td style="padding: 10px 0; color: #666; font-weight: bold;">Palvelu:</td>
              <td style="padding: 10px 0; color: #111;">${service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #666; font-weight: bold; vertical-align: top;">Viesti:</td>
              <td style="padding: 10px 0; color: #111; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F5C518; color: #000; font-size: 13px;">
            <strong>RGT Rakennuspalvelut</strong> - rgt.fi
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Lahettaminen epaonnistui' }, { status: 500 })
  }
}
