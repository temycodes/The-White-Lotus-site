import Image from "next/image";
import image1 from "@/public/about-1.png";
import image2 from "@/public/about-2.png";
import { getCabins } from "@/app/_lib/data-service";

export const metadata = {
  title: "About Us",
};

export const revalidate = 86400;

export default async function Page() {
  const cabins = await getCabins();
  const numCabins = cabins.length;

  return (
    <div className='grid items-center grid-cols-5 gap-x-24 gap-y-32 text-primary-200'>
      <div className='col-span-3'>
        <h1 className='mb-10 text-4xl font-medium text-accent-400'>Welcome to White Lotus</h1>

        <div className='space-y-8 text-lg leading-relaxed'>
          <p>
            White Lotus is a quiet retreat set among the peaks of the Italian Dolomites. Here, thoughtful design and
            natural beauty come together to create a place for rest, reflection, and presence.
          </p>

          <p>
            Our collection of {numCabins} cabins offers comfort without excess. Each space is designed to feel warm,
            grounded, and open to the landscape around it. Step outside to forest paths, crisp mountain air, and
            evenings shaped by firelight and stillness.
          </p>

          <p>
            This is a place to slow your pace, reconnect with what matters, and share unhurried moments with the people
            you love.
          </p>
        </div>
      </div>

      <div className='col-span-2'>
        <Image
          src={image1}
          alt='Guests gathered around a fire near a cabin at dusk'
          className='rounded-lg opacity-90'
          placeholder='blur'
        />
      </div>

      <div className='col-span-2'>
        <Image src={image2} alt='The family behind White Lotus' className='rounded-lg opacity-90' placeholder='blur' />
      </div>

      <div className='col-span-3'>
        <h2 className='mb-10 text-4xl font-medium text-accent-400'>Family-run since 1999</h2>

        <div className='space-y-8 text-lg leading-relaxed'>
          <p>
            White Lotus has been cared for by our family since 1999. What began as a simple mountain retreat has grown
            gently over generations, shaped by a respect for nature and a belief in genuine hospitality.
          </p>

          <p>
            We remain closely involved in every detail of the experience, from the design of each cabin to the welcome
            you receive on arrival. Our hope is that every stay feels personal, calm, and quietly memorable.
          </p>

          <div>
            <a
              href='/cabins'
              className='inline-block px-8 py-5 mt-4 text-lg font-semibold transition-colors rounded-md bg-accent-500 text-primary-950 hover:bg-accent-600'
            >
              Explore our cabins
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
