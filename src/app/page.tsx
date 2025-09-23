import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-semibold text-green-400">
      <Button size="lg" variant="custom" color="">Click Me!!</Button>
    </div>
  );
}
