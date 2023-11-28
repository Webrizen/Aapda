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
        <h1 className='text-5xl font-bold text-center mt-4'>Our Solution</h1>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-3'>
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
          <div className="w-auto p-12 mx-auto grid md:grid-cols-2 grid-cols-1 bg-green-100 rounded-2xl">
            <div className="md:w-full md:pl-6">
              <p className="leading-relaxed text-base">Strategic barriers and guided pathways are established, steering wildlife away from perilous areas. Our approach minimizes human-animal conflict and directs animals back to their habitats post-flood.</p>
              <div className="flex md:mt-4 mt-6">
                <Button>GitHub</Button>
                <Link href='/' className="text-indigo-500 inline-flex items-center ml-4">Learn More
                </Link>
              </div>
            </div>
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-full">Prevention of Wildlife Migration.</h2>
          </div>
          <div className="w-full p-12 mx-auto grid md:grid-cols-1 grid-cols-1 gap-3 bg-indigo-100 rounded-2xl">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-0 md:w-full">Effective Disaster Response.</h2>
            <div className="md:w-full">
              <p className="leading-relaxed text-base">Our satellite-connected boats traverse through waterlogged terrains, even when traditional methods fail. They ensure that the most isolated communities receive the help they need.</p>
              <div className="flex md:mt-4 mt-6">
                <Button>GitHub</Button>
                <Link href='/' className="text-indigo-500 inline-flex items-center ml-4">Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font" id='teams'>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our team at Aapda is in the exciting development phase of a pioneering solution aimed at environmental and wildlife conservation. We are integrating cutting-edge technologies like AI, satellite imagery, and drone technology to create a multifaceted platform.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Ashmita Dibragede</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Saksham Agarwalla</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Dibyajyoti Das</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Sparsha Haloi</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Arshahdul Ahmed</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Vishal Kumar Jha</h2>
                    <p className="text-gray-500">Member</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                    <p className="text-gray-500">QA Engineer</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                    <p className="text-gray-500">System</p>
                  </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                    <p className="text-gray-500">Product Manager</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
