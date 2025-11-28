import StepCard from "@/components/Element/StepCard";
import CodeBlock from "@/components/Element/CodeBlock";
import ExampleBox from "@/components/Element/ExampleBox";
import Counter from "@/components/Element/Counter";

export default function ReduxPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-8 bg-white rounded-lg border">
        <h1 className="text-4xl font-bold text-black mb-4">
          React Redux & Redux Toolkit
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto">
          State management yang powerful untuk aplikasi React yang kompleks
        </p>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Demo</h2>
        <p className="text-gray-600 mb-6">
          Ini adalah contoh working Redux counter. State disimpan di Redux store
          dan dapat diakses dari komponen manapun.
        </p>
        <Counter />
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-black mb-4">
          Kapan Butuh Redux?
        </h2>
        <p className="text-black leading-relaxed mb-4">
          Redux adalah state management library yang membantu mengelola state
          global aplikasi. Redux Toolkit (RTK) adalah approach modern yang
          mempermudah penggunaan Redux.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">
              Gunakan Redux Ketika
            </h3>
            <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
              <li>State dibagi banyak komponen</li>
              <li>State complex dengan nested data</li>
              <li>Butuh time-travel debugging</li>
              <li>State updates yang sering</li>
              <li>Tim besar dengan banyak developer</li>
              <li>Logic state yang kompleks</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Redux Mungkin Berlebihan Jika
            </h3>
            <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
              <li>Aplikasi sederhana dengan sedikit state</li>
              <li>State hanya dipakai 1-2 komponen</li>
              <li>Local state sudah cukup</li>
              <li>Prototyping atau POC</li>
            </ul>
            <div className="mt-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
              <strong>Alternative:</strong> useState, useContext, Zustand, atau
              React Query untuk server state
            </div>
          </div>
        </div>
      </div>

      {/* Redux Toolkit Setup */}
      <StepCard stepNumber={1} title="Setup Redux Toolkit">
        <p className="mb-4">
          Redux Toolkit menyediakan tools yang mempermudah setup dan penggunaan
          Redux dengan best practices.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Installation" type="info">
            <CodeBlock language="bash">
              {`npm install @reduxjs/toolkit react-redux`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Store Setup" type="success">
            <CodeBlock title="src/components/Contexts/store.ts">
              {`import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';
import todoSlice from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    todos: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Provider Setup" type="success">
            <CodeBlock title="src/components/Contexts/ReduxProvider.tsx">
              {`'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { ReactNode } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

// app/layout.tsx
import ReduxProvider from '@/components/Contexts/ReduxProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Creating Slices */}
      <StepCard stepNumber={2} title="Membuat Slices">
        <p className="mb-4">
          Slice adalah bagian dari Redux state dengan reducers dan actions yang
          terkait.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Counter Slice (Simple)" type="success">
            <CodeBlock title="src/components/Contexts/slices/counterSlice.ts">
              {`import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer makes this immutable
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="User Slice (Complex)" type="success">
            <CodeBlock title="src/components/Contexts/slices/userSlice.ts">
              {`import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.currentUser = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        Object.assign(state.currentUser, action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Using Redux in Components */}
      <StepCard stepNumber={3} title="Menggunakan Redux di Components">
        <p className="mb-4">
          Gunakan hooks useSelector untuk membaca state dan useDispatch untuk
          mengirim actions.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Typed Hooks (Recommended)" type="info">
            <CodeBlock title="src/utils/hooks/redux.ts">
              {`import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@/components/Contexts/store';

// Typed hooks untuk TypeScript
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Counter Component" type="success">
            <CodeBlock title="components/Counter.tsx">
              {`'use client';

import { useAppSelector, useAppDispatch } from '@/utils/hooks/redux';
import { increment, decrement, incrementByAmount, reset } from '@/components/Contexts/slices/counterSlice';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      
      <div className="space-x-2">
        <button 
          onClick={() => dispatch(increment())}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          +
        </button>
        
        <button 
          onClick={() => dispatch(decrement())}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          -
        </button>
        
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          +5
        </button>
        
        <button 
          onClick={() => dispatch(reset())}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="User Profile Component" type="success">
            <CodeBlock title="components/UserProfile.tsx">
              {`'use client';

import { useAppSelector, useAppDispatch } from '@/utils/hooks/redux';
import { logout, updateProfile } from '@/components/Contexts/slices/userSlice';

export default function UserProfile() {
  const { currentUser, isLoading, error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleUpdateName = (newName: string) => {
    dispatch(updateProfile({ name: newName }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  if (!currentUser) {
    return <div>Please login</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      
      <div className="space-y-2 mb-4">
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
        <p><strong>Role:</strong> {currentUser.role}</p>
      </div>
      
      <div className="space-x-2">
        <button 
          onClick={() => handleUpdateName('Updated Name')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Name
        </button>
        
        <button 
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Async Actions with Thunks */}
      <StepCard stepNumber={4} title="Async Actions dengan createAsyncThunk">
        <p className="mb-4">
          Untuk operasi async seperti API calls, gunakan createAsyncThunk untuk
          handling loading states.
        </p>

        <div className="space-y-6">
          <ExampleBox title="Async Thunk untuk User Login" type="success">
            <CodeBlock title="src/components/Contexts/slices/userSlice.ts (Updated)">
              {`import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Async thunk untuk login
export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      return data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk untuk fetch user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId: string) => {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data.user;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Regular reducers...
    logout: (state) => {
      state.currentUser = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Login thunk
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
    
    // Fetch profile thunk
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch profile';
      });
  },
});`}
            </CodeBlock>
          </ExampleBox>

          <ExampleBox title="Login Form Component" type="success">
            <CodeBlock title="components/LoginForm.tsx">
              {`'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import { loginUser } from '@/components/Contexts/slices/userSlice';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispatch async thunk
    const result = await dispatch(loginUser({ email, password }));
    
    if (loginUser.fulfilled.match(result)) {
      // Login successful
      console.log('Login successful!');
    } else {
      // Login failed
      console.error('Login failed:', result.payload);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
}`}
            </CodeBlock>
          </ExampleBox>
        </div>
      </StepCard>

      {/* Best Practices */}
      <div className="bg-white rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Best Practices
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Do</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1 text-sm">
                <li>Gunakan Redux Toolkit, jangan vanilla Redux</li>
                <li>Normalisasi state structure untuk data complex</li>
                <li>Gunakan TypeScript untuk type safety</li>
                <li>Buat typed hooks (useAppSelector, useAppDispatch)</li>
                <li>Pisah logic dan UI dengan thunks</li>
                <li>Use Redux DevTools untuk debugging</li>
              </ul>
            </div>

            <ExampleBox title="State Normalization" type="success">
              <CodeBlock>
                {`// Nested structure (sulit di-update)
{
  users: [
    { id: 1, name: 'John', posts: [{ id: 1, title: 'Hello' }] }
  ]
}

// Normalized structure (mudah di-update)
{
  users: {
    byId: { 1: { id: 1, name: 'John' } },
    allIds: [1]
  },
  posts: {
    byId: { 1: { id: 1, title: 'Hello', userId: 1 } },
    allIds: [1]
  }
}`}
              </CodeBlock>
            </ExampleBox>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Don&apos;t</h3>
              <ul className="list-disc list-inside text-red-700 space-y-1 text-sm">
                <li>Jangan mutate state directly (kecuali dalam RTK)</li>
                <li>Jangan simpan derived state di Redux</li>
                <li>Jangan simpan form state di Redux (gunakan local state)</li>
                <li>Hindari dispatch dalam render cycle</li>
                <li>Jangan overuse Redux untuk local state</li>
              </ul>
            </div>

            <ExampleBox title="Form State (Local, bukan Redux)" type="warning">
              <CodeBlock>
                {`// Jangan begini (form state di Redux)
const email = useAppSelector(state => state.form.email);

// Form state lokal
const [email, setEmail] = useState('');

// Redux hanya untuk data yang dibagi komponen
const user = useAppSelector(state => state.user.currentUser);`}
              </CodeBlock>
            </ExampleBox>
          </div>
        </div>
      </div>

      {/* Redux DevTools */}
      <div className="bg-linear-to-r from-purple-50 text-black to-blue-50 rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Redux DevTools
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Time-travel debugging</li>
              <li>Action replay</li>
              <li>State inspection</li>
              <li>Performance monitoring</li>
              <li>Test action dispatching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Installation</h3>
            <p className="text-sm mb-2">Install browser extension:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Chrome: Redux DevTools
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Firefox: Redux DevTools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
