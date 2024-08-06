import * as React from 'react';

import Footer from '@/layout/footer';
import { LayoutProps } from '@/types/layout';

export default function Layout({
  children,
  withFooter,
}: LayoutProps) {
  return (
    <>
      {children}
      {withFooter && <Footer />}
    </>
  );
}
