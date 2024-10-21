import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface DocumentProps {
  title: string;
  submittedDate: string;
  type: string;
  status: string;
}

const documents: DocumentProps[] = [
  {
    title: "Topic Assessment",
    submittedDate: "Submitted on 2021/02/25",
    type: "Group",
    status: "Download",
  },
  {
    title: "Project Charter",
    submittedDate: "Submitted on 2021/02/25",
    type: "Group",
    status: "Download",
  },
  {
    title: "Project Proposal",
    submittedDate: "Submitted on 2021/03/22",
    type: "Individual",
    status: "Download",
  },
  {
    title: "Status Documents I",
    submittedDate: "Submitted on 2021/07/05",
    type: "Individual",
    status: "Download",
  },
];

export const Presentation = () => {
  return (
    <section className="container text-center" style={{marginTop:"70px"}} >
      <p className="text-muted-foreground text-xl mt-4  ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Presentations{" "}
        </span>
      </p>
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Project{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Presentations
        </span>
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
        
      >
        {documents.map(
          ({ title, submittedDate, type, status }: DocumentProps) => (
            <Card
              key={title}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                <p>{submittedDate}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{type}</span>
                  <a
                    href="#"
                    className="text-primary font-medium hover:underline"
                  >
                    {status}
                  </a>
                </div>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
