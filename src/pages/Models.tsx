import { Atom, Home, Trophy, Award, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import modelJessy from "@/assets/model-jessy.png";

const Models = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-10 text-accent text-2xl animate-pulse">⭐</div>
      <div className="absolute top-40 right-20 text-accent text-xl animate-pulse delay-100">⭐</div>
      <div className="absolute bottom-40 left-1/4 text-accent text-lg animate-pulse delay-200">⭐</div>
      <div className="absolute top-1/3 right-10 text-accent text-2xl animate-pulse delay-300">⭐</div>
      
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Atom className="w-8 h-8 text-primary" />
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-semibold">Home</span>
          </Link>
          <Link to="/models" className="flex items-center gap-2 text-primary transition-colors">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Models</span>
          </Link>
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Ranking</span>
          </a>
        </div>
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <span className="text-foreground">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
          <span className="text-primary">Meet Our </span>
          <span className="text-accent">Models</span>
        </h1>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Model Card */}
          <div className="bg-gradient-to-br from-background to-primary/20 rounded-3xl p-8 border-2 border-accent/50 space-y-6">
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-accent overflow-hidden">
                <img 
                  src={modelJessy}
                  alt="Jessy Bandya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-accent">Jessy Bandya</h3>
              <p className="text-foreground/80 text-base">Q.A || Software || Civil Engineer</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="bg-card/50 rounded-xl p-4 border border-primary/30 flex items-center gap-3">
                <div className="bg-primary/20 rounded-full p-2">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-foreground">jessy.bandya5@gmail.com</span>
              </div>
              
              <div className="bg-card/50 rounded-xl p-4 border border-primary/30 flex items-center gap-3">
                <div className="bg-primary/20 rounded-full p-2">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-foreground">+254746749307</span>
              </div>
            </div>

            {/* Contact via WhatsApp */}
            <Button
              onClick={() => window.open('https://wa.me/254746749307', '_blank')}
              className="w-full h-12 text-base font-bold bg-gradient-to-r from-event-green to-event-green/80 hover:from-event-green/90 hover:to-event-green/70 text-white"
            >
              Contact via WhatsApp
            </Button>

            {/* View Profile - Non-clickable */}
            <div className="text-center text-muted-foreground text-sm py-2">
              View Profile
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Models;
