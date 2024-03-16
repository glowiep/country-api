-- CreateTable
CREATE TABLE "CityState" (
    "state_id" INTEGER NOT NULL,
    "city_id" INTEGER NOT NULL,

    CONSTRAINT "CityState_pkey" PRIMARY KEY ("state_id","city_id")
);

-- AddForeignKey
ALTER TABLE "CityState" ADD CONSTRAINT "CityState_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityState" ADD CONSTRAINT "CityState_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
