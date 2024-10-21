import mainMenu from "../assets/mainMenu.png";
import feature1 from "../assets/f1.png";
import feature2 from "../assets/f2.png";
import feature3 from "../assets/f3.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={mainMenu}
            alt="BlindSafe App"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                BlindSafe App
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-justify">
                The BlindSafe App integrates advanced technologies aimed at
                promoting independence and safety for visually impaired users.
                It provides features such as fall detection, injury analysis,
                medicine identification, and public transport navigation,
                ensuring that users can confidently navigate through daily
                challenges without external assistance.
              </p>
              {/* Increased size of the images */}
              <div className="flex justify-center gap-4 mt-12">
                <img src={feature1} alt="Feature 1" className="w-96 h-96 object-contain" />
                <img src={feature2} alt="Feature 2" className="w-96 h-96 object-contain" />
                <img src={feature3} alt="Feature 3" className="w-96 h-96 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
