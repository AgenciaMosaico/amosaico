import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Clock, 
  Archive, 
  Users, 
  FileText, 
  Plus,
  TrendingUp,
  Calendar,
  Image,
  Video,
  File
} from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      name: 'Itens no Acervo',
      value: '1,247',
      change: '+12%',
      changeType: 'increase',
      icon: Archive,
    },
    {
      name: 'Eventos na Timeline',
      value: '89',
      change: '+5%',
      changeType: 'increase',
      icon: Clock,
    },
    {
      name: 'Depoimentos',
      value: '23',
      change: '+3',
      changeType: 'increase',
      icon: Users,
    },
    {
      name: 'Páginas Criadas',
      value: '7',
      change: '+2',
      changeType: 'increase',
      icon: FileText,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'upload',
      title: 'Fotos da inauguração da filial SP',
      description: 'Adicionado por Maria Silva',
      time: '2 horas atrás',
      icon: Image,
    },
    {
      id: 2,
      type: 'timeline',
      title: 'Novo evento: Expansão para o Nordeste',
      description: 'Adicionado por João Santos',
      time: '5 horas atrás',
      icon: Calendar,
    },
    {
      id: 3,
      type: 'testimonial',
      title: 'Depoimento do fundador gravado',
      description: 'Adicionado por Ana Costa',
      time: '1 dia atrás',
      icon: Video,
    },
    {
      id: 4,
      type: 'document',
      title: 'Ata de fundação digitalizada',
      description: 'Adicionado por Carlos Lima',
      time: '2 dias atrás',
      icon: File,
    },
  ]

  const quickActions = [
    {
      title: 'Adicionar Evento',
      description: 'Criar novo marco na linha do tempo',
      icon: Clock,
      href: '#timeline',
      color: 'bg-blue-500',
    },
    {
      title: 'Upload de Arquivo',
      description: 'Adicionar documento ou mídia',
      icon: Archive,
      href: '#archive',
      color: 'bg-green-500',
    },
    {
      title: 'Novo Depoimento',
      description: 'Registrar história pessoal',
      icon: Users,
      href: '#testimonials',
      color: 'bg-purple-500',
    },
    {
      title: 'Criar Página',
      description: 'Nova página temática',
      icon: FileText,
      href: '#pages',
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Visão geral do seu centro de memória</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Conteúdo
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full bg-blue-100`}>
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                <span className="text-sm text-gray-500 ml-1">vs. mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>
                Adicione conteúdo rapidamente ao seu centro de memória
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action) => (
                <a
                  key={action.title}
                  href={action.href}
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${action.color} mr-3`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{action.title}</p>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>
                Últimas atualizações no seu centro de memória
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Organization Info */}
      <Card>
        <CardHeader>
          <CardTitle>Informações da Organização</CardTitle>
          <CardDescription>
            Dados básicos do seu centro de memória
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Nome da Organização</h3>
              <p className="text-gray-600">Empresa Exemplo Ltda.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Fundação</h3>
              <p className="text-gray-600">15 de março de 1985</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Setor</h3>
              <p className="text-gray-600">Tecnologia e Inovação</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

