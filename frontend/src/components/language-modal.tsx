"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const languages = [
  { code: "pt" as const, nameKey: "Português", flag: "🇧🇷" },
  { code: "en" as const, nameKey: "English", flag: "🇺🇸" },
];

export const LanguageModal = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (langCode: "pt" | "en") => {
    setLanguage(langCode);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="w-6 h-6">
          <img className="w-full h-full" src="/globe.svg" alt="Language" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("Selecionar Idioma / Select Language")}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                language === lang.code
                  ? "bg-[#313640] border-[#8E95A7]"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{t(lang.nameKey)}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
