import express from 'express';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

const app = express();
app.use(express.json());



app.post("/hooks/catch/:userId/:zapId", async (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    // store in db a new trigger
    const result = await client.$transaction(async tx => {
        const run = await client.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });

        const outbox = await client.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
    })
    // push it onto a queue (kafka/ redis)

    res.json(result)
});

app.listen(3000, () => {
    console.log("process started at port 3000");
});