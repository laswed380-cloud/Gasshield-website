import type { ReactNode } from "react";

export const metadata = {
  title: "Gas Shield Solutions — Alternative Fuel for Indian Businesses",
  description: "India's alternative energy platform. We convert existing LPG stoves to alternative fuels and guarantee supply within 72 hours. Serving restaurants, hotels, factories, and hospitals in Bangalore.",
  keywords: "alternative fuel, LPG replacement, CNG, CBG, ethanol, biomass, Bangalore, commercial cooking fuel, industrial fuel",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
