export interface NextButtonProps {
  children: React.ReactNode;
}

export interface RestartButtonProps {
  restart: () => void;
  children: React.ReactNode;
}

export interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export interface BackButtonProps {
  onBack: () => void;
  children: React.ReactNode;
};