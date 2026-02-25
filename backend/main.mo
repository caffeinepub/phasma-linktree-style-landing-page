import MixinStorage "blob-storage/Mixin";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  include MixinStorage();

  type Project = {
    name : Text;
    description : Text;
  };

  type SocialLink = {
    platform : Text;
    url : Text;
  };

  let projects : [Project] = [
    {
      name = "OpenSurg";
      description = "Decentralized surgical robotics training platform (dVRL-powered)";
    },
    {
      name = "Phasma.Art";
      description = "Create, customize, and share generative art in Web3";
    },
  ];

  let socialLinks : [SocialLink] = [
    {
      platform = "Twitter";
      url = "https://twitter.com/phasmafuture";
    },
    {
      platform = "Discord";
      url = "https://discord.com/invite/AbzxZeTg6G";
    },
  ];

  public query func getProjects() : async [(Text, Text)] {
    projects.values().map(func(project) { (project.name, project.description) }).toArray();
  };

  public query func getSocialLinks() : async [(Text, Text)] {
    socialLinks.values().map(func(link) { (link.platform, link.url) }).toArray();
  };
};
