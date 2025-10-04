import { MetricCard } from "@/components/MetricCard";
import { TimeTrackingChart } from "@/components/TimeTrackingChart";
import { LinesOfCodeChart } from "@/components/LinesOfCodeChart";
import { ContributionTable } from "@/components/ContributionTable";
import { IssueOverview } from "@/components/IssueOverview";
import { mockContributorData } from "@/data/mockData";
import { Clock, FileCode, GitCommit, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  const { contributor, issue, metrics, timeTracking, linesOfCode, contributions } = mockContributorData;

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Contributor Dashboard</span>
          </h1>
          <p className="text-muted-foreground">Real-time metrics and insights</p>
        </div>
        <div className="flex items-center gap-3 glass-card px-4 py-2">
          <Avatar className="h-10 w-10 border-2 border-primary/30">
            <AvatarFallback className="bg-primary/20 text-primary font-semibold">
              {contributor.avatar}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{contributor.name}</p>
            <p className="text-xs text-muted-foreground">{contributor.email}</p>
          </div>
        </div>
      </header>

      {/* Issue Overview */}
      <div className="mb-8">
        <IssueOverview
          issueNumber={issue.number}
          title={issue.title}
          status={issue.status}
          repository={issue.repository}
          assignedDate={issue.assignedDate}
          totalCommits={issue.totalCommits}
        />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Time Spent"
          value={metrics.timeSpent}
          icon={Clock}
          trend="+12.5% from last week"
          trendUp={true}
        />
        <MetricCard
          title="Lines Changed"
          value={metrics.linesChanged.toLocaleString()}
          icon={FileCode}
          trend={`+${metrics.additions} -${metrics.deletions}`}
          trendUp={true}
        />
        <MetricCard
          title="Files Modified"
          value={metrics.filesModified}
          icon={FileCode}
          trend="Across 3 modules"
          trendUp={true}
        />
        <MetricCard
          title="Total Commits"
          value={metrics.commits}
          icon={GitCommit}
          trend="+8.3% from average"
          trendUp={true}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <TimeTrackingChart data={timeTracking} />
        <LinesOfCodeChart data={linesOfCode} />
      </div>

      {/* Detailed Contributions Table */}
      <ContributionTable data={contributions} />
    </div>
  );
};

export default Index;
