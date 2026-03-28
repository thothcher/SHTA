/**
 * Type definitions for SHTA – შესავალი თანამედროვე აზროვნებაში.
 * Georgian-only content.
 */
export interface Chapter {
  id: number;
  title: string;
  description: string;
  icon: string;
  keyTopics: string[];
  summary: string;
  keyPoints: string[];
  funFact: string;
  realWorld: string;
  keyFigures?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  questions: QuizQuestion[];
}

export interface Thinker {
  name: string;
  years: string;
  photo: string;
  nationality: string;
  contribution: string;
  details: string;
  field: string;
}

export interface Fact {
  id: number;
  text: string;
  source: string;
  category: string;
  icon: string;
  term?: string;
  title?: string;
}

export interface Story {
  id: number;
  title: string;
  chapterId: number;
  content: string;
  moral: string;
  icon: string;
  term?: string;
}

export interface MemoryCard {
  id: number;
  term: string;
  definition: string;
  category: string;
}


