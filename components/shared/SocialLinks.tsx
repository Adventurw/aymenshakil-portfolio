import IconButton from "./IconButton";
import { socials } from "@/constants/socials";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <IconButton
            key={social.name}
            href={social.href}
          >
            <Icon size={18} />
          </IconButton>
        );
      })}
    </div>
  );
}