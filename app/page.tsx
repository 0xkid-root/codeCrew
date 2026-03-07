import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { courses, stats, pricingPlans, testimonials } from '@/lib/data';

export const metadata = {
  title: 'codeCrew - Professional Training & Certification Courses',
  description: 'Transform your career with industry-oriented programming and tech training programs. Learn from experts, build real projects, and get placed at top companies.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Stats */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-600 text-sm font-semibold mb-4 uppercase tracking-wide">
                Advance your skills
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Industry-Oriented IT Training Programs
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Learn practical skills, build real projects, and launch your tech career with hands-on training from industry experts.
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-base font-semibold">
                Register Now
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
                <p className="text-gray-600 text-sm">Students trained</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">300+</div>
                <p className="text-gray-600 text-sm">Placements</p>
              </div>
              <div className="bg-cyan-600 text-white rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">+4k%</div>
                <p className="text-cyan-100 text-sm">Success rate</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <p className="text-gray-600 text-sm">Industry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Managing tech learning is complex</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Students often struggle to choose the right path, build practical experience, and convert training into real job opportunities.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">📚</span>
                  <span className="text-gray-700 text-sm">Courses and materials felt scattered across too many platforms</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">🗺️</span>
                  <span className="text-gray-700 text-sm">No clear roadmap from beginner learning to internship and placement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">📊</span>
                  <span className="text-gray-700 text-sm">Hard to track growth, live projects, and skill readiness over time</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 bg-cyan-50 border border-cyan-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">codeCrew helps students grow faster</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                A simple, conversion-focused experience that combines structured training, real projects, mentorship, and job-oriented guidance in one place.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">📤</span>
                  <span className="text-gray-700 text-sm">Upload assignments, track submissions, and stay organized</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">🎯</span>
                  <span className="text-gray-700 text-sm">Auto-structured learning paths for in-demand technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">📈</span>
                  <span className="text-gray-700 text-sm">Monitor project progress and skill trends from one dashboard</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-600 flex-shrink-0 mt-1">👥</span>
                  <span className="text-gray-700 text-sm">Get mentor-backed recommendations for internships and careers</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section - Choose Career Goal */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Choose the path that matches your career goal
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Select from our comprehensive range of industry-focused training programs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`} className="h-full">
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full cursor-pointer flex flex-col">
                  <div className="aspect-video bg-gray-300 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-cyan-600 text-xs font-bold uppercase mb-2 tracking-wider">{course.category}</p>
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">{course.description}</p>
                    <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm py-2 mt-auto">
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-cyan-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built for outcomes, not just classroom hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every module is designed to deliver measurable results, with real-world projects and job placement support.
              </p>
            </Card>
            <Card className="p-8 bg-cyan-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible formats for every stage of learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Choose between live classes, self-paced learning, or hybrid formats that fit your schedule and learning style.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Flexible formats for every stage of learning
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the learning style that works best for you
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Evening Training", desc: "Perfect for working professionals" },
              { name: "Offline Training", desc: "In-person classroom experience" },
              { name: "Weekend Training", desc: "Learn at your own pace" },
              { name: "Internship Program", desc: "Gain real-world experience" }
            ].map((format) => (
              <Card key={format.name} className="p-6 text-center hover:shadow-md transition-shadow">
                <h3 className="text-base font-bold text-gray-900 mb-2">{format.name}</h3>
                <p className="text-gray-600 text-sm">{format.desc}</p>
                <Button variant="ghost" className="mt-4 text-cyan-600 hover:text-cyan-700">
                  Learn More →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Simple plans for serious learners
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your learning goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 transition-all ${
                  plan.highlighted
                    ? 'ring-2 ring-cyan-600 shadow-xl'
                    : ''
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.period}</p>

                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-600">
                      <span className="text-cyan-600 font-bold text-lg leading-none">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Confidence Section */}
     <section className="py-16 md:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
      Designed to improve confidence before interviews
    </h2>

    <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
      We prepare you for every stage of the interview process
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        { title: "Mock Interviews", desc: "Practice with industry professionals", icon: "🎤" },
        { title: "Resume Review", desc: "Get your CV job-ready", icon: "📄" },
        { title: "Doubt Support", desc: "1-on-1 mentor guidance", icon: "💬" },
        { title: "Salary Guidance", desc: "Negotiate confidently", icon: "📈" }
      ].map((item) => (

        <div
          key={item.title}
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center 
          hover:shadow-lg hover:-translate-y-1 transition duration-300"
        >

          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-blue-100 text-xl">
            {item.icon}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm">
            {item.desc}
          </p>

        </div>

      ))}
    </div>

  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center text-balance">
            Students who turned training into momentum
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from our successful graduates about their career transformation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center text-balance">
            Everything students usually ask first
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "What is the duration of the training program?",
                answer: "Our programs range from 8 to 16 weeks depending on the course. Most courses are conducted in live sessions with recorded content available for lifelong access."
              },
              {
                question: "Do you provide placement assistance?",
                answer: "Yes! We have strong industry partnerships and provide placement assistance, mock interviews, and career counseling to all our students."
              },
              {
                question: "Is there any refund policy?",
                answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked."
              }
            ].map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
                Talk to our team and choose the right program
              </h2>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Our career counselors are ready to help you find the perfect program that aligns with your goals and aspirations.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Email</p>
                  <a href="mailto:hello@codecrew.com" className="text-gray-600 text-base hover:text-cyan-600 transition-colors">
                    hello@codecrew.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">Phone</p>
                  <a href="tel:+919876543210" className="text-gray-600 text-base hover:text-blue-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interested Program</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all bg-white">
                    <option>Select a program</option>
                    <option>Python Development</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Mobile Development</option>
                  </select>
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Submit Request
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Ready to start your training journey? 
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Take the first step towards a rewarding career in tech. Enroll today and transform your future.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-base font-semibold">
            Explore All Courses
          </Button>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
