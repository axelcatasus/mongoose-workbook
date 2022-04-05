import express, { Request, Response } from 'express'
import {createAnimal, getAnimals, getAnimalById, putAnimal, deleteAnimal} from '../db/animalCrud'


const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const gottenAnimals = await getAnimals();
    res.status(200).json(gottenAnimals);
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const gottenAnimal = await getAnimalById(id);
    res.status(200).json(gottenAnimal);
});

router.post('/', async (req: Request, res: Response) => {
    const createdAnimal = await createAnimal(req.body);
    res.status(201).json(createdAnimal);
});

router.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedAnimal = await putAnimal(id, req.body);
    if (updatedAnimal) {
        const updatedAnimal = await putAnimal(id, req.body);
        res.status(200).json(updatedAnimal);
    } else {
        res.status(404).json({ message: 'Animal not found' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedAnimal = await deleteAnimal(id)
    if (deletedAnimal) {
        res.status(200).json({ message: 'Animal deleted' });
    } else {
        res.status(404).json({ message: 'Animal not found' });
    }
});


export default router