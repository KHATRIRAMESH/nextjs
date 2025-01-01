"use client";

import { useEffect, useState } from "react";
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

// Define the data type for chart entries
type ChartData = {
  timestamp: string;
  price: number;
};

// Initial chart configuration
const chartConfig = {
  price: {
    label: "Price (BTC/USD)",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const Component = () => {
  // State to hold chart data
  const [chartData, setChartData] = useState<ChartData[]>([]);



  useEffect(() => {
    let socket: WebSocket | null = null
  
    try {
      socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade")
  
      socket.onopen = () => {
        console.log("WebSocket connection established")
      }
  
      socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          // console.log(data)
          const price = parseFloat(data.p)
          console.log(price)
          const timestamp = new Date().toLocaleTimeString()
  
          // console.log("Price received:", price)
          // console.log("Timestamp received:", data)
  
          setChartData((prev) => {
            const updatedData = [...prev, { timestamp, price }]
            // console.log("Updated chartData:", updatedData)
            return updatedData.length > 10 ? updatedData.slice(-10) : updatedData
          })
        } catch (messageError) {
          console.error("Error processing WebSocket message:", messageError)
        }
      }
  
      socket.onerror = (error) => {
        console.error("WebSocket error:", error)
      }
  
      socket.onclose = () => {
        console.log("WebSocket connection closed")
      }
    } catch (connectionError) {
      console.error("WebSocket connection error:", connectionError)
    }
  
    return () => {
      if (socket) {
        socket.close()
        console.log("WebSocket closed")
      }
    }
  }, [])
  console.log(chartData)

  return (
    <Card>
      <CardHeader>
        <CardTitle>BTC/USD Live Price</CardTitle>
        <CardDescription>Real-time price updates from Binance</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
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
            />
            <YAxis
              domain={[
                (dataMin) => Math.floor(dataMin - 1),
                (dataMax) => Math.ceil(dataMax + 1),
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
              type="linear"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Real-time BTC Price Updates <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Displaying the last 10 price updates
        </div>
      </CardFooter>
    </Card>
  );
};

export default Component;
