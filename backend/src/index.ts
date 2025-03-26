import express, { Request, Response } from 'express';
import { recommendedProducts } from './dummyData';
import { featureFlags } from './models/config';

const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());

// 🛠 Admin toggle endpoint
app.post("/admin/toggle-feature", (req: Request, res: Response) => {
  const { feature, enabled } = req.body;

  if (feature in featureFlags) {
    featureFlags[feature as keyof typeof featureFlags] = enabled;
    return res.json({ message: `Feature '${feature}' is now set to ${enabled}` });
  }

  return res.status(400).send("Invalid feature flag");
});

// 🎯 Product recommendation endpoint
app.get("/get-product-recommendations", (_: Request, res: Response) => {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    const shuffledProducts = recommendedProducts
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const randomProducts = shuffledProducts.slice(0, 5);
    return res.json(randomProducts);
  }

  return res.status(500).send('Internal Server Error');
});

app.get("/get-products-by-category", (req: Request, res: Response) => {
  const productType = req.query.productType;
  const products = recommendedProducts.filter((product) => product.productType == productType);
  return res.json(products);
});

// 🚧 Feature-flag protected route
app.get("/unfinished-feature", (_: Request, res: Response) => {
  if (!featureFlags.unfinishedFeature) {
    return res.status(404).send("Feature not Available");
  }

  return res.status(200).json({ message: "Unfinished feature is now active!" });
});

// 🧪 Start server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
