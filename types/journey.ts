export interface JourneyItem {
  year: string;

  title: string;

  subtitle: string;

  description: string;

  icon:
    | "graduation"
    | "builder"
    | "analyst"
    | "creator"
    | "auditor";

  technologies?: string[];
}