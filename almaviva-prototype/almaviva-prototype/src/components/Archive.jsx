import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Upload,
  Search,
  Filter,
  Grid3X3,
  List,
  File,
  Image,
  Video,
  FileText,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Folder,
  FolderOpen
} from 'lucide-react'

const Archive = () => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFolder, setSelectedFolder] = useState(null)

  const categories = [
    { id: 'all', name: 'Todos', color: 'bg-gray-100 text-gray-800' },
    { id: 'documents', name: 'Documentos', color: 'bg-blue-100 text-blue-800' },
    { id: 'images', name: 'Imagens', color: 'bg-green-100 text-green-800' },
    { id: 'videos', name: 'Vídeos', color: 'bg-purple-100 text-purple-800' },
    { id: 'audio', name: 'Áudio', color: 'bg-yellow-100 text-yellow-800' },
  ]

  const folders = [
    { id: 1, name: 'Fundação', itemCount: 45 },
    { id: 2, name: 'Eventos Corporativos', itemCount: 128 },
    { id: 3, name: 'Presidentes', itemCount: 23 },
    { id: 4, name: 'Produtos', itemCount: 67 },
    { id: 5, name: 'Filiais', itemCount: 89 },
  ]

  const files = [
    {
      id: 1,
      name: 'Ata de Fundação.pdf',
      type: 'document',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      uploadedBy: 'Maria Silva',
      tags: ['fundação', 'legal', 'histórico'],
      folder: 'Fundação',
      icon: FileText,
    },
    {
      id: 2,
      name: 'Foto Inauguração SP.jpg',
      type: 'image',
      size: '5.2 MB',
      uploadDate: '2024-01-10',
      uploadedBy: 'João Santos',
      tags: ['inauguração', 'são paulo', 'evento'],
      folder: 'Eventos Corporativos',
      icon: Image,
    },
    {
      id: 3,
      name: 'Entrevista Fundador.mp4',
      type: 'video',
      size: '156 MB',
      uploadDate: '2024-01-08',
      uploadedBy: 'Ana Costa',
      tags: ['fundador', 'entrevista', 'história'],
      folder: 'Presidentes',
      icon: Video,
    },
    {
      id: 4,
      name: 'Manual Produto V1.pdf',
      type: 'document',
      size: '8.7 MB',
      uploadDate: '2024-01-05',
      uploadedBy: 'Carlos Lima',
      tags: ['produto', 'manual', 'versão 1'],
      folder: 'Produtos',
      icon: FileText,
    },
    {
      id: 5,
      name: 'Logo Histórico.png',
      type: 'image',
      size: '1.1 MB',
      uploadDate: '2024-01-03',
      uploadedBy: 'Maria Silva',
      tags: ['logo', 'identidade', 'design'],
      folder: 'Fundação',
      icon: Image,
    },
    {
      id: 6,
      name: 'Apresentação Filial RJ.pptx',
      type: 'document',
      size: '12.3 MB',
      uploadDate: '2024-01-01',
      uploadedBy: 'Pedro Oliveira',
      tags: ['filial', 'rio de janeiro', 'apresentação'],
      folder: 'Filiais',
      icon: File,
    },
  ]

  const filteredFiles = files.filter(file => {
    const matchesCategory = selectedCategory === 'all' || file.type === selectedCategory.slice(0, -1)
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getFileIcon = (file) => {
    const IconComponent = file.icon
    return <IconComponent className="h-8 w-8 text-gray-600" />
  }

  const getFileTypeColor = (type) => {
    const colors = {
      document: 'bg-blue-100 text-blue-800',
      image: 'bg-green-100 text-green-800',
      video: 'bg-purple-100 text-purple-800',
      audio: 'bg-yellow-100 text-yellow-800',
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Acervo Digital</h1>
          <p className="text-gray-600 mt-1">Organize e gerencie todos os seus arquivos</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="h-4 w-4 mr-2" />
          Upload de Arquivos
        </Button>
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
                  placeholder="Buscar arquivos, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
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
              <div className="flex border border-gray-300 rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Folders Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Folder className="h-5 w-5 mr-2" />
                Pastas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant={selectedFolder === null ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setSelectedFolder(null)}
              >
                <FolderOpen className="h-4 w-4 mr-2" />
                Todos os arquivos
              </Button>
              {folders.map((folder) => (
                <Button
                  key={folder.id}
                  variant={selectedFolder === folder.id ? 'default' : 'ghost'}
                  className="w-full justify-between"
                  onClick={() => setSelectedFolder(folder.id)}
                >
                  <div className="flex items-center">
                    <Folder className="h-4 w-4 mr-2" />
                    {folder.name}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {folder.itemCount}
                  </Badge>
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start text-blue-600">
                <Plus className="h-4 w-4 mr-2" />
                Nova Pasta
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Files Area */}
        <div className="lg:col-span-3">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredFiles.map((file) => (
                <Card key={file.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        {getFileIcon(file)}
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 truncate" title={file.name}>
                      {file.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{file.size}</span>
                        <Badge className={getFileTypeColor(file.type)}>
                          {file.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">
                        Por {file.uploadedBy} • {new Date(file.uploadDate).toLocaleDateString('pt-BR')}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {file.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {file.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{file.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">Nome</th>
                        <th className="text-left p-4 font-medium text-gray-900">Tipo</th>
                        <th className="text-left p-4 font-medium text-gray-900">Tamanho</th>
                        <th className="text-left p-4 font-medium text-gray-900">Enviado por</th>
                        <th className="text-left p-4 font-medium text-gray-900">Data</th>
                        <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredFiles.map((file) => (
                        <tr key={file.id} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-gray-100 rounded">
                                {getFileIcon(file)}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{file.name}</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {file.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className={getFileTypeColor(file.type)}>
                              {file.type}
                            </Badge>
                          </td>
                          <td className="p-4 text-gray-600">{file.size}</td>
                          <td className="p-4 text-gray-600">{file.uploadedBy}</td>
                          <td className="p-4 text-gray-600">
                            {new Date(file.uploadDate).toLocaleDateString('pt-BR')}
                          </td>
                          <td className="p-4">
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Empty state */}
          {filteredFiles.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Archive className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum arquivo encontrado</h3>
                <p className="text-gray-600 mb-4">
                  {searchTerm || selectedCategory !== 'all' 
                    ? 'Tente ajustar os filtros para encontrar arquivos.'
                    : 'Comece fazendo upload dos seus primeiros arquivos.'}
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Fazer Upload
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default Archive

