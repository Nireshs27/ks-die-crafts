import { z } from "zod";

export const dieOptions = [
  { value: "coin-dies", label: "Coin Dies" },
  { value: "jewellery-dies", label: "Jewellery Dies" },
  { value: "religious-dies", label: "Religious Dies (Vel, Soolam, Thalli)" },
  { value: "ring-dies", label: "Ring Dies" },
  { value: "bangle-dies", label: "Bangle Dies" },
  { value: "pendant-dies", label: "Pendant Dies" },
  { value: "earring-dies", label: "Earring Dies" },
  { value: "chain-dies", label: "Chain Dies" },
  { value: "custom-dies", label: "Custom / Other" },
] as const;

export const contactPreferences = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "phone", label: "Phone" },
  { value: "email", label: "Email" },
] as const;

const serviceValues = dieOptions.map((option) => option.value) as [
  string,
  ...string[],
];

const contactPreferenceValues = contactPreferences.map(
  (preference) => preference.value
) as [string, ...string[]];

const dieLabelByValue = new Map<string, string>(
  dieOptions.map((option) => [option.value, option.label])
);

export function getServiceLabel(value: string): string {
  return dieLabelByValue.get(value) ?? value;
}

const noHtmlChars = (value: string) => !/[<>{}]/.test(value);
const htmlCharsMessage = "Invalid characters in this field";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name is too long (max 100 characters)" })
    .refine(noHtmlChars, { message: htmlCharsMessage }),
  email: z
    .email({ message: "Please enter a valid email address" })
    .trim()
    .max(254, { message: "Email is too long" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Please enter your mobile number" })
    .regex(/^[6-9]\d{9}$/, {
      message: "Enter a valid 10-digit mobile number",
    }),
  company: z
    .string()
    .trim()
    .max(100, { message: "Company name is too long (max 100 characters)" })
    .refine(noHtmlChars, { message: htmlCharsMessage })
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceValues, {
    message: "Please select a die type",
  }),
  contactPreference: z.enum(contactPreferenceValues, {
    message: "Please choose a preferred contact method",
  }),
  message: z
    .string()
    .trim()
    .max(2000, { message: "Message is too long (max 2000 characters)" })
    .refine(noHtmlChars, { message: htmlCharsMessage })
    .optional()
    .or(z.literal("")),
  // Honeypot field. Real users leave this empty.
  botcheck: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;
