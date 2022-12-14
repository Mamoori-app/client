import { Outlet } from 'react-router-dom';

import { Banner } from '@/components/common/Banner';
import { Tabs } from '@/components/common/Tab';
import { BANNER_IMG_URL } from '@/constants/bannerImage';
import { BANNER } from '@/constants/will';
import { Container } from '@/styles/common';

const TABS = [
  { name: '유서 가이드', link: 'guide' },
  { name: '나의 유서 목록', link: 'list' },
];

export const Will = () => {
  return (
    <>
      <Banner
        mainText={BANNER.main}
        subText={BANNER.sub}
        background={BANNER_IMG_URL.will}
        size="large"
      />
      <Container>
        <Tabs data={TABS} />
        <Outlet />
      </Container>
    </>
  );
};
