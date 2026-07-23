export function useJsonLD(schema: object, id?: string) {
  useHead({
    script: [
      {
        id,
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
  });
}
