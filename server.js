import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors())
app.use(express.json());

app.get('/api', (_req, res) => {
    return res.json({
        message: "test ok"
    });
    /* return res.status(200).json({
        ok: true,
        message: "test ok"
    }); */
});

app.use((req, res) =>
    res.status(404).send(`Route ${req.method} ${req.path} not found`),
);

app.listen(8080, () => console.log('Listening on :8080...'));
