import React from 'react';
import { cn } from '@/lib/utils';

interface TableWrapperProps {
  /**
   * Konten tabel
   */
  children: React.ReactNode;
  /**
   * Class tambahan untuk container
   */
  className?: string;
  /**
   * Apakah tabel memiliki border
   */
  bordered?: boolean;
  /**
   * Apakah tabel memiliki stripe
   */
  striped?: boolean;
  /**
   * Apakah tabel memiliki hover effect
   */
  hover?: boolean;
}

/**
 * Komponen TableWrapper untuk menampilkan tabel dengan styling konsisten
 */
export const TableWrapper: React.FC<TableWrapperProps> = ({
  children,
  className,
  bordered = true,
  striped = true,
  hover = true,
}) => {
  return (
    <div className={cn('overflow-x-auto rounded-md', className)}>
      <table 
        className={cn(
          'min-w-full divide-y divide-gray-200',
          bordered && 'border border-gray-200',
          className
        )}
      >
        {children}
      </table>
    </div>
  );
};

interface TableHeadProps {
  /**
   * Konten header tabel
   */
  children: React.ReactNode;
  /**
   * Class tambahan untuk header
   */
  className?: string;
}

/**
 * Komponen TableHead untuk header tabel
 */
export const TableHead: React.FC<TableHeadProps> = ({ children, className }) => {
  return (
    <thead className={cn('bg-gray-50', className)}>
      {children}
    </thead>
  );
};

interface TableBodyProps {
  /**
   * Konten body tabel
   */
  children: React.ReactNode;
  /**
   * Class tambahan untuk body
   */
  className?: string;
  /**
   * Apakah body tabel memiliki stripe
   */
  striped?: boolean;
  /**
   * Apakah body tabel memiliki hover effect
   */
  hover?: boolean;
}

/**
 * Komponen TableBody untuk body tabel
 */
export const TableBody: React.FC<TableBodyProps> = ({ 
  children, 
  className,
  striped = true,
  hover = true,
}) => {
  return (
    <tbody 
      className={cn(
        'bg-white divide-y divide-gray-200',
        striped && '[&>tr:nth-child(even)]:bg-gray-50',
        hover && '[&>tr:hover]:bg-gray-100',
        className
      )}
    >
      {children}
    </tbody>
  );
};

interface TableHeaderProps {
  /**
   * Konten header cell
   */
  children: React.ReactNode;
  /**
   * Class tambahan untuk header cell
   */
  className?: string;
  /**
   * Alignment teks
   */
  align?: 'left' | 'center' | 'right';
}

/**
 * Komponen TableHeader untuk header cell tabel
 */
export const TableHeader: React.FC<TableHeaderProps> = ({ 
  children, 
  className,
  align = 'left',
}) => {
  return (
    <th 
      scope="col" 
      className={cn(
        'px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {children}
    </th>
  );
};

interface TableCellProps {
  /**
   * Konten cell
   */
  children: React.ReactNode;
  /**
   * Class tambahan untuk cell
   */
  className?: string;
  /**
   * Alignment teks
   */
  align?: 'left' | 'center' | 'right';
}

/**
 * Komponen TableCell untuk cell tabel
 */
export const TableCell: React.FC<TableCellProps> = ({ 
  children, 
  className,
  align = 'left',
}) => {
  return (
    <td 
      className={cn(
        'px-6 py-4 whitespace-nowrap text-sm text-gray-500',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {children}
    </td>
  );
};

interface TableEmptyProps {
  /**
   * Pesan yang ditampilkan ketika tabel kosong
   */
  message?: string;
  /**
   * Jumlah kolom
   */
  colSpan: number;
  /**
   * Class tambahan untuk container
   */
  className?: string;
}

/**
 * Komponen TableEmpty untuk menampilkan pesan ketika tabel kosong
 */
export const TableEmpty: React.FC<TableEmptyProps> = ({ 
  message = 'Tidak ada data yang tersedia',
  colSpan,
  className,
}) => {
  return (
    <tr>
      <td 
        colSpan={colSpan} 
        className={cn(
          'px-6 py-4 text-center text-sm text-gray-500',
          className
        )}
      >
        {message}
      </td>
    </tr>
  );
};