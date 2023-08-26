import Analytics from '@web/components/Analytics';
import { pretendard } from '@web/styles/fonts';
import clsx from 'clsx';
import '@web/styles/index.scss';
import { Providers } from './providers';
import { Metadata } from 'next';
// import NavMenu from "@web/components/Menu";
export const metadata: Metadata = {
  title: 'CMS 📝',
  description: 'cms',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body style={pretendard.style} className={clsx('body')}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
