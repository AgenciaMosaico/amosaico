import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus,
  Search,
  Filter,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Edit,
  Trash2,
  User,
  Calendar,
  Clock,
  FileText,
  Mic,
  Video,
  Star,
  Quote
} from 'lucide-react'

const Testimonials = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [playingAudio, setPlayingAudio] = useState(null)

  const categories = [
    { id: 'all', name: 'Todos', color: 'bg-gray-100 text-gray-800' },
    { id: 'founders', name: 'Fundadores', color: 'bg-blue-100 text-blue-800' },
    { id: 'leaders', name: 'Líderes', color: 'bg-green-100 text-green-800' },
    { id: 'employees', name: 'Colaboradores', color: 'bg-purple-100 text-purple-800' },
    { id: 'clients', name: 'Clientes', color: 'bg-orange-100 text-orange-800' },
    { id: 'partners', name: 'Parceiros', color: 'bg-pink-100 text-pink-800' },
  ]

  const types = [
    { id: 'all', name: 'Todos os Tipos' },
    { id: 'text', name: 'Texto' },
    { id: 'audio', name: 'Áudio' },
    { id: 'video', name: 'Vídeo' },
  ]

  const testimonials = [
    {
      id: 1,
      title: 'A Fundação da Empresa',
      author: 'João Silva',
      role: 'Fundador e CEO',
      category: 'founders',
      type: 'video',
      duration: '15:30',
      date: '2024-01-15',
      summary: 'Relato sobre os primeiros dias da empresa, desafios iniciais e a visão que guiou o crescimento.',
      content: 'Quando fundamos a empresa em 1985, tínhamos apenas uma pequena sala e um grande sonho. Os primeiros anos foram desafiadores, mas nossa paixão por inovação nos manteve firmes...',
      tags: ['fundação', 'história', 'visão', 'desafios'],
      featured: true,
    },
    {
      id: 2,
      title: 'Evolução da Cultura Organizacional',
      author: 'Maria Santos',
      role: 'Diretora de RH',
      category: 'leaders',
      type: 'audio',
      duration: '8:45',
      date: '2024-01-12',
      summary: 'Como a cultura da empresa evoluiu ao longo dos anos e o impacto nas pessoas.',
      content: 'A cultura sempre foi o coração da nossa organização. Vimos uma transformação incrível na forma como as pessoas se conectam com nossos valores...',
      tags: ['cultura', 'pessoas', 'valores', 'evolução'],
      featured: false,
    },
    {
      id: 3,
      title: 'Memórias de 30 Anos de Carreira',
      author: 'Carlos Lima',
      role: 'Ex-Diretor Técnico',
      category: 'employees',
      type: 'text',
      duration: null,
      date: '2024-01-10',
      summary: 'Reflexões sobre três décadas de dedicação e as mudanças tecnológicas presenciadas.',
      content: 'Entrei na empresa como estagiário em 1990 e acompanhei toda a revolução digital. Ver a empresa crescer e se adaptar às novas tecnologias foi extraordinário. Cada projeto trouxe aprendizados únicos e contribuiu para formar a organização que conhecemos hoje.',
      tags: ['carreira', 'tecnologia', 'crescimento', 'experiência'],
      featured: false,
    },
    {
      id: 4,
      title: 'Parceria Estratégica de Longa Data',
      author: 'Ana Costa',
      role: 'CEO - Empresa Parceira',
      category: 'partners',
      type: 'video',
      duration: '12:15',
      date: '2024-01-08',
      summary: 'A história de uma parceria que transformou ambas as organizações.',
      content: 'Nossa parceria começou em 1995 e se tornou um exemplo de colaboração estratégica. Juntos, desenvolvemos soluções inovadoras que beneficiaram todo o mercado...',
      tags: ['parceria', 'colaboração', 'inovação', 'mercado'],
      featured: true,
    },
    {
      id: 5,
      title: 'Impacto Social na Comunidade',
      author: 'Pedro Oliveira',
      role: 'Líder Comunitário',
      category: 'clients',
      type: 'audio',
      duration: '6:20',
      date: '2024-01-05',
      summary: 'Como os projetos sociais da empresa transformaram a comunidade local.',
      content: 'Os investimentos sociais da empresa mudaram nossa comunidade. Vimos jovens ganharem oportunidades e famílias prosperarem...',
      tags: ['impacto social', 'comunidade', 'transformação', 'oportunidades'],
      featured: false,
    },
  ]

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || testimonial.category === selectedCategory
    const matchesType = selectedType === 'all' || testimonial.type === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  const featuredTestimonials = filteredTestimonials.filter(t => t.featured)

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return Video
      case 'audio': return Mic
      case 'text': return FileText
      default: return FileText
    }
  }

  const getTypeColor = (type) => {
    const colors = {
      video: 'bg-red-100 text-red-800',
      audio: 'bg-green-100 text-green-800',
      text: 'bg-blue-100 text-blue-800',
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  const toggleAudio = (id) => {
    setPlayingAudio(playingAudio === id ? null : id)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Depoimentos e Narrativas</h1>
          <p className="text-gray-600 mt-1">Preserve as histórias e experiências das pessoas</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Novo Depoimento
        </Button>
      </div>

      {/* Featured Testimonials */}
      {featuredTestimonials.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Depoimentos em Destaque</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredTestimonials.map((testimonial) => {
              const TypeIcon = getTypeIcon(testimonial.type)
              return (
                <Card key={testimonial.id} className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <TypeIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{testimonial.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-2 mt-1">
                            <User className="h-4 w-4" />
                            <span>{testimonial.author} • {testimonial.role}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 mr-1" />
                        Destaque
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{testimonial.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                        </div>
                        {testimonial.duration && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {testimonial.duration}
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        {testimonial.type === 'audio' && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleAudio(testimonial.id)}
                          >
                            {playingAudio === testimonial.id ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar depoimentos, pessoas, temas..."
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
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {types.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
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

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTestimonials.filter(t => !t.featured).map((testimonial) => {
          const TypeIcon = getTypeIcon(testimonial.type)
          return (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <TypeIcon className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base">{testimonial.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.author} • {testimonial.role}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className={getTypeColor(testimonial.type)}>
                    {testimonial.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm line-clamp-3">{testimonial.summary}</p>
                  
                  {testimonial.type === 'text' && (
                    <div className="p-3 bg-gray-50 rounded-lg border-l-4 border-l-gray-300">
                      <Quote className="h-4 w-4 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 italic line-clamp-2">
                        "{testimonial.content.substring(0, 120)}..."
                      </p>
                    </div>
                  )}

                  {testimonial.type === 'audio' && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleAudio(testimonial.id)}
                          >
                            {playingAudio === testimonial.id ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                          <span className="text-sm text-gray-600">{testimonial.duration}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          {playingAudio === testimonial.id ? (
                            <VolumeX className="h-4 w-4" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  )}

                  {testimonial.type === 'video' && (
                    <div className="relative bg-gray-900 rounded-lg aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="ghost" className="text-white hover:bg-white/20">
                          <Play className="h-8 w-8" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {testimonial.duration}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {testimonial.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {testimonial.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{testimonial.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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

      {/* Empty state */}
      {filteredTestimonials.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Quote className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum depoimento encontrado</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedCategory !== 'all' || selectedType !== 'all'
                ? 'Tente ajustar os filtros para encontrar depoimentos.'
                : 'Comece registrando o primeiro depoimento da sua organização.'}
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Depoimento
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Testimonials

