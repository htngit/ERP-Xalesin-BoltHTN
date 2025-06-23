import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { cn } from '@/lib/utils';

interface FormWrapperProps {
  /**
   * Judul form
   */
  title: string;
  /**
   * Deskripsi form (opsional)
   */
  description?: string;
  /**
   * Konten form
   */
  children: React.ReactNode;
  /**
   * Konten footer form (opsional)
   */
  footer?: React.ReactNode;
  /**
   * Class tambahan untuk Card
   */
  className?: string;
}

/**
 * Komponen wrapper untuk form yang menyediakan struktur dan styling konsisten
 */
export const FormWrapper: React.FC<FormWrapperProps> = ({
  title,
  description,
  children,
  footer,
  className,
}) => {
  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};