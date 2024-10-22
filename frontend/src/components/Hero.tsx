import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import mockupImage from "../assets/home.png";

export const Hero: React.FC = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center gap-10"> {/* Reduced padding */}
      {/* Left side: Text and Call-to-Action buttons */}
      <div className="text-center lg:text-start space-y-6"> {/* Adjusted padding on the text side */}
        <main className="text-5xl md:text-8xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text opacity-110">
              Navigate   
            </span>{" "}
            life,{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text opacity-110">
                Confidently
              </span>
            </h2>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          BlindSafe is your personal guide to independence, transforming how the visually impaired interact with the world. From navigating public transport to identifying medications, detecting falls, and assessing injuries, we blend cutting-edge technology with intuitive design to empower every journey you take.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right side: Mockup image with even larger size */}
      <div className="z-10 relative">
        {/* Mockup Image */}
        <div className="relative w-full w-[800px] mx-auto rounded-xl">
          <img src={mockupImage} alt="App Mockup" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};
