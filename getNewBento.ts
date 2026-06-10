const apiUrl =
  "https://opbento.vercel.app/api/bento?n=Boussad%20Ait%20Djoudi&g=BOUSSADAIT0&l=boussad-ait-djoudi-oufella&i=https%3A%2F%2Fgithub.com%2FBOUSSADAIT0.png&z=bdait";

interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-expect-error apiUrl is defined above
await fetchBentoUrl(apiUrl);
