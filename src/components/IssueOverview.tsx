import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Clock, FileCode, Calendar } from "lucide-react";

interface IssueOverviewProps {
  issueNumber: number;
  title: string;
  status: string;
  repository: string;
  assignedDate: string;
  totalCommits: number;
}

export function IssueOverview({ 
  issueNumber, 
  title, 
  status, 
  repository,
  assignedDate,
  totalCommits 
}: IssueOverviewProps) {
  return (
    <Card className="glass-card p-6 glow-border">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Issue #{issueNumber}</h2>
          </div>
          <p className="text-lg text-foreground/90 mb-2">{title}</p>
          <p className="text-sm text-muted-foreground">{repository}</p>
        </div>
        <Badge 
          className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30"
        >
          {status}
        </Badge>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Assigned Date</p>
            <p className="text-sm font-medium">{assignedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Total Commits</p>
            <p className="text-sm font-medium">{totalCommits}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
