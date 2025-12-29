'use client';

import React, { useState } from 'react';
import Button from '@/app/components/button';
import PromotionFormModal from '@/app/components/promotion-form-modal';
import { useParams } from 'next/navigation';

export default function AddPromotionButton() {
  const params = useParams();
  const companyId = Array.isArray(params.id) ? params.id[0] : params.id;
  const [showModal, setShowModal] = useState(false);

  if (!companyId) return null;

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add Promotion</Button>
      {showModal && (
        <PromotionFormModal
          companyId={companyId}
          show={true}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
