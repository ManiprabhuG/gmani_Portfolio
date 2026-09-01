# Amazon Q AI Agent Instructions

## Task
Create a **Contact Form** for my portfolio website.

When a visitor fills out the contact form and clicks the **Submit** button, the application should automatically generate a professional email body using the submitted information.

---

## Contact Form Fields

The form should contain the following input fields:

- Full Name (Required)
- Email Address (Required)
- Phone Number (Optional)
- Company Name (Optional)
- Subject (Required)
- Message (Required)

---

## Validation Rules

- Full Name cannot be empty.
- Email must be in a valid email format.
- Subject cannot be empty.
- Message cannot be empty.
- Show user-friendly validation messages.
- Prevent submission if required fields are missing.

---

## On Submit

After the user clicks **Submit**:

1. Validate all required fields.
2. Generate a professional email template.
3. Display the generated email preview.
4. Prepare the email data for sending via an email service (SMTP, EmailJS, AWS SES, Resend, Nodemailer, etc.).
5. Clear the form after successful submission (optional).

---

## Email Configuration

### Recipient

Use the portfolio owner's email address.

Example:

```
To: your-email@example.com
```

### Subject Format

```
New Portfolio Contact - {{Subject}}
```

Example:

```
New Portfolio Contact - Website Development Inquiry
```

---

## Email Body Template

```
Hello,

You have received a new contact request from your portfolio website.

----------------------------------------
CONTACT DETAILS
----------------------------------------

Full Name:
{{Full Name}}

Email:
{{Email}}

Phone Number:
{{Phone Number}}

Company:
{{Company Name}}

Subject:
{{Subject}}

----------------------------------------
MESSAGE
----------------------------------------

{{Message}}

----------------------------------------

Please respond to this inquiry as soon as possible.

Regards,

Portfolio Contact Form
```

---

## HTML Email Version

Generate an HTML email with:

- Professional layout
- Responsive design
- Card-style container
- Section headings
- Labels in bold
- Proper spacing
- Clean typography

Include:

- Contact Information section
- Message section
- Footer

---

## Success Message

After successful submission display:

```
Thank you for contacting me!

Your message has been successfully submitted.
I will get back to you as soon as possible.
```

---

## Error Message

If sending fails:

```
Something went wrong while sending your message.

Please try again later.
```

---

## Code Requirements

- Use clean and modular code.
- Separate UI, validation, and email generation logic.
- Follow best coding practices.
- Make the email template reusable.
- Escape user input to prevent HTML injection.
- Trim whitespace from all inputs.
- Handle optional fields gracefully (display "Not Provided" if empty).

---

## Security

- Never expose SMTP credentials in frontend code.
- Use environment variables for secrets.
- Validate data on both client and server.
- Sanitize all user input.
- Protect against XSS and injection attacks.

---

## Expected Output Example

### Form Input

Name:
John Doe

Email:
john@example.com

Phone:
+1 9876543210

Company:
ABC Technologies

Subject:
Portfolio Website Development

Message:
Hi, I would like to discuss a website development project.

---

### Generated Email

Subject

```
New Portfolio Contact - Portfolio Website Development
```

Body

```
Hello,

You have received a new contact request from your portfolio website.

CONTACT DETAILS

Full Name:
John Doe

Email:
john@example.com

Phone Number:
+1 9876543210

Company:
ABC Technologies

Subject:
Portfolio Website Development

MESSAGE

Hi, I would like to discuss a website development project.

Regards,

Portfolio Contact Form
```

---

## Goal

The contact form should automatically transform user input into a professional, well-formatted email that is ready to send to the portfolio owner's inbox, ensuring a clean user experience, secure handling of data, and maintainable code architecture.