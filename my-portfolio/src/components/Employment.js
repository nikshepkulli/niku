import React from "react";
import "./Employment.css"; // Import the CSS file

const Employment = () => (
  <section id="employment">
    <h2>Employment</h2>
    <div className="job">
      <h3>Data Science Virtual Intern</h3>
      <p>British Airways, Fairfield, CT</p>
      <p>May 2023 - May 2023</p>
      <ul>
        <li>
          Developed web scraping techniques using tools like Beautiful Soup to
          extract valuable data from websites.
        </li>
        <li>
          Performed data analysis and visualization using Python libraries like
          Seaborn, NumPy, and Pandas.
        </li>
        <li>
          Uncovered competitor strategies, market dynamics, and customer
          behavior to facilitate data-driven decision-making.
        </li>
        <li>
          Predicted Customer Buying Behavior using machine learning expertise
          and Scikit-learn/Random Forest algorithms, achieving 85% accuracy.
        </li>
        <li>
          Empowered the company to tailor marketing strategies, enhance customer
          segmentation, and optimize business operations for sales growth and
          customer satisfaction.
        </li>
      </ul>
    </div>
    {/* Job 1: Research Assistant at Sacred Heart University */}
    <div className="job">
      <h3>Research Assistant</h3>
      <p>Sacred Heart University, Fairfield, CT</p>
      <p>Jan 2023 - May 2023</p>
      <ul>
        <li>
          Achieved 95% accuracy in breast cancer prediction using linear
          regression on the Scikit dataset.
        </li>
        <li>
          Conducted sentiment analysis on tweets with an 85% accuracy rate.
        </li>
        <li>
          Identified prevalent topics and sentiments in COVID-19 tweets using
          LDA analysis.
        </li>
        <li>
          Designed Vinyl Rack for the IDEA Lab, resulting in a 30% increase in
          storage capacity and an award for outstanding creativity and
          innovation.
        </li>
        <li>
          Accomplishments showcase the ability to deliver impactful results,
          utilizing data-driven approaches that improve business outcomes.
        </li>
        <li>
          Possesses strong analytical skills and the ability to work with large
          datasets, making for a valuable asset in any research or data-driven
          project.
        </li>
      </ul>
    </div>

    {/* Job 2: Software Engineer II at Oracle Cerner, Bengaluru, India */}
    <div className="job">
      <h3>Software Engineer II</h3>
      <p>Oracle Cerner, Bengaluru, India</p>
      <p>Dec 2019 – Aug 2022</p>
      <ul>
        <li>
          Managed releases and improved features such as CPDI and WTSLocation
          for the Operations team, reducing workload by 50% for Kansas City
          counterparts and reducing bugs.
        </li>
        <li>
          Revamped data collection framework using Olympus and Jetstream
          frameworks, resulting in a 20% increase in data accuracy and a 30%
          reduction in processing time.
        </li>
        <li>
          Improved script management process by implementing centralized changes
          and resolved crash gather requests, resulting in a 25% reduction in
          crash reports and an increase in customer satisfaction.
        </li>
      </ul>
    </div>

    {/* Job 3: Software Engineer at 6D Technologies, Bengaluru, India */}
    <div className="job">
      <h3>Software Engineer</h3>
      <p>6D Technologies, Bengaluru, India</p>
      <p>Aug 2019 – Dec 2019</p>
      <ul>
        <li>
          Developed SMSC GUI for clients in Vietnam and Indonesia and served as
          React UI and Backend Developer for Sony Ericsson’s Campaign Manager
          System (MAGIK), resulting in a 40% increase in system efficiency and a
          25% reduction in system downtime.
        </li>
      </ul>
    </div>

    {/* Job 4: Embedded Software Engineer at Probots Techno Solutions, Bengaluru, India */}
    <div className="job">
      <h3>Embedded Software Engineer</h3>
      <p>Probots Techno Solutions, Bengaluru, India</p>
      <p>Jun 2018 – Jul 2019</p>
      <ul>
        <li>
          Developed an Android app for kidney dialysis reprocessing machine,
          resulting in a 15% increase in machine communication efficiency and a
          20% reduction in communication errors.
        </li>
        <li>
          Created a C# app with REST API for Collin Aerospace evacuation-slide
          fabric tester, resulting in a 30% reduction in testing time and a 25%
          increase in testing accuracy.
        </li>
        <li>
          Devised a GPS tracking Android application for Alpine star using
          Google API and an Arduino Mini.
        </li>
      </ul>
    </div>

    {/* Repeat the above structure for other employment details */}
  </section>
);

export default Employment;
