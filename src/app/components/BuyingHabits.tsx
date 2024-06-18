"use client";

import { ResponsiveContainer, Sankey, Tooltip } from "recharts";

const data0 = {
  "nodes": [
    {
      "name": "Buy"
    },
    {
      "name": "Play for at least 2 hours"
    },
    {
      "name": "Play through 50% of the game"
    },
    {
      "name": "Finish the game"
    },
    {
      "name": "Never launch the game"
    }
  ],
  "links": [
    {
      "source": 0,
      "target": 1,
      "value": 25
    },
    {
      "source": 0,
      "target": 2,
      "value": 20
    },
    {
      "source": 0,
      "target": 3,
      "value": 30
    },
    {
      "source": 0,
      "target": 4,
      "value": 25
    },
  ]
};
const BuyingHabits = () => {
  return (
    <div style={{ width: '50%' }} className="flex-child">
      <ResponsiveContainer height={500}>
        <Sankey
          width={960}
          height={500}
          data={data0}
          nodePadding={20}
          margin={{
            left: 200,
            right: 200,
            top: 100,
            bottom: 100,
          }}
          link={{ stroke: "#77c878" }}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
};

export default BuyingHabits