"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type ChartData = {
  timestamp: string;
  price: number;
};

const chartConfig = {
  price: {
    label: "Price (BTC/USD)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Component = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const lastUpdateTime = useRef<number>(0);

  useEffect(() => {
    let socket: WebSocket | null = null;

    try {
      socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

      socket.onopen = () => {
        console.log("WebSocket connection established");
      };

      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          const price = parseFloat(data.p);
          const timestamp = new Date().toLocaleTimeString();
          const currentTime = Date.now();

          if (currentTime - lastUpdateTime.current >= 1000) {
            lastUpdateTime.current = currentTime;
            setChartData((prev) => {
              const updatedData = [...prev, { timestamp, price }];
              return updatedData.length > 10
                ? updatedData.slice(-10)
                : updatedData;
            });
          }
        } catch (messageError) {
          console.error("Error processing WebSocket message:", messageError);
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
    } catch (connectionError) {
      console.error("WebSocket connection error:", connectionError);
    }

    return () => {
      if (socket) {
        socket.close();
        console.log("WebSocket closed");
      }
    };
  }, []);

  const slicedData = chartData.slice(-5); // Slice both price and timestamp data

  return (
    <Card>
      <CardHeader>
        <CardTitle>BTC/USD Live Price</CardTitle>
        <CardDescription>
          Real-time price updates from Binance (1-second throttle)
        </CardDescription>
      </CardHeader>
      <CardContent style={{ height: "300px", width: "100%" }}>
        {slicedData.length === 0 ? (
          <div>Loading data...</div>
        ) : (
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={slicedData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="timestamp"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                interval={0} // Display all ticks
              />
              <YAxis
                domain={[
                  Math.min(...slicedData.map((d) => d.price)) - 1,
                  Math.max(...slicedData.map((d) => d.price)) + 1,
                ]}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="price"
                type="monotone"
                stroke="#007bff"
                strokeWidth={2}
                dot={{ r: 2 }}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Real-time BTC Price Updates <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Displaying the last 5 price updates
        </div>
      </CardFooter>
    </Card>
  );
};

export default Component;
