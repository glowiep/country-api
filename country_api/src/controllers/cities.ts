// CRUD operations/queries for cities here
import prisma from "../db";

// GET /api/v1/cities
export const getAllCities = async (
  req: any,
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        area_code: string;
        createdAt: Date;
        updateAt: Date;
      }[];
    }) => void;
  }
) => {
  const cities = await prisma.city.findMany();

  res.json({ data: cities });
};

// GET /api/v1/cities/:id
export const getCityById = async (
  req: { params: { id: string } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        area_code: string;
        createdAt: Date;
        updateAt: Date;
      } | null;
    }) => void;
  }
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
  req: { body: { name: string; area_code: string } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        area_code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
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
  req: { params: { id: any }; body: any },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        area_code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
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
  req: { params: { id: any } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        area_code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
) => {
  const id = Number(req.params.id);

  const city = await prisma.city.delete({
    where: { id },
  });

  res.json({ data: city });
};
