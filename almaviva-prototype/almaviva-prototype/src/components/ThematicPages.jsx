import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Calendar,
  User,
  Globe,
  Lock,
  FileText,
  Image,
  Users,
  Award,
  Building,
  Heart,
  Lightbulb,
  Target,
  TrendingUp,
  ExternalLink,
  Settings
} from 'lucide-react'

const ThematicPages = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const categories = [
    { id: 'all', name: 'Todas', color: 'bg-gray-100 text-gray-800' },
    { id: 'history', name: 'História', color: 'bg-blue-100 text-blue-800' },
    { id: 'leadership', name: 'Liderança', color: 'bg-green-100 text-green-800' },
    { id: 'culture', name: 'Cultura', color: 'bg-purple-100 text-purple-800' },
    { id: 'social', name: 'Social', color: 'bg-orange-100 text-orange-800' },
    { id: 'innovation', name: 'Inovação', color: 'bg-pink-100 text-pink-800' },
  ]

  const statuses = [
    { id: 'all', name: 'Todos os Status' },
    { id: 'published', name: 'Publicado' },
    { id: 'draft', name: 'Rascunho' },
    { id: 'review', name: 'Em Revisão' },
  ]

  const templates = [
    {
      id: 'nossa-historia',
      name: 'Nossa História',
      description: 'Cronologia completa da organização',
      icon: FileText,
      category: 'history',
    },
    {
      id: 'galeria-presidentes',
      name: 'Galeria de Presidentes',
      description: 'Perfis dos líderes da organização',
      icon: Users,
      category: 'leadership',
    },
    {
      id: 'legado-social',
      name: 'Legado Social',
      description: 'Impacto social e responsabilidade',
      icon: Heart,
      category: 'social',
    },
    {
      id: 'cultura-valores',
      name: 'Cultura e Valores',
      description: 'Missão, visão e valores organizacionais',
      icon: Target,
      category: 'culture',
    },
    {
      id: 'inovacao-tecnologia',
      name: 'Inovação e Tecnologia',
      description: 'Marcos tecnológicos e inovações',
      icon: Lightbulb,
      category: 'innovation',
    },
    {
      id: 'premios-reconhecimentos',
      name: 'Prêmios e Reconhecimentos',
      description: 'Conquistas e certificações',
      icon: Award,
      category: 'history',
    },
  ]

  const pages = [
    {
      id: 1,
      title: 'Nossa História - 40 Anos de Inovação',
      template: 'nossa-historia',
      category: 'history',
      status: 'published',
      author: 'Maria Silva',
      lastModified: '2024-01-15',
      views: 1247,
      isPublic: true,
      url: '/nossa-historia',
      description: 'Uma jornada completa desde a fundação até os dias atuais, destacando marcos importantes e transformações.',
    },
    {
      id: 2,
      title: 'Galeria dos Presidentes',
      template: 'galeria-presidentes',
      category: 'leadership',
      status: 'published',
      author: 'João Santos',
      lastModified: '2024-01-12',
      views: 892,
      isPublic: true,
      url: '/presidentes',
      description: 'Perfis detalhados de todos os presidentes que lideraram a organização ao longo dos anos.',
    },
    {
      id: 3,
      title: 'Nosso Compromisso Social',
      template: 'legado-social',
      category: 'social',
      status: 'review',
      author: 'Ana Costa',
      lastModified: '2024-01-10',
      views: 0,
      isPublic: false,
      url: null,
      description: 'Iniciativas sociais, projetos comunitários e impacto positivo na sociedade.',
    },
    {
      id: 4,
      title: 'Cultura Organizacional',
      template: 'cultura-valores',
      category: 'culture',
      status: 'draft',
      author: 'Carlos Lima',
      lastModified: '2024-01-08',
      views: 0,
      isPublic: false,
      url: null,
      description: 'Valores fundamentais, missão e visão que guiam nossas decisões e comportamentos.',
    },
    {
      id: 5,
      title: 'Inovações Tecnológicas',
      template: 'inovacao-tecnologia',
      category: 'innovation',
      status: 'published',
      author: 'Pedro Oliveira',
      lastModified: '2024-01-05',
      views: 634,
      isPublic: true,
      url: '/inovacao',
      description: 'Marcos tecnológicos, patentes e inovações que revolucionaram nosso setor.',
    },
    {
      id: 6,
      title: 'Prêmios e Certificações',
      template: 'premios-reconhecimentos',
      category: 'history',
      status: 'published',
      author: 'Maria Silva',
      lastModified: '2024-01-03',
      views: 445,
      isPublic: true,
      url: '/premios',
      description: 'Reconhecimentos, certificações e prêmios recebidos ao longo da trajetória.',
    },
  ]

  const filteredPages = pages.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || page.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || page.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status) => {
    const colors = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-gray-100 text-gray-800',
      review: 'bg-yellow-100 text-yellow-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status) => {
    const texts = {
      published: 'Publicado',
      draft: 'Rascunho',
      review: 'Em Revisão',
    }
    return texts[status] || status
  }

  const getTemplateIcon = (templateId) => {
    const template = templates.find(t => t.id === templateId)
    return template ? template.icon : FileText
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Páginas Temáticas</h1>
          <p className="text-gray-600 mt-1">Crie páginas especializadas para contar sua história</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nova Página
        </Button>
      </div>

      {/* Templates Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Templates Disponíveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => {
            const IconComponent = template.icon
            return (
              <Card key={template.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar páginas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {statuses.map((status) => (
                    <option key={status.id} value={status.id}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "secondary"}
                    className={`cursor-pointer ${
                      selectedCategory === category.id 
                        ? 'bg-blue-600 text-white' 
                        : category.color
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPages.map((page) => {
          const TemplateIcon = getTemplateIcon(page.template)
          return (
            <Card key={page.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <TemplateIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{page.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {page.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(page.status)}>
                      {getStatusText(page.status)}
                    </Badge>
                    {page.isPublic ? (
                      <Globe className="h-4 w-4 text-green-600" title="Página pública" />
                    ) : (
                      <Lock className="h-4 w-4 text-gray-400" title="Página privada" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {page.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(page.lastModified).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    {page.status === 'published' && (
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {page.views} visualizações
                      </div>
                    )}
                  </div>

                  {page.url && (
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">URL Pública:</span>
                          <code className="text-sm text-green-700 bg-green-100 px-2 py-1 rounded">
                            {page.url}
                          </code>
                        </div>
                        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Visualizar
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Páginas</p>
                <p className="text-2xl font-bold text-gray-900">{pages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Globe className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Páginas Públicas</p>
                <p className="text-2xl font-bold text-gray-900">
                  {pages.filter(p => p.status === 'published').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Edit className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Em Desenvolvimento</p>
                <p className="text-2xl font-bold text-gray-900">
                  {pages.filter(p => p.status === 'draft' || p.status === 'review').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Visualizações</p>
                <p className="text-2xl font-bold text-gray-900">
                  {pages.reduce((total, page) => total + page.views, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Empty state */}
      {filteredPages.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma página encontrada</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all'
                ? 'Tente ajustar os filtros para encontrar páginas.'
                : 'Comece criando sua primeira página temática usando um dos templates disponíveis.'}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Nova Página
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ThematicPages

