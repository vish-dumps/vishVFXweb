export interface VideoInfo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPackage {
  color: string;
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  note: string;
  bgClass: string;
  borderClass: string;
  shadowClass: string;
  iconBgClass: string;
  iconClass: string;
  dividerClass: string;
  buttonClass: string;
  popular?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
