import { BouncyCardsFeatures } from '@/components/BouncyCardsFeatures';
import ShiftingCountdown from '@/components/ShiftingCountdown';
import ShuffleHero from '@/components/ShuffleHero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <ShuffleHero />
    <BouncyCardsFeatures />
    <ShiftingCountdown />
    </>
  )
}
