interface KnowledgeBase {
  [key: string]: {
    keywords: string[];
    synonyms: string[];
    response: string;
    weight: number;
  };
}

const knowledgeBase: KnowledgeBase = {
  "studio_info": {
    keywords: ["what", "ready", "music", "studios", "about", "who"],
    synonyms: ["rms", "company", "business", "tell", "explain"],
    response: "Ready Music Studios (RMS) is a professional music studio located in Shreveport, Louisiana. We offer a range of services, including music production, recording, engineering, mixing, mastering, and more to support artists of all experience levels.",
    weight: 1.0
  },
  "location": {
    keywords: ["where", "located", "address", "place", "location"],
    synonyms: ["find", "visit", "directions", "area", "city"],
    response: "We're located in Shreveport, Louisiana. Feel free to reach out if you'd like to schedule a tour or a consultation!",
    weight: 0.8
  },
  "contact": {
    keywords: ["contact", "email", "phone", "reach", "how"],
    synonyms: ["message", "call", "connect", "touch", "communicate"],
    response: "You can contact us via email at info@readymusic.net or visit our website at readymusic.net for more details. We're also on Instagram and YouTube!",
    weight: 0.9
  },
  "production": {
    keywords: ["production", "produce", "beat", "beats", "cost", "price", "much"],
    synonyms: ["make", "create", "track", "instrumental", "fee", "charge"],
    response: "Our production services include: Beat Production ($50 per beat), Studio Production ($250 per session), and Audio Engineering, Mixing, Mastering, and Songwriting ($50 per hour).",
    weight: 0.9
  },
  "recording": {
    keywords: ["recording", "record", "studio", "booth", "cost", "price", "much"],
    synonyms: ["tape", "capture", "session", "track", "fee", "charge"],
    response: "We offer various recording options: Studio Recording ($150 per session), Band Recording ($250 per session), and Booth Rental ($100 per session).",
    weight: 0.9
  },
  "admin": {
    keywords: ["administrative", "admin", "copyright", "legal", "paperwork"],
    synonyms: ["registration", "rights", "documents", "papers", "forms"],
    response: "Yes! We offer administrative services at $50 each, including legal registration, royalty registration, ISRC coding, publishing administration, and collection administration.",
    weight: 0.7
  },
  "marketing": {
    keywords: ["marketing", "promote", "promotion", "advertise", "social"],
    synonyms: ["market", "publicity", "advertising", "exposure", "media"],
    response: "We provide marketing services like social media marketing, branding, content creation, and marketing materials for $50 each.",
    weight: 0.8
  },
  "distribution": {
    keywords: ["distribution", "distribute", "streaming", "platforms", "release"],
    synonyms: ["publish", "spread", "share", "platform", "stream"],
    response: "Yes, we handle digital sales administration, streaming integration, physical distribution, and foreign sales administration for $50 each.",
    weight: 0.8
  },
  "booking": {
    keywords: ["book", "schedule", "appointment", "session", "how"],
    synonyms: ["reserve", "set up", "arrange", "plan", "start"],
    response: "To book a session, please contact us via email at info@readymusic.net. Let us know your preferred dates and services, and we'll coordinate with you to set up a session.",
    weight: 0.9
  },
  "preparation": {
    keywords: ["prepare", "preparation", "ready", "bring", "need"],
    synonyms: ["prep", "setup", "organize", "arrange", "require"],
    response: "We recommend bringing any necessary files (stems, backing tracks, or reference mixes), knowing your parts (lyrics, solos, or specific elements), and setting clear goals for your session. This helps ensure a productive and smooth recording experience.",
    weight: 0.7
  },
  "etiquette": {
    keywords: ["etiquette", "rules", "behavior", "guidelines", "policy"],
    synonyms: ["conduct", "protocol", "manners", "expectations", "policies"],
    response: "We encourage artists to: Be punctual to make the most of the session time, respect the studio equipment and follow the engineer's guidance, and communicate openly with the team about your vision.",
    weight: 0.7
  },
  "experience": {
    keywords: ["experience", "history", "background", "expertise", "long"],
    synonyms: ["track record", "portfolio", "achievements", "success", "years"],
    response: "Ready Music Studios has over 20 years of experience in the industry, supporting regional artists and emerging talents. Our projects have reached listeners on popular streaming platforms, and we pride ourselves on high-quality production.",
    weight: 0.8
  },
  "pricing": {
    keywords: ["price", "cost", "rate", "fee", "much", "pricing"],
    synonyms: ["charge", "pay", "payment", "expense", "money"],
    response: "Our rates vary by service: Beat Production ($50/beat), Studio Production ($250/session), Engineering/Mixing/Mastering ($50/hour), Recording ($150-250/session), and Administrative/Marketing services ($50 each).",
    weight: 1.0
  }
};

const calculateRelevanceScore = (
  question: string,
  entry: { keywords: string[]; synonyms: string[]; weight: number }
): number => {
  const words = question.toLowerCase().split(/\s+/);
  let score = 0;

  // Check for keyword matches
  entry.keywords.forEach(keyword => {
    const keywordLower = keyword.toLowerCase();
    if (words.includes(keywordLower)) {
      score += 1 * entry.weight;
    } else if (words.some(word => word.includes(keywordLower))) {
      score += 0.8 * entry.weight;
    }
  });

  // Check for synonym matches
  entry.synonyms.forEach(synonym => {
    const synonymLower = synonym.toLowerCase();
    if (words.includes(synonymLower)) {
      score += 0.5 * entry.weight;
    } else if (words.some(word => word.includes(synonymLower))) {
      score += 0.3 * entry.weight;
    }
  });

  // Bonus for exact phrase matches
  const questionPhrase = question.toLowerCase();
  entry.keywords.forEach(keyword => {
    if (questionPhrase.includes(keyword.toLowerCase())) {
      score += 0.5;
    }
  });

  // Bonus for question words
  const questionWords = ["what", "where", "when", "how", "who", "why"];
  if (questionWords.some(word => words.includes(word))) {
    score += 0.2;
  }

  return score;
};

const findBestMatch = (question: string): string | null => {
  let bestScore = 0;
  let bestResponse: string | null = null;

  Object.entries(knowledgeBase).forEach(([_, entry]) => {
    const score = calculateRelevanceScore(question, entry);
    if (score > bestScore) {
      bestScore = score;
      bestResponse = entry.response;
    }
  });

  // Lower threshold for matching
  return bestScore >= 0.3 ? bestResponse : null;
};

export const findAnswer = (question: string): string => {
  const bestMatch = findBestMatch(question);
  
  if (bestMatch) {
    return bestMatch;
  }

  // If no good match is found, provide a helpful default response
  const suggestedTopics = [
    "pricing and rates",
    "recording services",
    "production services",
    "booking information"
  ].join(", ");

  return `I apologize, but I'm not quite sure about that. You can ask me about: ${suggestedTopics}. Or contact us directly at info@readymusic.net for specific inquiries.`;
};