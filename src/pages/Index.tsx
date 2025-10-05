import { MetricCard } from "@/components/MetricCard";
import { LinesOfCodeChart } from "@/components/LinesOfCodeChart";
import { ContributionTable } from "@/components/ContributionTable";
import { CircularScore } from "@/components/CircularScore";
import { IssueOverview } from "@/components/IssueOverview";
import { TimeCommitChart } from "@/components/TimeCommitChart";
import { Clock, FileCode, GitCommit } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/${id}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching API data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) return <p className="p-8 text-muted-foreground">Loading dashboard...</p>;
  if (!data) return <p className="p-8 text-red-500">No data found.</p>;

  const { contributor, issue, metrics, timeTracking, linesOfCode, contributions } = data;

  // ✅ Aggregate commits per day
  const commitsPerDay = [];
  if (contributions && contributions.length > 0) {
    const grouped = {};
    contributions.forEach(item => {
      const date = new Date(item.date).toLocaleDateString("en-IN");
      if (!grouped[date]) {
        grouped[date] = { date, commits: 0, hours: 0 };
      }
      grouped[date].commits += 1;
    });

    // (Optional) Merge time tracking if available
    if (timeTracking && timeTracking.length > 0) {
      timeTracking.forEach(t => {
        const date = new Date(t.date).toLocaleDateString("en-IN");
        if (grouped[date]) grouped[date].hours += t.hours || 0;
      });
    }

    commitsPerDay.push(...Object.values(grouped));
  }

  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-2 gradient-text">Issue Dashboard</h1>
          <p className="text-muted-foreground">Real-time metrics and insights</p>
        </div>

        {contributor && (
          <div className="flex items-center gap-4 glass-card px-6 py-3">
            {typeof contributor.credibilityScore === "number" && (
              <CircularScore score={88} />
            )}
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border-2 border-primary/30">
                <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                  {contributor?.avatar || contributor?.name?.[0] || "?"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">{contributor?.name || "Unknown"}</p>
                <p className="text-xs text-muted-foreground">{contributor?.email || "—"}</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Issue Overview */}
      {issue && (
        <div className="mb-8">
          <IssueOverview
            issueNumber={issue.number}
            title={issue.title}
            status={issue.status}
            repository={issue.repository || ""}
            assignedDate={new Date(issue.assignedDate).toLocaleDateString("en-IN")}
            totalCommits={issue.totalCommits}
          />
        </div>
      )}

      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.timeSpent && (
            <MetricCard
              title="Time Spent"
              value={metrics.timeSpent}
              icon={Clock}
              trend="+12.5% from last week"
              trendUp={true}
            />
          )}
          <MetricCard
            title="Lines Changed"
            value={metrics.linesChanged?.toLocaleString() ?? 0}
            icon={FileCode}
            trend={`+${metrics.additions ?? 0} -${metrics.deletions ?? 0}`}
            trendUp={true}
          />
          <MetricCard
            title="Files Modified"
            value={metrics.filesModified ?? 0}
            icon={FileCode}
            trend="Across multiple files"
            trendUp={true}
          />
          <MetricCard
            title="Total Commits"
            value={metrics.commits ?? 0}
            icon={GitCommit}
            trend="+8.3% from average"
            trendUp={true}
          />
        </div>
      )}

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {linesOfCode && linesOfCode.length > 0 && (
          <LinesOfCodeChart data={linesOfCode} />
        )}

        {/* ✅ New Commits per Day Graph */}
        {commitsPerDay.length > 0 && (
          <TimeCommitChart data={commitsPerDay} />
        )}
      </div>

      {/* Contributions Table */}
      {contributions && contributions.length > 0 && (
        <ContributionTable data={contributions} />
      )}
    </div>
  );
};

export default Index;
