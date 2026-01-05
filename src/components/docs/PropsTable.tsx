import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/Table";

export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-medium">
                  {prop.name}
                </code>
              </TableCell>
              <TableCell>
                <code className="text-sm text-muted-foreground">{prop.type}</code>
              </TableCell>
              <TableCell>
                <code className="text-sm text-muted-foreground">{prop.default}</code>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {prop.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
