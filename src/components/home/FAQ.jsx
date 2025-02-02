import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="bg-gray-200 pt-40 pb-40  max-w-auto">
        <div className="container mx-auto py-12 px-6 sm:px-12 md:px-24 lg:px-36">
          <div className="flex flex-col space-y-4">
            <p className="text-orange-500 text-center md:text-left ">
              Teachers and School Counselors
            </p>
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-0 justify-between">
              <div className="flex items-center">
                <h1 className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent text-5xl font-bold capitalize">
                  Frequently asked{" "}
                  <span className="flex">
                    Questi
                    <img
                      src="/images/textimg.png"
                      alt="Text Icon"
                      className="w-14 h-14 "
                    />
                    ns
                  </span>
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <button className="btn px-8 py-2 text-white bg-gradient-to-bl from-red-500 to-red-900 hover:bg-gradient-to-br">
                  VIEW ALL QUESTIONS
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Do you offer online cooking courses?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Yes, we offer a variety of online cooking courses designed
                      to cater to different skill levels. Whether you're a
                      beginner or an advanced cook, you can find a course that
                      fits your needs. Our interactive online platform allows
                      you to learn at your own pace, with the guidance of our
                      expert chefs.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    How long do the programs take to complete?
                  </div>
                  <div className="collapse-content">
                    <p>
                      The duration of our programs varies depending on the
                      course type and level. Most of our courses take between 4
                      to 12 weeks to complete. You can expect a mix of video
                      lessons, assignments, and live sessions with instructors
                      to ensure a comprehensive learning experience.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    What facilities are available at the academy?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Our academy is equipped with state-of-the-art kitchen
                      facilities, including professional-grade stoves, ovens,
                      and workstations. We also provide access to a library of
                      culinary resources, including textbooks and videos, to
                      help you with your studies.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Can I visit the academy before applying?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Yes, prospective students are welcome to visit the academy
                      to take a tour of our facilities. We recommend scheduling
                      a visit in advance to ensure that someone is available to
                      show you around and answer any questions you may have
                      about our programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    What programs and courses do you offer?
                  </div>
                  <div className="collapse-content">
                    <p>
                      We offer a wide range of programs including Professional
                      Chef Training, Pastry Arts, and Hospitality Management.
                      Our courses are designed to provide both practical skills
                      and theoretical knowledge, ensuring you're well-prepared
                      for a successful career in the culinary arts.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    How do I apply to the chef academy?
                  </div>
                  <div className="collapse-content">
                    <p>
                      To apply to our academy, you can fill out the application
                      form on our website. You will need to submit your
                      educational background, personal details, and a statement
                      of interest. We also require an interview as part of the
                      admissions process to ensure you're a good fit for the
                      program.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Do you offer financial aid or scholarships?
                  </div>
                  <div className="collapse-content">
                    <p>
                      Yes, we offer scholarships and financial aid options to
                      help make our programs more accessible. You can apply for
                      financial aid after receiving your acceptance letter.
                      Scholarships are awarded based on merit, and we encourage
                      all students to apply.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-orange-300 border">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    What is the student-to-teacher ratio?
                  </div>
                  <div className="collapse-content">
                    <p>
                      We maintain a low student-to-teacher ratio to ensure
                      personalized attention for each student. Typically, our
                      classes have 10-15 students per instructor, allowing for
                      effective teaching and close guidance throughout your
                      training.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-7/12 mx-auto -translate-y-44 rounded-xl"
        src="/images/video.png"
        alt="Video Thumbnail"
      />
    </div>
  );
};

export default FAQ;
