import {
  contactPreferences,
  getServiceLabel,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getContactPreferenceLabel(value: string): string {
  return (
    contactPreferences.find((preference) => preference.value === value)?.label ??
    value
  );
}

export function getNotificationSubject(name: string): string {
  return `New die enquiry from ${name}`;
}

export function renderContactNotificationHtml(
  data: ContactFormValues
): string {
  const submittedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const rows: Array<{ label: string; value: string }> = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
  ];

  if (data.company) {
    rows.push({ label: "Company", value: data.company });
  }

  rows.push({ label: "Die type", value: getServiceLabel(data.service) });
  rows.push({
    label: "Preferred contact",
    value: getContactPreferenceLabel(data.contactPreference),
  });

  if (data.message) {
    rows.push({ label: "Message", value: data.message });
  }

  const rowsHtml = rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #eee;font-size:13px;color:#666;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #eee;font-size:14px;color:#1a1a1a;">${escapeHtml(
            value
          ).replace(/\n/g, "<br />")}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #eaeaea;">
            <tr>
              <td style="background-color:#1a1a1a;padding:24px 32px;">
                <h1 style="margin:0;font-size:18px;color:#ffffff;font-weight:600;">New Quote Request</h1>
                <p style="margin:4px 0 0;font-size:13px;color:#bbbbbb;">${escapeHtml(
                  siteConfig.name
                )} website</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 24px;border-top:1px solid #eee;">
                <p style="margin:0;font-size:12px;color:#999999;">Submitted on ${escapeHtml(
                  submittedAt
                )} (IST)</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function renderContactNotificationText(
  data: ContactFormValues
): string {
  const lines = [
    `New quote request from ${siteConfig.name} website`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
  ];

  if (data.company) {
    lines.push(`Company: ${data.company}`);
  }

  lines.push(`Die type: ${getServiceLabel(data.service)}`);
  lines.push(
    `Preferred contact: ${getContactPreferenceLabel(data.contactPreference)}`
  );

  if (data.message) {
    lines.push("", "Message:", data.message);
  }

  return lines.join("\n");
}
