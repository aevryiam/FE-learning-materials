import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";

export default function FetchingPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">
          Data Fetching Best Practices
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Cara yang benar untuk mengambil dan mengelola data dari API dengan
          performa optimal
        </p>
      </div>

      {/* Different Approaches */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">
          Pendekatan Data Fetching
        </h2>
        <p className="text-black leading-relaxed mb-4">
          Ada beberapa cara untuk fetch data dalam React/Next.js. Pilihan
          tergantung pada use case dan requirements.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Server-Side</h3>
            <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
              <li>Server Components (Next.js)</li>
              <li>getServerSideProps (Pages Router)</li>
              <li>SEO friendly</li>
              <li>Fast initial load</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Client-Side</h3>
            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
              <li>useEffect + useState</li>
              <li>React Query / SWR</li>
              <li>Custom hooks</li>
              <li>Interactive updates</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">Hybrid</h3>
            <ul className="list-disc list-inside text-purple-700 space-y-1 text-sm">
              <li>ISR (Incremental Static Regeneration)</li>
              <li>Static + Client hydration</li>
              <li>Best of both worlds</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Server-Side Fetching */}
      <StepCard stepNumber={1} title="Server-Side Data Fetching">
        <p className="mb-4">
          Fetch data di server untuk SEO, performance, dan security. Data sudah
          tersedia saat halaman di-render.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Next.js Server Component" type="success">
            <CodeBlock title="app/posts/page.tsx">
              {`// Server Component (default di App Router)
async function PostsPage() {
  // Fetch di server, berjalan saat build/request
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache', // Static generation
    // cache: 'no-store', // Server-side rendering
    // next: { revalidate: 3600 }, // ISR setiap 1 jam
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const posts = await res.json();

  return (
    <div>
      <h1>All Posts</h1>
      <div className="grid gap-4">
        {posts.map((post: any) => (
          <article key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Dengan Error & Loading Handling" type="info">
            <CodeBlock title="app/posts/loading.tsx">
              {`export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="grid gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border p-4 rounded">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}`}
            </CodeBlock>

            <CodeBlock title="app/posts/error.tsx">
              {`'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={reset}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Client-Side Fetching */}
      <StepCard stepNumber={2} title="Client-Side Data Fetching">
        <p className="mb-4">
          Fetch data di browser untuk data yang dynamic, user-specific, atau
          memerlukan interaksi.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Custom Hook Pattern" type="success">
            <CodeBlock title="utils/hooks/useFetch.ts">
              {`import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        
        if (isMounted) {
          setState({ data, loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : 'Unknown error',
          });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup untuk avoid memory leak
    };
  }, [url]);

  return state;
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Component menggunakan useFetch" type="success">
            <CodeBlock title="components/UserList.tsx">
              {`'use client';

import { useFetch } from '@/utils/hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserList() {
  const { data: users, loading, error } = useFetch<User[]>('/api/users');

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading users...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Users</h2>
      {users?.map((user) => (
        <div key={user.id} className="border p-4 rounded bg-white">
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Advanced Patterns */}
      <StepCard stepNumber={3} title="Advanced Fetching Patterns">
        <p className="mb-4">
          Pattern advanced untuk optimasi performa dan user experience yang
          lebih baik.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Debounced Search" type="success">
            <CodeBlock title="components/SearchUsers.tsx">
              {`'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/utils/hooks';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function SearchUsers() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Debounce search query (tunggu 500ms setelah user stop typing)
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setUsers([]);
      return;
    }

    const searchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/search?q=\${encodeURIComponent(debouncedQuery)}\`);
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error('Search failed:', error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    searchUsers();
  }, [debouncedQuery]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="p-3 border rounded hover:bg-gray-50">
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </div>
        ))}
        {debouncedQuery && users.length === 0 && !loading && (
          <div className="text-center py-4 text-gray-500">
            No users found for "{debouncedQuery}"
          </div>
        )}
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Optimistic Updates" type="info">
            <CodeBlock title="components/TodoList.tsx">
              {`'use client';

import { useState, useOptimistic } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo: Todo) => [...state, newTodo]
  );

  const addTodo = async (text: string) => {
    const tempId = Date.now(); // Temporary ID
    const newTodo = { id: tempId, text, completed: false };
    
    // Optimistic update (langsung update UI)
    addOptimisticTodo(newTodo);

    try {
      // API call
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      
      const savedTodo = await response.json();
      
      // Replace optimistic todo with real data
      setTodos(prev => [...prev, savedTodo]);
    } catch (error) {
      // Revert optimistic update on error
      console.error('Failed to add todo:', error);
      // UI automatically reverts because optimistic update failed
    }
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const text = formData.get('text') as string;
          if (text.trim()) {
            addTodo(text.trim());
            e.currentTarget.reset();
          }
        }}
        className="flex gap-2"
      >
        <input
          name="text"
          type="text"
          placeholder="Add a todo..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {optimisticTodos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-2 p-2 border rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Error Handling & Loading States */}
      <StepCard stepNumber={4} title="Error Handling & Loading States">
        <p className="mb-4">
          Handling error dan loading states yang baik adalah kunci untuk UX yang
          excellent.
        </p>

        <div className="space-y-6">
          <ExampleBox
            title="Error Boundary untuk Global Error Handling"
            type="info"
          >
            <CodeBlock title="components/ErrorBoundary.tsx">
              {`'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Send to error reporting service
    // reportError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-red-600 mb-4">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox
            title="Retry Logic dengan Exponential Backoff"
            type="success"
          >
            <CodeBlock title="utils/helpers/fetchWithRetry.ts">
              {`interface RetryOptions {
  maxRetries?: number;
  baseDelay?: number;
  maxDelay?: number;
}

export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryOptions: RetryOptions = {}
): Promise<Response> {
  const { maxRetries = 3, baseDelay = 1000, maxDelay = 10000 } = retryOptions;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      
      // Retry on server errors (5xx) tapi tidak pada client errors (4xx)
      if (response.ok || response.status < 500) {
        return response;
      }
      
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    } catch (error) {
      // Jangan retry pada attempt terakhir
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Exponential backoff: 1s, 2s, 4s, 8s (capped at maxDelay)
      const delay = Math.min(baseDelay * Math.pow(2, attempt), maxDelay);
      
      console.warn(\`Fetch attempt \${attempt + 1} failed, retrying in \${delay}ms...\`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw new Error('Max retries exceeded');
}

// Usage:
// const response = await fetchWithRetry('/api/data', {}, { maxRetries: 3 });`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Performance Best Practices */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Performance Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Do</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>Cache responses yang appropriate</li>
                <li>Implement loading skeletons</li>
                <li>Use debouncing untuk search</li>
                <li>Implement pagination untuk data besar</li>
                <li>Use optimistic updates untuk UX</li>
                <li>Cleanup useEffect untuk avoid memory leaks</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Don&apos;t</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                <li>Jangan fetch data di setiap render</li>
                <li>Hindari multiple API calls yang bisa di-batch</li>
                <li>Jangan ignore error handling</li>
                <li>Hindari fetch di useEffect tanpa dependencies</li>
                <li>Jangan expose sensitive data di client</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Libraries */}
      <div className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Libraries
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-black">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="mr-2">React Query / TanStack Query</span>
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Powerful data fetching library dengan caching, background updates,
              dan optimistic updates
            </p>
            <div className="text-xs text-blue-600">
              npm install @tanstack/react-query
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="mr-2">SWR</span>
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Data fetching library by Vercel dengan stale-while-revalidate
              strategy
            </p>
            <div className="text-xs text-blue-600">npm install swr</div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2 flex items-center">
              <span className="mr-2">Axios</span>
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              HTTP client dengan interceptors, automatic JSON parsing, dan
              request/response transformation
            </p>
            <div className="text-xs text-blue-600">npm install axios</div>
          </div>
        </div>
      </div>
    </div>
  );
}
