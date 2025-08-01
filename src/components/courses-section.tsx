import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play } from "lucide-react";
import motionGraphicsImage from "@/assets/course-motion-graphics.jpg";
import colorGradingImage from "@/assets/course-color-grading.jpg";

const courses = [
  {
    id: 1,
    title: "Advanced Motion Graphics",
    description: "Master After Effects and create stunning motion graphics for films, commercials, and social media.",
    image: motionGraphicsImage,
    duration: "12 hours",
    students: "8,500",
    rating: 4.9,
    level: "Advanced",
    price: "$129",
    features: ["After Effects Mastery", "3D Animation", "Text Effects", "Particle Systems"]
  },
  {
    id: 2,
    title: "Professional Color Grading",
    description: "Transform your footage with professional color grading techniques used in Hollywood productions.",
    image: colorGradingImage,
    duration: "8 hours",
    students: "6,200",
    rating: 4.8,
    level: "Intermediate",
    price: "$99",
    features: ["DaVinci Resolve", "Color Theory", "LUTs & Scopes", "Cinematic Looks"]
  },
  {
    id: 3,
    title: "Complete Video Editing Bootcamp",
    description: "From zero to hero - learn everything you need to become a professional video editor.",
    image: motionGraphicsImage,
    duration: "25 hours",
    students: "12,800",
    rating: 4.9,
    level: "Beginner",
    price: "$199",
    features: ["Premiere Pro", "Final Cut Pro", "Workflow", "Client Management"]
  }
];

export const CoursesSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted curriculum designed by industry professionals
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 overflow-hidden">
              {/* Course image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-black">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="glass" size="icon" className="w-16 h-16 rounded-full">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course features */}
                <div className="flex flex-wrap gap-2">
                  {course.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-bold text-primary">
                  {course.price}
                </div>
                <Button variant="default" className="group-hover:shadow-glow transition-all duration-300">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View all courses button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:border-primary hover:text-primary transition-colors duration-300">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};