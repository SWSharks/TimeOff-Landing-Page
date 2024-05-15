import React from "react";

import appLogo from "../images/logo.png";

import appleStoreBadge from "../images/apple_store_badge.svg";
import googlePlayBadge from "../images/google_play_badge.png";

import phone1 from "../images/phone1.png";
import Diving from "../images/Diving.png";
import Wellness from "../images/Wellness.png";
import Sports from "../images/Sports.png";
import Surfing from "../images/Surfing.png";
import Jogging from "../images/jogging.png";

export const initialState = {
  // when in dev, change appURL to local url
  // appURL: 'http://localhost:3000',
  // when in production, change appURL to real url
  appURL: "http://localhost:3001",

  appLogo: appLogo,
  appName: "TimeOff",

  coverTitle: "Explore and Book Your Next Adventure",
  coverText: `Discover exciting travel experiences and book your dream vacation with TimeOff. From thrilling diving trips to relaxing wellness retreats, we offer a wide range of adventures to suit every taste. Start planning your next getaway today and embark on an unforgettable journey with TimeOff!`,
  appleStoreBadge: appleStoreBadge,
  appleStoreLink: "#",
  googlePlayBadge: googlePlayBadge,
  googlePlayLink: "#",

  phone1: phone1,

  endorsementTitle: `Hangout with your favorite people on your favorite apps`,
  endorsementText: `AmpliChat powers conversations within DreamHub, VoiceQnA, VoiceMirror, BaZiPaiPai, and SpindriftHome.`,

  sectionList: [
    {
      title: `Diving`,
      text: "Experience the wonders of the deep blue sea with our exhilarating diving trips! Dive into crystal-clear waters and explore vibrant coral reefs teeming with marine life. Whether you're a seasoned diver or a beginner, our expert guides ensure a safe and unforgettable adventure. Book your diving trip now and embark on an underwater journey to discover the beauty of the ocean like never before!",
      image: Diving,
    },
    {
      title: `Wellness`,
      text: `Indulge in ultimate relaxation and rejuvenation with our luxurious wellness trips! Escape the hustle and bustle of daily life as you immerse yourself in serene surroundings and holistic experiences designed to nourish your mind, body, and soul. From tranquil yoga sessions to invigorating spa treatments, our wellness trips offer a perfect balance of tranquility and revitalization. Book your wellness getaway now and embark on a journey towards inner peace and well-being!`,
      image: Wellness,
    },
    {
      title: `Sports`,
      text: `Get your adrenaline pumping with our action-packed sports trips! Whether you're a thrill-seeker or a sports enthusiast, our exciting adventures are sure to get your heart racing. From high-speed water sports to challenging mountain treks, our sports trips offer a wide range of activities to suit every taste. Book your sports adventure now and experience the thrill of a lifetime!`,
      image: Sports,
    },
    {
      title: `Surfing`,
      text: `Ride the waves and experience the thrill of surfing with our exhilarating surfing trips! Whether you're a beginner or an experienced surfer, our expert instructors will guide you through the basics and help you master the art of riding the waves. From pristine beaches to world-class surf breaks, our surfing trips offer the perfect blend of adventure and relaxation. Book your surfing adventure now and catch the wave of a lifetime!`,
      image: Surfing,
    },
    {
      title: `Jogging`,
      text: `Hit the ground running and explore the great outdoors with our invigorating jogging trips! Whether you're a seasoned runner or a casual jogger, our scenic routes offer the perfect setting for a refreshing workout. From lush forests to picturesque parks, our jogging trips take you on a journey through nature's beauty while keeping you fit and active. Book your jogging adventure now and experience the joy of running in the great outdoors!`,
      image: Jogging,
    },
  ],

  discordLink: "info@time-off.org",
};

const initialContext = {
  state: initialState,
  dispatch: () => null,
};

export const Context = React.createContext(initialContext);
