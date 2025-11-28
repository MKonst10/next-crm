import React from 'react';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id: rawId } = await params;
  const companyId = Number(rawId);
  if (Number.isNaN(companyId)) {
    notFound();
  }
  return (
    <>
      <Header>Companies ({companyId})</Header>
    </>
  );
}
