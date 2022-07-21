import type { NextPage } from 'next';
import { VStack, Image, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  SectionHContainer,
  HomeContainer,
  Text,
  Link,
} from '@src/common/components';
import { GlobalRoute } from '@src/constants/PageRoutes';

const Home: NextPage = () => {
  const { t } = useTranslation('home');
  const head = {
    title: t('common:site.title'),
    metas: [
      {
        name: 'description',
        content: t('common:site.description'),
      },
    ],
    links: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  };

  const heros = [
    {
      title: t('banner.title'),
      subtitle: t('banner.subtitle'),
      cta: t('banner.cta'),
      link: GlobalRoute.Root,
      src: 'assets/heros/shapes.svg',
      alt: t('banner.alt'),
    },
    {
      title: t('custome-profile.title'),
      subtitle: t('custome-profile.subtitle'),
      cta: t('custome-profile.cta'),
      link: GlobalRoute.Root,
      src: 'assets/heros/phone.svg',
      alt: t('custome-profile.alt'),
    },
    {
      title: t('game-status.title'),
      subtitle: t('game-status.subtitle'),
      cta: t('game-status.cta'),
      link: GlobalRoute.Root,
      src: 'assets/heros/squares.svg',
      alt: t('game-status.alt'),
    },
    {
      title: t('share-anywhere.title'),
      subtitle: t('share-anywhere.subtitle'),
      cta: t('share-anywhere.cta'),
      link: GlobalRoute.Root,
      src: 'assets/heros/shapes2.svg',
      alt: t('share-anywhere.alt'),
    },
  ];

  return (
    <HomeContainer head={head}>
      <VStack flex={1} justify="center">
        {heros.map((hero, index) => {
          return (
            <SectionHContainer
              key={index}
              flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
            >
              <VStack alignItems="flex-start" gap="1rem" width="65%">
                <Text type={index === 0 ? 'h1' : 'h2'} color="#F0F435">
                  {hero.title}
                </Text>
                <Text type="h4" color="#F0F435">
                  {hero.subtitle}
                </Text>
                <Link href={hero.link} color="#fff">
                  <Button background="linear-gradient(180deg, #FF3F66 0%, #E75784 100%)">
                    {hero.cta}
                  </Button>
                </Link>
              </VStack>
              <VStack width="35%">
                <Image src={hero.src} alt={hero.alt} />
              </VStack>
            </SectionHContainer>
          );
        })}
      </VStack>
    </HomeContainer>
  );
};

export default Home;
