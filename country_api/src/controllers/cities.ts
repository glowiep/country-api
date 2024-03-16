// CRUD operations/queries for cities here
import prisma from "../db";

import { Request, Response } from "express";

interface City {
  id: number;
  name: string;
  area_code: string;
  createdAt: Date;
  updateAt: Date;
}

interface GetAllCitiesResponse {
  data: City[];
}

// GET /api/v1/cities
export const getAllCities = async (
  req: Request<any>,
  res: Response<GetAllCitiesResponse>
) => {
  const cities = await prisma.city.findMany();

  res.json({ data: cities });
};

// GET /api/v1/cities/:id
export const getCityById = async (
  req: Request<{ id: string }>,
  res: Response<{ data: City | null }>
) => {
  const id = Number(req.params.id);
  const city = await prisma.city.findUnique({
    where: {
      id,
    },
  });

  res.json({ data: city });
};

// POST /api/v1/cities
export const createCity = async (
  req: Request<{ name: string; area_code: string }>,
  res: Response<{ data: City }>
) => {
  const city = await prisma.city.create({
    data: {
      name: req.body.name,
      area_code: req.body.area_code,
    },
  });

  res.json({ data: city });
};

// PUT /api/v1/cities/:id
export const updateCity = async (
  req: Request<{ id: any; body: any }>,
  res: Response<{ data: City }>
) => {
  const id = Number(req.params.id);

  const city = await prisma.city.update({
    where: { id },
    data: req.body,
  });

  res.json({ data: city });
};

// POST /api/v1/cities/:id
export const deleteCity = async (
  req: Request<{ id: any }>,
  res: Response<{ data: City }>
) => {
  const id = Number(req.params.id);

  const city = await prisma.city.delete({
    where: { id },
  });

  res.json({ data: city });
};
