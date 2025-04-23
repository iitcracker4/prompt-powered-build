
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Pencil, Trash } from "lucide-react";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  status: string;
  updatedAt: Date;
}

export const ProjectCard = ({
  id,
  name,
  description,
  status,
  updatedAt,
}: ProjectCardProps) => {
  const statusColors: Record<string, string> = {
    draft: "bg-yellow-100 text-yellow-800",
    generating: "bg-blue-100 text-blue-800",
    ready: "bg-green-100 text-green-800",
    deployed: "bg-purple-100 text-purple-800",
  };
  
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div
            className={`px-2 py-1 text-xs rounded-full ${
              statusColors[status] || "bg-gray-100 text-gray-800"
            }`}
          >
            {status}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center mt-3 text-xs text-muted-foreground">
          <Clock size={14} className="mr-1" />
          <span>Updated {new Date(updatedAt).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3 border-t">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/workspace/${id}`}>
            <Pencil size={14} className="mr-1" /> Edit
          </Link>
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <ExternalLink size={14} />
          </Button>
          <Button variant="ghost" size="icon" className="text-red-500">
            <Trash size={14} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
