"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, Trophy, Building2 } from "lucide-react"
import { StatCard } from "@/components/start-card"
import { getAllAtributos, getQtUsers, getTurmas } from "@/lib/api/generated"


export default function DashboardPage() {
  const [stats, setStats] = useState({
    users: 0,
    turmas: 0,
    missoes: 0,
    instituicoes: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      const {data: user} = await getQtUsers()
      const {data: turma} = await getTurmas()
      
 
      const [users, turmas, missoes, instituicoes] = [(user),(turma),(4),(2)]

      setStats({
        users: users,
        turmas: turmas,
        missoes: missoes,
        instituicoes: instituicoes
      })
    } catch (error) {
      console.error("Erro ao carregar estatísticas:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 p-5">
      <div>
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Visão geral do sistema educacional gamificado</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total de Usuários" value={stats.users} icon={Users} description="Alunos e administradores" />
        <StatCard title="Turmas Ativas" value={stats.turmas} icon={GraduationCap} description="Turmas cadastradas" />
        <StatCard title="Missões Criadas" value={stats.missoes} icon={Trophy} description="Desafios disponíveis" />
        <StatCard
          title="Instituições"
          value={stats.instituicoes}
          icon={Building2}
          description="Instituições de ensino"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo ao Sistema</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Este é um sistema de gestão educacional com elementos de gamificação. Use o menu lateral para navegar
              entre as diferentes seções:
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Gerencie usuários e suas permissões</li>
              <li>Organize turmas e alunos</li>
              <li>Crie missões com recompensas</li>
              <li>Configure instituições de ensino</li>
              <li>Defina níveis de progressão</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recursos do Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Sistema de Recompensas</p>
                  <p className="text-xs text-muted-foreground">Diamantes, esmeraldas, moedas, rubys e XP</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Gestão de Turmas</p>
                  <p className="text-xs text-muted-foreground">Organize alunos em turmas e períodos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Controle de Acesso</p>
                  <p className="text-xs text-muted-foreground">Roles de usuário (ADMIN e USER)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
