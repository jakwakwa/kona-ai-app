import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { FirestoreOfflineHandler } from '@/components/FirestoreOfflineHandler';

export const metadata: Metadata = {
  title: 'My Google AI Studio App',
  description: 'My Google AI Studio App',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <FirestoreOfflineHandler />
        {children}
      </body>
    </html>
  );
}
