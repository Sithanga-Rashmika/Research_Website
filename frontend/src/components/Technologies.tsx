import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: "python.png",
    title: "Python",
    description:
      "Used for backend scripting, data processing, and model training.",
  },
  {
    icon: "react.png",
    title: "React Native",
    description: "For building the cross-platform mobile application.",
  },
  {
    icon: "tensorflow.png",
    title: "Tensorflow",
    description: "Used to train and deploy machine learning models.",
  },
  {
    icon: "keras.png",
    title: "Keras",
    description:
      "For designing neural networks in your machine learning tasks.",
  },
  {
    icon: "firebase.png",
    title: "Firebase",
    description:
      "Handles real-time database, authentication, backend services, and secure image storage seamlessly.",
  },
  {
    icon: "yolo.jpeg",
    title: "Yolo",
    description: "Object detection model used for recognizing objects.",
  },
  {
    icon: "googlecloud.png",
    title: "Google Cloud",
    description:
      "Provides cloud computing resources for hosting the backend and model.",
  },
  {
    icon: "ocr.jpeg",
    title: "OCR",
    description: "Extracts text from medicine strips and other images.",
  },
  {
    icon: "pytorch.png",
    title: "Pytorch",
    description: "Another deep learning framework used for model training.",
  },
  {
    icon: "ardiuno.png",
    title: "Ardiuno",
    description: "Controls the hardware in the wearable device.",
  },
  {
    icon: "flask.jpeg",
    title: "Flask",
    description:
      "Lightweight Python web framework used to serve the model backend.",
  },
  {
    icon: "map.jpg",
    title: "Google Map Api",
    description: "Provides navigation and location services.",
  },
  {
    icon: "twilio.jpeg",
    title: "Twilio Api",
    description: "Enables SMS notifications for provide alerts.",
  },
];

export const Technologies = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Technologies{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Used{" "}
        </span>
        For BlindSafe
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <img
                  src={`http://localhost:5173/images/${icon}`}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    width: "150px",
                    height: "150px",
                  }}
                />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
