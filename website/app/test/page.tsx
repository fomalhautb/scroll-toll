import { Button } from '@/components/ui/button'
import { createTestUser } from './actions'

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test User Creation</h1>
        <Button onClick={createTestUser}>
          Create Test User
        </Button>
    </div>
  );
} 