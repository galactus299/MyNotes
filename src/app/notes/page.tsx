import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getNotesByUserId } from '@/lib/db/utils';
import { UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { PlusIcon, FileTextIcon } from 'lucide-react';

export default async function NotesPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Get user info from Clerk
  const user = await currentUser();
  
  // Get user's notes
  const notes = await getNotesByUserId(userId);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">My Notes</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild>
                <Link href="/notes/new">
                  <PlusIcon className="w-4 h-4 mr-2" />
                  New Note
                </Link>
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName || user?.fullName || 'there'}!
          </h2>
          <p className="text-gray-600">
            You have {notes.length} note{notes.length !== 1 ? 's' : ''}
          </p>
        </div>

        {notes.length === 0 ? (
          <div className="text-center py-12">
            <FileTextIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first note.
            </p>
            <Button asChild>
              <Link href="/notes/new">
                <PlusIcon className="w-4 h-4 mr-2" />
                Create your first note
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg truncate">{note.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {note.content || 'No content'}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>
                      {note.createdAt 
                        ? new Date(note.createdAt).toLocaleDateString()
                        : 'Unknown date'
                      }
                    </span>
                    <span className={note.isPublic ? 'text-green-600' : 'text-gray-500'}>
                      {note.isPublic ? 'Public' : 'Private'}
                    </span>
                  </div>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/notes/${note.id}`}>
                        View Note
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 