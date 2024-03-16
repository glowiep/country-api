// Boiler plate code to run the seeds
import { PrismaClient } from '@prisma/client';
import { statesData } from './seeds/states';
import { citiesData } from './seeds/cities';

const prisma = new PrismaClient();

async function main() {
  // run the seed query here
  await prisma.state.createMany({
    data: statesData
  });

  await prisma.city.createMany({
    data: citiesData
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });