import { pretendard } from "@web/styles/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import "../styles/global.css";
import Analytics from "@web/components/Analytics";
import { Container } from "@chakra-ui/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={pretendard.style} className={clsx("body")}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
