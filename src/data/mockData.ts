export const mockContributorData = {
  contributor: {
    name: "Alex Chen",
    avatar: "AC",
    email: "alex.chen@example.com",
    credibilityScore: 87
  },
  issue: {
    number: 1247,
    title: "Implement real-time collaboration feature for document editing",
    status: "In Progress",
    repository: "awesome-org/collaborative-editor",
    assignedDate: "2024-01-15",
    totalCommits: 12
  },
  metrics: {
    timeSpent: "42.5h",
    linesChanged: 2847,
    filesModified: 23,
    commits: 12,
    additions: 1923,
    deletions: 924
  },
  timeTracking: [
    { date: "Jan 15", hours: 4.5 },
    { date: "Jan 16", hours: 6.2 },
    { date: "Jan 17", hours: 3.8 },
    { date: "Jan 18", hours: 5.5 },
    { date: "Jan 19", hours: 7.2 },
    { date: "Jan 22", hours: 4.8 },
    { date: "Jan 23", hours: 6.5 },
    { date: "Jan 24", hours: 4.0 }
  ],
  linesOfCode: [
    { commit: "a1b2c3d", additions: 245, deletions: 89 },
    { commit: "e4f5g6h", additions: 312, deletions: 124 },
    { commit: "i7j8k9l", additions: 189, deletions: 67 },
    { commit: "m0n1o2p", additions: 421, deletions: 156 },
    { commit: "q3r4s5t", additions: 298, deletions: 201 },
    { commit: "u6v7w8x", additions: 458, deletions: 287 }
  ],
  contributions: [
    {
      id: "1",
      commit: "a1b2c3d",
      message: "feat: Add WebSocket connection handler",
      date: "Jan 24, 2024",
      additions: 245,
      deletions: 89,
      files: 4
    },
    {
      id: "2",
      commit: "e4f5g6h",
      message: "refactor: Optimize document sync algorithm",
      date: "Jan 23, 2024",
      additions: 312,
      deletions: 124,
      files: 6
    },
    {
      id: "3",
      commit: "i7j8k9l",
      message: "fix: Resolve cursor position sync issues",
      date: "Jan 23, 2024",
      additions: 189,
      deletions: 67,
      files: 3
    },
    {
      id: "4",
      commit: "m0n1o2p",
      message: "feat: Implement presence indicators",
      date: "Jan 22, 2024",
      additions: 421,
      deletions: 156,
      files: 5
    },
    {
      id: "5",
      commit: "q3r4s5t",
      message: "test: Add integration tests for collab features",
      date: "Jan 19, 2024",
      additions: 298,
      deletions: 201,
      files: 7
    },
    {
      id: "6",
      commit: "u6v7w8x",
      message: "docs: Update API documentation",
      date: "Jan 18, 2024",
      additions: 458,
      deletions: 287,
      files: 2
    }
  ]
};
