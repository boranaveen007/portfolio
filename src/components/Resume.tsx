"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-16 px-6">
      {/* 🔥 Section Heading */}
      <motion.h2
        className="text-5xl font-bold text-white text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My <span className="text-orange-400">Resume</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto">
        {/* 🏢 Work Experience */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Work Experience
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white">
                Software Development Engineer, Akrivia Automation
              </h4>
              <p className="text-gray-400">July 2019 – July 2023</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>
                  Developed high-performing HCM features using Angular, Node.js,
                  Express.js, NestJS, MySQL, MongoDB, and AWS.
                </li>
                <li>
                  Reduced operational costs by 20% and increased user
                  satisfaction by 40% through optimized system performance.
                </li>
                <li>
                  Enhanced decision-making efficiency by 25% via advanced
                  analytics modules.
                </li>
                <li>
                  Implemented AWS services (S3, Lambda) improving system
                  scalability and performance by 40%.
                </li>
                <li>
                  Optimized real-time data processing with Apache Kafka,
                  improving responsiveness and scalability.
                </li>
                <li>
                  Developed GraphQL APIs, reducing server response time by 25%
                  and improving data retrieval efficiency.
                </li>
                <li>
                  Led a team of junior developers, improving overall team
                  productivity by 30%.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 💡 Skills Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
            {/* Frontend */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Frontend
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>React.js, Next.js, Angular</li>
                <li>Redux, Tailwind CSS, Bootstrap</li>
                <li>HTML5, CSS3, JavaScript, TypeScript</li>
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">Backend</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Node.js, Express.js, NestJS</li>
                <li>GraphQL, REST APIs, Microservices</li>
                <li>MySQL, MongoDB, PostgreSQL, Redis</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Cloud & DevOps
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>AWS (Lambda, S3, SNS, SQS, EC2)</li>
                <li>Docker, Kubernetes, CI/CD</li>
                <li>Jenkins, GitHub Actions</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h4 className="text-xl text-white font-semibold mb-2">
                Tools & Technologies
              </h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Apache Kafka, OAuth, Redis Streams</li>
                <li>Agile (SCRUM), Jira, Git</li>
                <li>Visual Studio Code, Figma</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 🎓 Education Section */}
        <motion.div
          className="bg-white/5 backdrop-blur-md shadow-lg rounded-lg border border-white/20 p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">
            Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-white">
                Master’s in Computer and Information Sciences
              </h4>
              <p className="text-gray-400">
                University of Cincinnati | GPA: 3.97
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white">
                Bachelor’s in Computer Science and Engineering
              </h4>
              <p className="text-gray-400">
                Raghu Engineering College | GPA: 3.70
              </p>
            </div>
          </div>
        </motion.div>

        {/* 📄 Resume Download Button (Smaller & Centered) */}
        <div className="flex justify-center">
          <motion.a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
