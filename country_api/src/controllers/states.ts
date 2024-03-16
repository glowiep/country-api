// CRUD operations/queries for states here
import prisma from "../db";

// GET /api/v1/states
export const getAllStates = async (
  req: any,
  res: { json: (arg: { data: any[] }) => void }
) => {
  const states = await prisma.state.findMany();

  res.json({ data: states });
};

// GET /api/v1/states/:id
export const getStateById = async (
  req: { params: { id: number } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        code: string;
        createdAt: Date;
        updateAt: Date;
      } | null;
    }) => void;
  }
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
  req: { body: { name: string; code: string } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
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
  req: { params: { id: any }; body: any },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
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
  req: { params: { id: any } },
  res: {
    json: (arg0: {
      data: {
        id: number;
        name: string;
        code: string;
        createdAt: Date;
        updateAt: Date;
      };
    }) => void;
  }
) => {
  const id = Number(req.params.id);

  const state = await prisma.state.delete({
    where: { id },
  });

  res.json({ data: state });
};
