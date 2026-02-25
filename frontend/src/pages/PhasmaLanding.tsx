import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Heart } from 'lucide-react';
import { SiX, SiDiscord } from 'react-icons/si';
import { useGetProjects, useGetSocialLinks } from '../hooks/useQueries';

// Fallback project data with 2 projects as specified
const FALLBACK_PROJECTS: Array<[string, string, string, string]> = [
  ["🤖", "PHASMA Robotics", "A decentralized SaaS platform for training surgical robotics reinforcement learning models.", "https://phasma-cek.caffeine.xyz/"],
  ["🖼️", "PHASMA", "Explore Phasma NFT collections", "https://dgdg.app/nfts/collections/phasma"],
];

// Fallback social links
const FALLBACK_SOCIAL_LINKS: Array<[string, string]> = [
  ["X", "https://x.com/phasmafuture"],
  ["Discord", "https://discord.com/invite/AbzxZeTg6G"],
];

export default function PhasmaLanding() {
  const { data: backendProjects } = useGetProjects();
  const { data: backendSocialLinks } = useGetSocialLinks();

  // Use fallback data (specification requirements take precedence)
  const projects = FALLBACK_PROJECTS;
  const socialLinks = backendSocialLinks || FALLBACK_SOCIAL_LINKS;

  const getSocialIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('twitter') || lowerName === 'x') {
      return <SiX className="w-5 h-5" />;
    }
    if (lowerName.includes('discord')) {
      return <SiDiscord className="w-5 h-5" />;
    }
    return <ExternalLink className="w-5 h-5" />;
  };

  const handleProjectClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();
  const appId = encodeURIComponent(window.location.hostname || 'phasma-landing');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="mb-6 relative">
            <img 
              src="/assets/PHASMA Logo1.png" 
              alt="Phasma Logo" 
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full shadow-xl ring-4 ring-primary/30 hover:ring-primary/50 transition-all duration-500 object-contain hover:scale-105 hover:shadow-2xl bg-background/50 backdrop-blur-sm p-2"
              loading="eager"
            />
          </div>
          <h1 className="text-4xl font-bold mb-3 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PHASMA Robotics
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            A decentralized SaaS platform for training surgical robotics reinforcement learning models.
          </p>
        </header>

        {/* Main Projects Section */}
        <main className="mb-12">
          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 lg:gap-6 max-w-4xl mx-auto">
            {projects.map(([icon, name, description, url]) => (
              <Card 
                key={name}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 hover:border-primary/50"
                onClick={() => handleProjectClick(url)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>

        {/* Social Links Section */}
        <section className="mb-8">
          <div className="flex justify-center gap-4">
            {socialLinks.map(([name, url]) => (
              <Button
                key={name}
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-md"
                onClick={() => handleSocialClick(url)}
              >
                {getSocialIcon(name)}
                <span className="sr-only">{name}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear}. Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
