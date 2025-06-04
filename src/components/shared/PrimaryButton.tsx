import Link from 'next/link';
import type { PrimaryButtonProps } from "@/types/button";


export default function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <Link 
        href={href} passHref
        className="bg-accent-custom text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-emerald-600 transition-colors cursor-pointer inline-block text-center">
        {children}
    </Link>
  );
}
