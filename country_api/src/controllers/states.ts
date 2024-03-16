import prisma from "../db";

// CRUD operations/queries for states here
export const getAllStates = async (req, res) => {
  const states = await prisma.state.findMany();

  res.json({ data: states });
}
export const getStateById = (req, res) => {}
export const createState = (req, res) => {}
export const updateState = (req, res) => {}
export const deleteState = (req, res) => {}