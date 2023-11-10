import { BouncyCardsFeatures } from '@/components/BouncyCardsFeatures';
import ShiftingCountdown from '@/components/ShiftingCountdown';
import ShuffleHero from '@/components/ShuffleHero';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <ShuffleHero />
      <BouncyCardsFeatures />
      <ShiftingCountdown />
      <section className="body-font flex flex-col gap-3 min-h-screen md:pt-12 pt-6">
        <h1 className='text-4xl font-bold text-center mt-4'>Our Solution</h1>
        <div className='container mx-auto grid grid-cols-2 gap-3'>
        <div className="w-full p-12 mx-auto grid md:grid-cols-1 grid-cols-1 gap-3 bg-blue-100 rounded-2xl">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-0 md:w-full">Flood-Prone Area Identification.</h2>
          <div className="md:w-full">
            <p className="leading-relaxed text-base">Utilizing satellite imagery, we analyze land patterns and hydrological data to pinpoint potential flood zones. Our AI-driven models, trained on historical data, predict flooding events with remarkable accuracy, allowing for preemptive action to safeguard both land and life.</p>
            <div className="flex md:mt-4 mt-6">
              <Button>GitHub</Button>
              <Link href='/' className="text-indigo-500 inline-flex items-center ml-4">Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto p-12 mx-auto grid md:grid-cols-2 grid-cols-1 bg-orange-100 rounded-2xl">
          <div className="md:w-full md:pl-6">
            <p className="leading-relaxed text-base">We deploy drones equipped with thermal imaging to locate stranded animals. These UAVs are critical in orchestrating precise rescue operations, delivering sustenance, and leading fauna to designated safe zones.</p>
            <div className="flex md:mt-4 mt-6">
              <Button>GitHub</Button>
              <Link href='/' className="text-indigo-500 inline-flex items-center ml-4">Learn More
              </Link>
            </div>
          </div>
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:pl-8 md:w-full">Wildlife Rescue and Relocation.</h2>
        </div>
        </div>
      </section>
    </>
  )
}
