"use server";

import { Resend } from "resend";

import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactFormData, string>>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    projectType: String(formData.get("projectType") ?? ""),
    location: String(formData.get("location") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  /*
   * Honeypot spam protection.
   *
   * Real users never see this field.
   * Bots often fill every available field.
   */
  if (rawData.website.trim() !== "") {
    return {
      success: true,
      message: "Thank you. Your enquiry has been received.",
    };
  }

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    for (const issue of validation.error.issues) {
      const field = issue.path[0] as keyof ContactFormData;

      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }

    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  const data = validation.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");

    return {
      success: false,
      message: "The enquiry service is temporarily unavailable.",
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    console.error("Missing CONTACT_EMAIL");

    return {
      success: false,
      message: "The enquiry service is temporarily unavailable.",
    };
  }

  if (!process.env.RESEND_FROM_EMAIL) {
    console.error("Missing RESEND_FROM_EMAIL");

    return {
      success: false,
      message: "The enquiry service is temporarily unavailable.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || "Not provided");
  const safeProjectType = escapeHtml(data.projectType);
  const safeLocation = escapeHtml(data.location || "Not provided");
  const safeBudget = escapeHtml(data.budget || "Not provided");
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  try {
    /*
     * Email sent to Aureline Studio.
     */
    const studioEmail = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_EMAIL],
      replyTo: data.email,
      subject: `New project enquiry — ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 40px 20px;
              background: #f4f1eb;
              color: #171715;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                background: #ffffff;
                padding: 40px;
              "
            >
              <p
                style="
                  margin: 0 0 30px;
                  color: #8a7560;
                  font-size: 12px;
                  letter-spacing: 3px;
                  text-transform: uppercase;
                "
              >
                Aureline Studio
              </p>

              <h1
                style="
                  margin: 0 0 35px;
                  font-size: 36px;
                  line-height: 1.1;
                  font-weight: 400;
                "
              >
                New Project Enquiry
              </h1>

              <div
                style="
                  border-top: 1px solid #d8d3c9;
                  border-bottom: 1px solid #d8d3c9;
                  padding: 24px 0;
                "
              >
                <p><strong>Name</strong><br />${safeName}</p>

                <p>
                  <strong>Email</strong><br />
                  <a href="mailto:${safeEmail}">${safeEmail}</a>
                </p>

                <p><strong>Phone</strong><br />${safePhone}</p>

                <p>
                  <strong>Project Type</strong><br />
                  ${safeProjectType}
                </p>

                <p>
                  <strong>Project Location</strong><br />
                  ${safeLocation}
                </p>

                <p>
                  <strong>Estimated Budget</strong><br />
                  ${safeBudget}
                </p>
              </div>

              <div style="margin-top: 35px;">
                <p
                  style="
                    margin-bottom: 12px;
                    color: #8a7560;
                    font-size: 12px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                  "
                >
                  Project Message
                </p>

                <p
                  style="
                    margin: 0;
                    color: #6f6b64;
                    font-size: 16px;
                    line-height: 1.8;
                  "
                >
                  ${safeMessage}
                </p>
              </div>

              <p
                style="
                  margin-top: 45px;
                  color: #9a958c;
                  font-size: 12px;
                "
              >
                Reply directly to this email to respond to the enquiry.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (studioEmail.error) {
      console.error("Resend studio email error:", studioEmail.error);

      return {
        success: false,
        message:
          "We could not send your enquiry. Please try again in a moment.",
      };
    }

    /*
     * Confirmation email sent to the visitor.
     *
     * If this fails, the studio enquiry has still been successfully
     * received, so we don't show the visitor an error.
     */
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: [data.email],
        subject: "Thank you for contacting Aureline Studio",
        html: `
          <!DOCTYPE html>
          <html>
            <body
              style="
                margin: 0;
                padding: 40px 20px;
                background: #f4f1eb;
                color: #171715;
                font-family: Arial, Helvetica, sans-serif;
              "
            >
              <div
                style="
                  max-width: 680px;
                  margin: 0 auto;
                  background: #ffffff;
                  padding: 40px;
                "
              >
                <p
                  style="
                    margin: 0 0 30px;
                    color: #8a7560;
                    font-size: 12px;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                  "
                >
                  Aureline Studio
                </p>

                <h1
                  style="
                    margin: 0 0 25px;
                    font-size: 36px;
                    line-height: 1.1;
                    font-weight: 400;
                  "
                >
                  Thank you, ${safeName}.
                </h1>

                <p
                  style="
                    color: #6f6b64;
                    font-size: 16px;
                    line-height: 1.8;
                  "
                >
                  Thank you for reaching out to Aureline Studio. We have
                  received your project enquiry and will review the details
                  carefully.
                </p>

                <p
                  style="
                    color: #6f6b64;
                    font-size: 16px;
                    line-height: 1.8;
                  "
                >
                  We typically respond to new enquiries within 2–3 working
                  days.
                </p>

                <div
                  style="
                    margin-top: 35px;
                    padding-top: 25px;
                    border-top: 1px solid #d8d3c9;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #8a7560;
                      font-size: 12px;
                      letter-spacing: 2px;
                      text-transform: uppercase;
                    "
                  >
                    Aureline Studio
                  </p>

                  <p
                    style="
                      color: #6f6b64;
                      font-size: 14px;
                      line-height: 1.7;
                    "
                  >
                    Interior Architecture &amp; Design
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (confirmationError) {
      console.error(
        "Confirmation email error:",
        confirmationError,
      );
    }

    return {
      success: true,
      message:
        "Thank you. Your enquiry has been received. We will be in touch soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your enquiry. Please try again.",
    };
  }
}