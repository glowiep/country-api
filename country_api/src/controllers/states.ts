// CRUD operations/queries for states here
import prisma from "../db";
import { Request, Response } from "express";

interface State {
  id: number;
  name: string;
  code: string;
  createdAt: Date;
  updateAt: Date;
}

interface GetAllStateResponse {
  data: State[];
}

// GET /api/v1/states
export const getAllStates = async (
  req: Request<any>,
  res: Response<GetAllStateResponse>
) => {
  const states = await prisma.state.findMany({
    include: {
      cities: {
        include: {
          city: {
            select: {
              name: true, 
              area_code: true
            }
          }
        }
      }
    }
  });

  res.json({ data: states });
};

// GET /api/v1/states/:id
export const getStateById = async (
  req: Request<{ id: string }>,
  res: Response<{ data: State | null }>
) => {
  const id = Number(req.params.id);
  const state = await prisma.state.findUnique({
    where: {
      id,
    },
  });

  res.json({ data: state });
};

// POST /api/v1/states
export const createState = async (
  req: Request<{ body: { name: string; code: string } }>,
  res: Response<{ data: State }>
) => {
  const state = await prisma.state.create({
    data: {
      name: req.body.name,
      code: req.body.code,
    },
  });

  res.json({ data: state });
};

// PUT /api/v1/states/:id
export const updateState = async (
  req: Request<{ id: string }>,
  res: Response<{ data: State }>
) => {
  const id = Number(req.params.id);

  const state = await prisma.state.update({
    where: { id },
    data: req.body,
  });

  res.json({ data: state });
};

// POST /api/v1/states/:id
export const deleteState = async (
  req: Request<{ id: string }>,
  res: Response<{ data: State }>
) => {
  const id = Number(req.params.id);

  const state = await prisma.state.delete({
    where: { id },
  });

  res.json({ data: state });
};
