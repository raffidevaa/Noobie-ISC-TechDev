import * as React from 'react';

import Footer from '@/layout/footer';
import Navbar from '@/layout/navbar';

import { LayoutProps } from '@/types/layout';

export default function Layout({
  children,
  withFooter,
  withNavbar,
}: LayoutProps) {
  return (
    <>
      {withNavbar && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </>
  );
}
