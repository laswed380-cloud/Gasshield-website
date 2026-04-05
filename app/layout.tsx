import type { ReactNode } from "react";

export const metadata = {
  title: "Gas Shield Solutions — Alternative Fuel Engineering for Indian Industry",
  description: "India's alternative energy engineering platform. We convert commercial and industrial LPG systems to CNG, CBG, ethanol, methanol, and biomass — with guaranteed supply commissioning within 72 hours. Serving Bangalore and expanding nationwide.",
  keywords: "alternative fuel engineering, LPG conversion, CNG, CBG, ethanol, biomass boiler, methanol burner, Bangalore, commercial cooking fuel, industrial fuel, energy transition India",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
