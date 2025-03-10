import { Button } from "@shadcn/button";
import { APP_NAME } from "@config/appConfig";

export default function Home() {
  return (
    <div>
      <h1>{`Welcome to ${APP_NAME}`}</h1>
      <Button>Subscribe Now</Button>
    </div>
  );
}
