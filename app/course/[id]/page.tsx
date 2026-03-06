import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { courses } from '@/lib/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);
  if (!course) return {};

  return {
    title: `${course.title} | codeCrew`,
    description: course.longDescription,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-gray-900">
            Courses
          </Link>
          <span>/</span>
          <span className="text-gray-900">{course.category}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-cyan-600 font-semibold text-sm mb-2">
                {course.level} - {course.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                {course.longDescription}
              </p>

              {/* Course Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-2xl mb-2">{highlight.icon}</p>
                    <p className="font-semibold text-gray-900 text-sm">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Card */}
            <div>
              <Card className="p-6 sticky top-24 bg-white shadow-lg">
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-2">Price</p>
                  <p className="text-4xl font-bold text-gray-900">₹{course.price}</p>
                  <p className="text-gray-600 text-xs">Full course</p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mb-3">
                  Enroll Now
                </Button>
                <Button variant="outline" className="w-full">
                  Download Syllabus
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What you'll learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🐍",
                title: "Write clean, efficient Python code",
                description: "following PEP 8 standards"
              },
              {
                icon: "🏗️",
                title: "Build scalable, scalable RESTful APIs",
                description: "with Django/FastAPI"
              },
              {
                icon: "🗄️",
                title: "Integrate and manage relational databases",
                description: "using SQL and ORMs"
              },
              {
                icon: "⚙️",
                title: "Automate real-world tasks with custom Python scripts",
                description: "for efficiency"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border border-gray-200">
                <p className="text-3xl mb-4">{item.icon}</p>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Right Side Info Box */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Not sure if this course is right for you?
              </h2>
              <p className="text-gray-600 mb-6">
                Talk to our admission counselors. Get a free 1-on-1 consultation to understand if this course aligns with your goals.
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Request Callback
              </Button>
            </div>

            <Card className="p-6 bg-white">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Satisfaction Rate</p>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-600 text-xs">5,800+ successful students have transformed their careers through our program</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Course Curriculum
          </h2>
          <p className="text-gray-600 mb-12">
            Structured modules designed to build your knowledge top-to-bottom, combining theory with immersive practical application.
          </p>

          <Accordion type="single" collapsible defaultValue={`module-0`}>
            {course.curriculum.map((module, idx) => (
              <AccordionItem key={idx} value={`module-${idx}`} className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-start gap-4 text-left">
                    <div className="bg-cyan-600 text-white rounded px-3 py-1 text-sm font-semibold flex-shrink-0">
                      {module.module}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{module.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 border-t">
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex gap-3 text-sm text-gray-600">
                        <span className="text-cyan-600">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Real-World Projects */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Real-World Projects
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Build a portfolio of robust applications that demonstrate your skills to recruiters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.projects.map((project, idx) => (
              <Card key={idx} className="p-8 border border-gray-200">
                <div className="text-4xl mb-4">
                  {idx === 0 ? '🛒' : '🕷️'}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Your Mentor */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Your Mentor
          </h2>

          <Card className="p-8 border border-gray-200 flex flex-col md:flex-row gap-8">
            <img
              src={course.instructor.image}
              alt={course.instructor.name}
              className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {course.instructor.name}
              </h3>
              <p className="text-cyan-600 font-semibold mb-4">
                {course.instructor.title}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {course.instructor.bio}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible>
            {course.faq.map((item, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`} className="border-b border-gray-200 py-4">
                <AccordionTrigger className="hover:text-cyan-600">
                  <span className="text-lg font-semibold text-gray-900">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cyan-600 text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your training journey?
          </h2>
          <p className="text-cyan-100 mb-8 text-lg">
            Limited seats available. Enroll now and unlock your potential.
          </p>
          <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Enroll Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
