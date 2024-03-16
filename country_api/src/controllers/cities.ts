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

/**
 * @description Get all cities
 * @route GET /api/v1/cities
 */
export const getAllCities = async (
  req: Request<any>,
  res: Response<GetAllCitiesResponse>
) => {
  const cities = await prisma.city.findMany({
    include: {
      states: {
        include: {
          state: {
            select: {
              name: true,
              code: true
            },
          },
        },
      },
    },
  });

  res.json({ data: cities });
};

/**
 * @description Get a city by ID
 * @route GET /api/v1/cities/:id
 * @param id The ID of the city
 */
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

/**
 * @description Create a new city
 * @route POST /api/v1/cities
 * @param name The name of the city
 * @param code The code of the city
 */
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

/**
 * @description Update a city by ID
 * @route PUT /api/v1/cities/:id
 * @param id The ID of the city to update
 */
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

/**
 * @description Delete a city by ID
 * @route DELETE /api/v1/cities/:id
 * @param id The ID of the city to delete
 */
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
