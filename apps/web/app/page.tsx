'use client';

import Layout from '@web/components/layout/sectionLayout';
import { NAV_MENU_LIST } from '@web/constants/navmenu';
import { MenuItem } from '@web/types/nav.types';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {NAV_MENU_LIST.map((item: MenuItem, index) => {
        return (
          <Layout key={index} id={item.id}>
            {item.component}
          </Layout>
        );
      })}
    </Suspense>
  );
}

export default Page;
