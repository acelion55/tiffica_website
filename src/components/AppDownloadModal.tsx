'use client';

import React from 'react';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose?: () => void;
  onDownload?: () => void;
}

export function AppDownloadModal({ isOpen }: AppDownloadModalProps) {
  // Keep this component minimal to avoid build-time type/usage errors.
  if (!isOpen) return null;
  return null;
}
