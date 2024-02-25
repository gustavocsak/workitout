import Image from "next/image";
import WorkoutSelect from '@/components/workout-select'
import Workout from '@/components/workout'

export default function Home() {
  return (
    <main className="px-8 md:px-32 flex min-h-screen flex-col items-center justify-start gap-16">
      <WorkoutSelect />
      <Workout />
    </main>
  );
}
