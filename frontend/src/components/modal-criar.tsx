"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ModalCriarProps {
  titulo: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onCriar: () => void;
  children: React.ReactNode;
  carregando?: boolean;
}

export const ModalCriar = ({
  titulo,
  isOpen,
  onOpenChange,
  onCriar,
  children,
  carregando = false,
}: ModalCriarProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gradient-to-br from-[#2A2D35] to-[#222533] border border-[#3A3D45] text-white">
        <DialogHeader className="border-b border-[#3A3D45] pb-4">
          <DialogTitle className="text-xl font-bold">{titulo}</DialogTitle>
          <DialogDescription className="text-gray-400" />
        </DialogHeader>

        <div className="py-4">{children}</div>

        <DialogFooter className="border-t border-[#3A3D45] pt-4 gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-red-500 text-red-400 hover:text-white hover:bg-red-500/20"
          >
            Cancelar
          </Button>

          <Button
            onClick={() => {
              onCriar();
              onOpenChange(false);
            }}
            disabled={carregando}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold shadow-lg hover:shadow-purple-500/50"
          >
            {carregando ? "Carregando..." : "Criar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

interface InputCriarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputCriar = ({ label, ...props }: InputCriarProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <Input
        {...props}
        className="bg-[#1B1E26] border-[#3A3D45] text-white placeholder-gray-500 focus:border-purple-500"
      />
    </div>
  );
};

interface SelectCriarProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Array<{ value: string | number; label: string }>;
}

export const SelectCriar = ({
  label,
  options = [],
  ...props
}: SelectCriarProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}

      <Select
        onValueChange={(v) =>
          props.onChange?.({
            target: { value: v },
          } as any)
        }
      >
        <SelectTrigger className="bg-[#1B1E26] border-[#3A3D45] text-white">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent className="bg-[#1B1E26] border-[#3A3D45] text-white">
          {options.map((opt) => (
            <SelectItem key={opt.value} value={String(opt.value)}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

interface TextareaCriarProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextareaCriar = ({ label, ...props }: TextareaCriarProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <Textarea
        {...props}
        className="bg-[#1B1E26] border-[#3A3D45] text-white placeholder-gray-500 focus:border-purple-500 resize-none h-24"
      />
    </div>
  );
};
