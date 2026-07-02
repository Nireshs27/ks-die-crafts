import { Button } from "@/components/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { siteConfig } from "@/lib/site";

type WhatsAppLinkProps = {
  size?: "sm" | "md";
  message?: string;
  label?: string;
  className?: string;
};

export function WhatsAppLink({
  size = "md",
  message,
  label = "WhatsApp",
  className,
}: WhatsAppLinkProps) {
  const href = message
    ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <Button href={href} newTab variant="whatsapp" size={size} className={className}>
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </Button>
  );
}
