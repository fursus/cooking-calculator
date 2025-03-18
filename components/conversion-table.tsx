import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const VolumeTable = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-6">
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Cups</TableHead>
            <TableHead className="text-center font-bold">Tablespoons</TableHead>
            <TableHead className="text-center font-bold">Teaspoons</TableHead>
            <TableHead className="text-center font-bold">
              Fluid Ounces
            </TableHead>
            <TableHead className="text-center font-bold">Milliliters</TableHead>
            <TableHead className="text-center font-bold">Liters</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>0.5</TableCell>
            <TableCell>8</TableCell>
            <TableCell>48</TableCell>
            <TableCell>4</TableCell>
            <TableCell>118.294</TableCell>
            <TableCell>0.118294</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>16</TableCell>
            <TableCell>96</TableCell>
            <TableCell>8</TableCell>
            <TableCell>236.588</TableCell>
            <TableCell>0.236588</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.5</TableCell>
            <TableCell>24</TableCell>
            <TableCell>144</TableCell>
            <TableCell>12</TableCell>
            <TableCell>354.882</TableCell>
            <TableCell>0.354882</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>32</TableCell>
            <TableCell>192</TableCell>
            <TableCell>16</TableCell>
            <TableCell>473.176</TableCell>
            <TableCell>0.473176</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.5</TableCell>
            <TableCell>40</TableCell>
            <TableCell>240</TableCell>
            <TableCell>20</TableCell>
            <TableCell>591.47</TableCell>
            <TableCell>0.59147</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>48</TableCell>
            <TableCell>288</TableCell>
            <TableCell>24</TableCell>
            <TableCell>709.764</TableCell>
            <TableCell>0.709764</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export const WeightTable = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-6">
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Ounces</TableHead>
            <TableHead className="text-center font-bold">Pounds</TableHead>
            <TableHead className="text-center font-bold">Grams</TableHead>
            <TableHead className="text-center font-bold">Kilograms</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>0.0625</TableCell>
            <TableCell>28.35</TableCell>
            <TableCell>0.02835</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>0.125</TableCell>
            <TableCell>56.7</TableCell>
            <TableCell>0.0567</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>0.1875</TableCell>
            <TableCell>85.05</TableCell>
            <TableCell>0.08505</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>0.25</TableCell>
            <TableCell>113.4</TableCell>
            <TableCell>0.1134</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>0.3125</TableCell>
            <TableCell>141.75</TableCell>
            <TableCell>0.14175</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>0.375</TableCell>
            <TableCell>170.1</TableCell>
            <TableCell>0.1701</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7</TableCell>
            <TableCell>0.4375</TableCell>
            <TableCell>198.45</TableCell>
            <TableCell>0.19845</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>8</TableCell>
            <TableCell>0.5</TableCell>
            <TableCell>226.8</TableCell>
            <TableCell>0.2268</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>9</TableCell>
            <TableCell>0.5625</TableCell>
            <TableCell>255.15</TableCell>
            <TableCell>0.25515</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>10</TableCell>
            <TableCell>0.625</TableCell>
            <TableCell>283.5</TableCell>
            <TableCell>0.2835</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11</TableCell>
            <TableCell>0.6875</TableCell>
            <TableCell>311.85</TableCell>
            <TableCell>0.31185</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12</TableCell>
            <TableCell>0.75</TableCell>
            <TableCell>340.2</TableCell>
            <TableCell>0.3402</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>13</TableCell>
            <TableCell>0.8125</TableCell>
            <TableCell>368.55</TableCell>
            <TableCell>0.36855</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>14</TableCell>
            <TableCell>0.875</TableCell>
            <TableCell>396.9</TableCell>
            <TableCell>0.3969</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>15</TableCell>
            <TableCell>0.9375</TableCell>
            <TableCell>425.25</TableCell>
            <TableCell>0.42525</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>16</TableCell>
            <TableCell>1</TableCell>
            <TableCell>453.6</TableCell>
            <TableCell>0.4536</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export const TemperatureTable = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-6">
      <div className="mx-auto text-center text-xl">
        <p>Formula: (F - 32) * 5/9 = C</p>
      </div>
      <div className="flex justify-center">
        <Table className="w-1/3 mx-auto text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center font-bold">
                Fahrenheit
              </TableHead>
              <TableHead className="text-center font-bold">Celsius</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>32</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>212</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>250</TableCell>
              <TableCell>121</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>275</TableCell>
              <TableCell>135</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>300</TableCell>
              <TableCell>149</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>325</TableCell>
              <TableCell>163</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>350</TableCell>
              <TableCell>177</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>375</TableCell>
              <TableCell>191</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>400</TableCell>
              <TableCell>204</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>425</TableCell>
              <TableCell>221</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>450</TableCell>
              <TableCell>232</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>475</TableCell>
              <TableCell>246</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>500</TableCell>
              <TableCell>260</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
