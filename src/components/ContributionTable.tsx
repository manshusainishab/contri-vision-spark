import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Contribution {
  id: string;
  commit: string;
  message: string;
  date: string;
  additions: number;
  deletions: number;
  files: number;
}

interface ContributionTableProps {
  data: Contribution[];
}

export function ContributionTable({ data }: ContributionTableProps) {
  return (
    <Card className="glass-card p-6">
      <h3 className="text-lg font-semibold mb-4">Detailed Contributions</h3>
      <div className="rounded-lg border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-muted/50">
              <TableHead className="text-muted-foreground">Commit</TableHead>
              <TableHead className="text-muted-foreground">Message</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground text-right">Additions</TableHead>
              <TableHead className="text-muted-foreground text-right">Deletions</TableHead>
              <TableHead className="text-muted-foreground text-right">Files</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((contribution) => (
              <TableRow key={contribution.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-mono text-sm text-primary">
                  {contribution.commit}
                </TableCell>
                <TableCell className="max-w-md truncate">{contribution.message}</TableCell>
                <TableCell className="text-muted-foreground">{contribution.date}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                    +{contribution.additions}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/30">
                    -{contribution.deletions}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {contribution.files}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
