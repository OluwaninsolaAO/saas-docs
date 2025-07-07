import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Roskwood SaaS Manuals',
    default: 'Roskwood SaaS Manuals',
  },
  description:
    'The Rokswood Group offers a range of intelligent IoT meters designed to accurately measure your consumption of various utilities, including water, gas, and electricity. Our meters provide real-time insights and convenient management of your utility services.',
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = <Navbar logo={<b>Rokswood SaaS Manuals</b>} />;
// const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/rokswood-group/saas-docs/tree/main/docs"
          // footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
