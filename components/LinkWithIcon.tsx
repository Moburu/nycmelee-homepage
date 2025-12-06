"use client";

import Link from "next/link";
import { ReactElement } from "react";
import MuiLink from "@mui/material/Link";

interface LinkWithIconProps {
  href: string;
  label: string;
  icon: ReactElement;
  className?: string;
}

export default function LinkWithIcon({
  href,
  label,
  icon,
  className,
}: LinkWithIconProps) {
  return (
    <MuiLink
      component={Link}
      href={href}
      underline="none"
      className={className}
      color="inherit"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        "&:hover": { opacity: 0.8 },
      }}
    >
      {icon}
      {label}
    </MuiLink>
  );
}
