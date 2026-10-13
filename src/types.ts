export interface Specialist {
  id: string;
  name: string;
  shortName: string;
  role: string;
  crm: string;
  rqes: { label: string; number: string }[];
  rqeString: string;
  education: string[];
  treats: string;
  consultationApproach: string;
  avatarPlaceholder: string;
}

export interface ClinicalCondition {
  id: string;
  title: string;
  category: 'cardiologia' | 'vascular';
  whatYouFeelOrFear: string;
  whyItHappens: string;
  treatmentTruths: string;
  whenToSeek: string;
  howWeCare: string;
  nextStep: string;
  badge: string;
}

export interface MedicalExam {
  id: string;
  name: string;
  category: 'cardiologia' | 'vascular';
  description: string;
  purpose: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'geral' | 'cardiologia' | 'vascular' | 'agendamento';
}

export interface BlogArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  readTime: string;
  fullOverview: string;
}
