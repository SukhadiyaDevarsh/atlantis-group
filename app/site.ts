/* Public address of the site. Set NEXT_PUBLIC_SITE_URL (e.g. in Vercel) once a custom domain is live. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://atlantis-group-snowy.vercel.app").replace(/\/$/, "");
