import constants from '~/constants';

interface BreadcrumbItem {
      name: string;
      url: string;
}

interface PageSeoOptions {
      title: string;
      description: string;
      path: string;
      image?: string;
      breadcrumbs?: BreadcrumbItem[];
}

export function usePageSeo(options: PageSeoOptions) {
      const baseUrl = constants.APP_URL;
      const canonical = `${baseUrl}${options.path}`;
      const image = options.image ?? `${baseUrl}/softviewghana-og-image.png`;

      useSeoMeta({
            title: options.title,
            description: options.description,
            ogType: 'website',
            ogSiteName: 'Softview Ghana',
            ogTitle: options.title,
            ogDescription: options.description,
            ogUrl: canonical,
            ogImage: image,
            twitterCard: 'summary_large_image',
            twitterTitle: options.title,
            twitterDescription: options.description,
            twitterImage: image,
      });

      useHead({
            link: [
                  {
                        rel: 'canonical',
                        href: canonical,
                  },
            ],
      });

      if (options.breadcrumbs && options.breadcrumbs.length > 0) {
            useJsonLD(useBreadcrumbSchema(options.breadcrumbs), `breadcrumb-${options.path}`);
      }
}
