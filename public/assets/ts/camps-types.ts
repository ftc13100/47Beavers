import { z } from 'zod';
import campsData from '../camps.json';

export const CampsValidator = z.object({
    topic: z.string(),
    camps: z.object({
        name: z.string(),
        description: z.string(),
        sessions: z.object({
            number: z.number(),
            duration: z.string(),
        }),
        length: z.string(),
        time: z.string(),
    }).array(),
});

const camps = CampsValidator.parse(campsData);