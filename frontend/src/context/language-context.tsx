"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    "Selecionar Idioma / Select Language": "Selecionar Idioma",
    "Português": "Português",
    "English": "Inglês",

    "Olá,": "Olá,",
    "chegou a hora de entrar na aventura": "chegou a hora de entrar na aventura",
    "no conecimento": "no conhecimento",
    "Meu Desempenho": "Meu Desempenho",
    "essa é a sua avaliação no sistema": "essa é a sua avaliação no sistema",
    "use para comprar itens na loja": "use para comprar itens na loja",
    "pts para o próximo level": "pts para o próximo level",
    "Parabéns, você está em primeiro lugar na turma": "Parabéns, você está em primeiro lugar na turma",
    "Missões": "Missões",

    "gemini": "gemini",
    "dev": "dev",

    "Pesquisar Atividade": "Pesquisar Atividade",
    "Aprovar": "Aprovar",
    "Reprovar": "Reprovar",
    "Detalhes": "Detalhes",
    "Remover": "Remover",

    "Esse é o seu inventário. Aqui você encontra todos os itens que comprou na nossa loja. Para ativar um item comprado, você deve entrar em contato com o professor no momento adequado. Use os itens com sabedoria.": "Esse é o seu inventário. Aqui você encontra todos os itens que comprou na nossa loja. Para ativar um item comprado, você deve entrar em contato com o professor no momento adequado. Use os itens com sabedoria.",
    "Seus Itens": "Seus Itens",
    "Carregando inventário...": "Carregando inventário...",
    "Seu inventário está vazio. Visite a loja para comprar itens!": "Seu inventário está vazio. Visite a loja para comprar itens!",
    "Quantidade:": "Quantidade:",

    "Bem vindo a nossa loja. Aqui você encontra itens que irão te ajudar na sua jornada": "Bem vindo a nossa loja. Aqui você encontra itens que irão te ajudar na sua jornada",
    "Itens Disponíveis": "Itens Disponíveis",
    "Carregando itens da loja...": "Carregando itens da loja...",
    "Nenhum item disponível na loja no momento.": "Nenhum item disponível na loja no momento.",
    "Comprar": "Comprar",

    "Aqui você encontra as missões que precisa realizar. Uma missão pode ser uma tarefa ou um questionário": "Aqui você encontra as missões que precisa realizar. Uma missão pode ser uma tarefa ou um questionário",
    "Pendentes": "Pendentes",
    "Concluídas": "Concluídas",
    "Atrasadas": "Atrasadas",
    "Carregando missões...": "Carregando missões...",
    "Nenhuma missão pendente encontrada.": "Nenhuma missão pendente encontrada.",
    "Nenhuma missão concluída encontrada.": "Nenhuma missão concluída encontrada.",
    "Nenhuma missão atrasada encontrada.": "Nenhuma missão atrasada encontrada.",

    "Meu Perfil": "Meu Perfil",
    "Informações Pessoais": "Informações Pessoais",
    "Nome:": "Nome:",
    "Email:": "Email:",
    "Estatísticas": "Estatísticas",
    "Nível:": "Nível:",
    "XP Total:": "XP Total:",
    "Missões Concluídas:": "Missões Concluídas:",
    "Editar Perfil": "Editar Perfil",

    "Aqui você pode acompanhar a sua nota na disciplina. A nota exibida é uma referência e não é a nota final da disciplina. A nota final será calculada ao final do semestre.": "Here you can track your grade in the subject. The displayed grade is a reference and is not the final grade for the subject. The final grade will be calculated at the end of the semester.",
    "Suas Notas": "Your Grades",
    "Sistema de avaliação em desenvolvimento": "Assessment system in development",
    "Avaliação 1": "Assessment 1",
    "Avaliação 2": "Assessment 2",
    "Avaliação Final": "Final Assessment",
    "pontos": "points",
    "As notas serão atualizadas automaticamente conforme você progride nas atividades.": "Grades will be updated automatically as you progress through activities.",

    "Realizar Missão": "Realizar Missão",
    "Voltar para Missões": "Voltar para Missões",
    "Descrição da Missão": "Descrição da Missão",
    "Iniciar Missão": "Iniciar Missão",
    "Finalizar Missão": "Finalizar Missão",
    "Missão concluída com sucesso!": "Missão concluída com sucesso!",

    "Pesquisar": "Pesquisar",
    "Salvar": "Salvar",
    "Cancelar": "Cancelar",
    "Editar": "Editar",
    "Adicionar": "Adicionar",
    "Excluir": "Excluir",
    "Confirmar": "Confirmar",
    "Voltar": "Voltar",
    "Próximo": "Próximo",
    "Anterior": "Anterior",
    "Carregando": "Carregando",
    "Erro": "Erro",
    "Sucesso": "Sucesso",
    "Aviso": "Aviso",
    "Informação": "Informação",
  },
  en: {
    "Selecionar Idioma / Select Language": "Select Language",
    "Português": "Portuguese",
    "English": "English",

    "Olá,": "Hello,",
    "chegou a hora de entrar na aventura": "it's time to embark on the adventure",
    "no conecimento": "of knowledge",
    "Meu Desempenho": "My Performance",
    "essa é a sua avaliação no sistema": "this is your system rating",
    "use para comprar itens na loja": "use to buy items in the store",
    "pts para o próximo level": "pts to next level",
    "Parabéns, você está em primeiro lugar na turma": "Congratulations, you're first in the class",
    "Missões": "Missions",

    "gemini": "gemini",
    "dev": "dev",

    "Pesquisar Atividade": "Search Activity",
    "Aprovar": "Approve",
    "Reprovar": "Reject",
    "Detalhes": "Details",
    "Remover": "Remove",

    "Esse é o seu inventário. Aqui você encontra todos os itens que comprou na nossa loja. Para ativar um item comprado, você deve entrar em contato com o professor no momento adequado. Use os itens com sabedoria.": "This is your inventory. Here you can find all the items you purchased in our store. To activate a purchased item, you must contact the teacher at the appropriate time. Use the items wisely.",
    "Seus Itens": "Your Items",
    "Carregando inventário...": "Loading inventory...",
    "Seu inventário está vazio. Visite a loja para comprar itens!": "Your inventory is empty. Visit the store to buy items!",
    "Quantidade:": "Quantity:",

    "Bem vindo a nossa loja. Aqui você encontra itens que irão te ajudar na sua jornada": "Welcome to our store. Here you will find items that will help you on your journey",
    "Itens Disponíveis": "Available Items",
    "Carregando itens da loja...": "Loading store items...",
    "Nenhum item disponível na loja no momento.": "No items available in the store at the moment.",
    "Comprar": "Buy",

    "Aqui você encontra as missões que precisa realizar. Uma missão pode ser uma tarefa ou um questionário": "Here you will find the missions you need to complete. A mission can be a task or a questionnaire",
    "Pendentes": "Pending",
    "Concluídas": "Completed",
    "Atrasadas": "Overdue",
    "Carregando missões...": "Loading missions...",
    "Nenhuma missão pendente encontrada.": "No pending missions found.",
    "Nenhuma missão concluída encontrada.": "No completed missions found.",
    "Nenhuma missão atrasada encontrada.": "No overdue missions found.",

    "Meu Perfil": "My Profile",
    "Informações Pessoais": "Personal Information",
    "Nome:": "Name:",
    "Email:": "Email:",
    "Estatísticas": "Statistics",
    "Nível:": "Level:",
    "XP Total:": "Total XP:",
    "Missões Concluídas:": "Completed Missions:",
    "Editar Perfil": "Edit Profile",

    "Minhas Notas": "My Grades",
    "Visualizar todas as suas notas e avaliações": "View all your grades and evaluations",
    "Carregando notas...": "Loading grades...",
    "Nenhuma nota encontrada.": "No grades found.",

    "Ranking da Turma": "Class Ranking",
    "Veja como você se compara com seus colegas": "See how you compare to your classmates",
    "Posição": "Position",
    "Nome": "Name",
    "Pontuação": "Score",
    "Carregando ranking...": "Loading ranking...",
    "Nenhum ranking disponível.": "No ranking available.",

    "Realizar Missão": "Complete Mission",
    "Voltar para Missões": "Back to Missions",
    "Descrição da Missão": "Mission Description",
    "Iniciar Missão": "Start Mission",
    "Finalizar Missão": "Complete Mission",
    "Missão concluída com sucesso!": "Mission completed successfully!",

    "Pesquisar": "Search",
    "Salvar": "Save",
    "Cancelar": "Cancel",
    "Editar": "Edit",
    "Adicionar": "Add",
    "Excluir": "Delete",
    "Confirmar": "Confirm",
    "Voltar": "Back",
    "Próximo": "Next",
    "Anterior": "Previous",
    "Carregando": "Loading",
    "Erro": "Error",
    "Sucesso": "Success",
    "Aviso": "Warning",
    "Informação": "Information",
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, variables?: Record<string, any>): string => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;

    if (variables) {
      Object.keys(variables).forEach(varKey => {
        const placeholder = `{{${varKey}}}`;
        translation = translation.replace(new RegExp(placeholder, 'g'), variables[varKey]);
      });
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
