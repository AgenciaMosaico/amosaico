import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus,
  Calendar,
  MapPin,
  Users,
  Building,
  Award,
  Rocket,
  Filter,
  Search,
  Edit,
  Eye
} from 'lucide-react'

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Todos', color: 'bg-gray-100 text-gray-800' },
    { id: 'foundation', name: 'Fundação', color: 'bg-blue-100 text-blue-800' },
    { id: 'expansion', name: 'Expansão', color: 'bg-green-100 text-green-800' },
    { id: 'people', name: 'Pessoas', color: 'bg-purple-100 text-purple-800' },
    { id: 'awards', name: 'Prêmios', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'innovation', name: 'Inovação', color: 'bg-orange-100 text-orange-800' },
  ]

  const events = [
    {
      id: 1,
      title: 'Fundação da Empresa',
      date: '1985-03-15',
      category: 'foundation',
      description: 'Início das atividades com apenas 3 funcionários em uma pequena sala comercial.',
      location: 'São Paulo, SP',
      icon: Building,
      images: ['fundacao1.jpg', 'fundacao2.jpg'],
      documents: ['ata_fundacao.pdf'],
    },
    {
      id: 2,
      title: 'Primeiro Funcionário Contratado',
      date: '1985-06-10',
      category: 'people',
      description: 'Maria Silva se torna a primeira funcionária oficial da empresa.',
      location: 'São Paulo, SP',
      icon: Users,
      images: ['maria_silva.jpg'],
    },
    {
      id: 3,
      title: 'Lançamento do Primeiro Produto',
      date: '1987-11-20',
      category: 'innovation',
      description: 'Sistema de gestão empresarial revoluciona o mercado local.',
      location: 'São Paulo, SP',
      icon: Rocket,
      images: ['produto1.jpg'],
      documents: ['manual_produto1.pdf'],
    },
    {
      id: 4,
      title: 'Expansão para o Rio de Janeiro',
      date: '1992-08-05',
      category: 'expansion',
      description: 'Abertura da primeira filial fora de São Paulo.',
      location: 'Rio de Janeiro, RJ',
      icon: MapPin,
      images: ['filial_rj.jpg'],
    },
    {
      id: 5,
      title: 'Prêmio de Inovação Tecnológica',
      date: '1998-12-10',
      category: 'awards',
      description: 'Reconhecimento nacional pela contribuição ao setor de tecnologia.',
      location: 'Brasília, DF',
      icon: Award,
      images: ['premio1998.jpg'],
    },
    {
      id: 6,
      title: 'Expansão Internacional',
      date: '2005-04-22',
      category: 'expansion',
      description: 'Abertura do primeiro escritório internacional em Buenos Aires.',
      location: 'Buenos Aires, Argentina',
      icon: MapPin,
      images: ['argentina.jpg'],
    },
  ]

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0]
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Linha do Tempo</h1>
          <p className="text-gray-600 mt-1">História cronológica da sua organização</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Evento
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
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

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        <div className="space-y-8">
          {filteredEvents.map((event, index) => {
            const categoryInfo = getCategoryInfo(event.category)
            return (
              <div key={event.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Event card */}
                <div className="ml-16 flex-1">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <event.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <div className="flex items-center space-x-4 mt-1">
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(event.date).toLocaleDateString('pt-BR')}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={categoryInfo.color}>
                            {categoryInfo.name}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {event.description}
                      </CardDescription>
                      
                      {/* Attachments */}
                      {(event.images || event.documents) && (
                        <div className="space-y-3">
                          {event.images && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Imagens</h4>
                              <div className="flex space-x-2">
                                {event.images.map((image, idx) => (
                                  <div key={idx} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <span className="text-xs text-gray-500">IMG</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {event.documents && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Documentos</h4>
                              <div className="flex space-x-2">
                                {event.documents.map((doc, idx) => (
                                  <div key={idx} className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700">
                                    {doc}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum evento encontrado</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Tente ajustar os filtros para encontrar eventos.'
                : 'Comece adicionando o primeiro evento à linha do tempo.'}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Primeiro Evento
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Timeline

