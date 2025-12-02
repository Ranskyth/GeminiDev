import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MissoesSubmissoes } from "@/lib/api/model";

export function ModalDetalhes({
  title,
  id,
  missao,
  status,
}: {
  title?: string;
  id: number | undefined;
  missao?: { conteudo: string; descricao: string; nome: string }
  status?: string;
}) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">{title}</Button>
        </DialogTrigger>
        <DialogContent>
          <h1>ID: {id}</h1>
          <p>Missão: {missao?.nome}</p>
          <p>Status: {status}</p>
        </DialogContent>
      </form>
    </Dialog>
  );
}
