import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { ArrowRightCircleIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen font-english">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <span className="flex items-center gap-4">
        click the toggle theme <ArrowRightCircleIcon /> <ModeToggle />
      </span>
      <div className="mt-4 space-x-6">
        <Button variant="default">Test The Theme :)</Button>
        <Button variant="secondary">Test The Theme :)</Button>
        <Button variant="destructive">Test The Theme :)</Button>
        <Button variant="ghost">Test The Theme :)</Button>
        <Button variant="outline">Test The Theme :)</Button>
        <Button variant="link">Test The Theme :)</Button>
      </div>
    </div>
  );
}
