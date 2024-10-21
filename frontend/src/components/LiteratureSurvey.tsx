import React from 'react';

interface LiteratureSurveyProps {
  text: string;
  references: string[];
}

const literatureSurveyData: LiteratureSurveyProps = {
  references: [
    '[1] M. Adedeji, "The Positive Impact of Apple Watch Fall Detection on Elderly Health and Mobility," ResearchGate, 2023.',
    '[2] C. Wang, et al., "Fully automatic wound segmentation with deep convolutional neural networks," Scientific Reports, 2020.',
    '[3] H. Carrión, et al., "Automatic wound detection and size estimation using deep learning algorithms," PLOS Computational Biology, 2022.',
    '[4] C. Costa, et al., "Multimodal Route Planning for Blind and Visually Impaired People," Springer, 2023.',
  ],
  text: 'The "BlindSafe" application integrates advanced technologies to address the challenges faced by the visually impaired community. One of its core features is fall detection, which utilizes accelerometer and gyroscope sensors with a machine learning-based Convolutional Neural Network (CNN) model, achieving high sensitivity and specificity rates for real-world applicability [1]. Additionally, the app features a medicine identification system, employing the YOLO v8 model for object detection, allowing users to independently identify and manage medications through voice-guided feedback [2]. The injury detection system leverages a CNN model to classify wounds through real-time image processing, further enhancing user safety [3]. Moreover, the public transport navigation assistant combines object detection, distance measurement, and auditory guidance, enabling safe navigation of transit systems by the visually impaired [4]. This multifaceted approach of the BlindSafe application marks a significant advancement in assistive technology, promoting the independence of visually impaired users.',
};

const LiteratureSurvey: React.FC = () => {
  return (
    <section id="literature-survey" className="container pt-24 sm:py-32">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl"> {/* Reduced content width */}
          <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">Literature Survey</h2>
          <div className="text-center md:text-left">
            <p className="text-base text-gray-700 text-justify">{literatureSurveyData.text}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">References</h3>
              <ol className="ml-5 text-base text-gray-700">
                {literatureSurveyData.references.map((reference, index) => (
                  <li key={index} className="mb-2">{reference}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;
