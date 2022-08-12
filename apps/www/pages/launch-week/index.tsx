import { NextSeo } from 'next-seo'
import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import _days from './days_new_format.json'
import HackathonSection from './HackathonSection'
import LaunchHero from './LaunchHero'
import { LaunchSection } from './LaunchSection'
import PreLaunchTeaser from './PreLaunchTeaser'
import ScheduleInfo from './ScheduleInfo'
import { WeekDayProps } from './types'

const days = _days as WeekDayProps[]

export default function launchweek() {
  const shippingHasStarted = days[0].shipped
  const title = 'Launch Week 5'
  const description = 'Supabase Launch Week 5 | 15-19 Aug 2022'

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title: title,
          description: description,
          url: `https://supabase.com/launch-week`,
          images: [
            {
              url: `https://supabase.com/images/launchweek/og-image.jpg`,
            },
          ],
        }}
      />
      <div className="launch-week-gradientBg"></div>
      <DefaultLayout>
        <SectionContainer className="flex flex-col gap-8  md:gap-16 lg:gap-32">
          <img
            src="/images/launchweek/launchweek-logo--light.svg"
            className="md:40 w-28 dark:hidden lg:w-48"
          />
          <img
            src="/images/launchweek/launchweek-logo--dark.svg"
            className="md:40 hidden w-28 dark:block lg:w-48"
          />
          <LaunchHero />
          {!shippingHasStarted && <PreLaunchTeaser />}
        </SectionContainer>
        <SectionContainer
          className={[
            'grid flex-col gap-24 lg:gap-16',
            !shippingHasStarted && 'lg:grid-cols-2 ',
          ].join(' ')}
        >
          {!shippingHasStarted && <ScheduleInfo />}
          <div>
            {days.map((item: WeekDayProps, i) => {
              return (
                <LaunchSection
                  key={'launchweek-item ' + item.title}
                  {...item}
                  index={i}
                  shippingHasStarted={shippingHasStarted}
                />
              )
            })}
          </div>
        </SectionContainer>
        <SectionContainer>
          <HackathonSection />
        </SectionContainer>
      </DefaultLayout>
    </>
  )
}
