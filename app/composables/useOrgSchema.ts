import CONSTANTS from "~/constants";

export function useOrgSchema() {
      return {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": CONSTANTS.APP_URL + "/#organization",

            name: CONSTANTS.APP_NAME,

            url: CONSTANTS.APP_URL,

            logo: CONSTANTS.APP_URL + "/icon-512.png",

            description: "Softview Ghana builds custom software, web applications, mobile apps, cloud solutions, and IT infrastructure for businesses across Ghana and Africa.",

            sameAs: [
                  "https://facebook.com/softviewghana",
                  // "https://linkedin.com/company/softviewghana",
                  "https://youtube.com/@softviewghana",
                  "https://x.com/SoftviewGhana",
                  "https://instagram.com/softviewghana",
            ],
      };
}
