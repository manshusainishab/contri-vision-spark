// useApiData.tsx
import { useEffect, useState } from 'react';

// -----------------------------
// Type Definitions
// -----------------------------
export interface Contributor {
  name: string;
  avatar: string;
  email: string;
  credibilityScore: number;
}

export interface Issue {
  number: number;
  title: string;
  status: string;
  repository: string;
  assignedDate: string;
  totalCommits: number;
}

export interface Metrics {
  timeSpent: string;
  linesChanged: number;
  filesModified: number;
  commits: number;
  additions: number;
  deletions: number;
}

export interface LineOfCode {
  commit: string;
  additions: number;
  deletions: number;
}

export interface Contribution {
  id: string;
  commit: string;
  message: string;
  date: string;
  additions: number;
  deletions: number;
  files: number;
}

export interface ApiResponse {
  contributor: Contributor;
  issue: Issue;
  metrics: Metrics;
  linesOfCode: LineOfCode[];
  contributions: Contribution[];
  timeTracking: TimeTracking[];
}

// -----------------------------
// Additional Type Definitions
// -----------------------------
export interface TimeTracking {
  startTime: string;
  endTime: string;
  duration: number;
}

// -----------------------------
// Reusable Hook: useApiData
// -----------------------------
export function useApiData(apiUrl: string) {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiUrl) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const json: ApiResponse = await res.json();
        setData(json);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
}

