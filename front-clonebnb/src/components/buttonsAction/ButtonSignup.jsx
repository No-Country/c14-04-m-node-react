'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function ButtonSignup() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <Link
          href="/createhosting"
          className="text-sm text-left py-2 px-3 hover:bg-opacity"
        >
          Crear un alojamiento
        </Link>
      </>
    );
  }
  return (
    <>
      <Link href="/register" className="text-sm text-left py-2 px-3 hover:bg-opacity">
        Regístrate
      </Link>
    </>
  );
}
