interface TimelineProps {
  time: string;
  title: string;
  description: string;
  marksAllocated: string;
  progressPercentage: number;
}

const timelineItems: TimelineProps[] = [
  {
    time: "February 2024",
    title: "Project Proposal (Presentation + Proposal Report)",
    description:
      "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
    marksAllocated: "12%",
    progressPercentage: 12,
  },
  {
    time: "May 2024",
    title: "Progress Presentation 01",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    marksAllocated: "15%",
    progressPercentage: 27,
  },
  {
    time: "June 2024",
    title: "Research Paper Submission",
    description:
      "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
    marksAllocated: "10%",
    progressPercentage: 37,
  },
  {
    time: "August 2024",
    title: "Final Reports (Thesis)",
    description:
      "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
    marksAllocated: "19%",
    progressPercentage: 56,
  },
  {
    time: "September 2024",
    title: "Progress Presentation - 2",
    description:
      "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
    marksAllocated: "18%",
    progressPercentage: 74,
  },
  {
    time: "May and September 2024",
    title: "Status Documents 1 & 2",
    description:
      "Compiled and submitted Status Documents detailing completed tasks, project milestones, and next steps.",
    marksAllocated: "2%",
    progressPercentage: 76,
  },
  {
    time: "October 2024",
    title: "Log Books",
    description:
      "Status of the project is validated through the Logbook.",
    marksAllocated: "2%",
    progressPercentage: 78,
  },
  {
    time: "October 2024",
    title: "Final Presentation + Viva",
    description:
      "Viva is held individually to assess each members contribution to the project.",
    marksAllocated: "20%",
    progressPercentage: 98,
  },
  {
    time: "October 2024",
    title: "Website Development",
    description:
      "Developed a responsive website, focusing on user experience, design consistency, and mobile optimization.",
    marksAllocated: "2%",
    progressPercentage: 100,
  },
];

export const Milestone = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <p className="text-muted-foreground text-xl mt-4  ">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Milestones{" "}
            </span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Timeline in{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Brief
            </span>
          </h2>


          <div className="lg:w-3/4 w-full relative border-l-2 border-gray-300 pl-8 mx-auto" >
            {timelineItems.map((item, index) => (
              <div key={index} className="mb-10 ml-8">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
                <time className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.time}
                </time>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-md text-gray-700 mb-2">{item.description}</p>
                <div className="text-sm font-semibold">
                  Marks Allocated: {item.marksAllocated}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${item.progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-xs font-semibold text-gray-500 mt-1">
                  {item.progressPercentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
