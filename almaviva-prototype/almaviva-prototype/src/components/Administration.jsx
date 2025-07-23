import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Shield,
  Users,
  Settings,
  Database,
  Download,
  Upload,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  User,
  Mail,
  Phone,
  Building,
  Crown,
  Eye,
  EyeOff,
  Key,
  Save,
  RefreshCw,
  HardDrive,
  Activity,
  BarChart3,
  FileText,
  Globe,
  Lock,
  Zap,
  Bell,
  Palette,
  Languages,
  CreditCard,
  Smartphone
} from 'lucide-react'

const Administration = () => {
  const [activeTab, setActiveTab] = useState('users')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')

  const tabs = [
    { id: 'users', name: 'Usuários', icon: Users },
    { id: 'permissions', name: 'Permissões', icon: Shield },
    { id: 'backup', name: 'Backup', icon: Database },
    { id: 'settings', name: 'Configurações', icon: Settings },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  ]

  const roles = [
    { id: 'all', name: 'Todos os Perfis' },
    { id: 'admin', name: 'Administrador' },
    { id: 'editor', name: 'Editor' },
    { id: 'reader', name: 'Leitor' },
  ]

  const users = [
    {
      id: 1,
      name: 'Maria Silva',
      email: 'maria.silva@empresa.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-15 14:30',
      avatar: null,
      phone: '+55 11 99999-0001',
      department: 'TI',
      joinDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'João Santos',
      email: 'joao.santos@empresa.com',
      role: 'editor',
      status: 'active',
      lastLogin: '2024-01-15 10:15',
      avatar: null,
      phone: '+55 11 99999-0002',
      department: 'Marketing',
      joinDate: '2023-03-20',
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana.costa@empresa.com',
      role: 'editor',
      status: 'inactive',
      lastLogin: '2024-01-10 16:45',
      avatar: null,
      phone: '+55 11 99999-0003',
      department: 'RH',
      joinDate: '2023-06-10',
    },
    {
      id: 4,
      name: 'Carlos Lima',
      email: 'carlos.lima@empresa.com',
      role: 'reader',
      status: 'active',
      lastLogin: '2024-01-14 09:20',
      avatar: null,
      phone: '+55 11 99999-0004',
      department: 'Vendas',
      joinDate: '2023-09-05',
    },
    {
      id: 5,
      name: 'Pedro Oliveira',
      email: 'pedro.oliveira@empresa.com',
      role: 'reader',
      status: 'pending',
      lastLogin: null,
      avatar: null,
      phone: '+55 11 99999-0005',
      department: 'Financeiro',
      joinDate: '2024-01-10',
    },
  ]

  const backups = [
    {
      id: 1,
      type: 'Completo',
      date: '2024-01-15 02:00',
      size: '2.4 GB',
      status: 'success',
      duration: '45 min',
    },
    {
      id: 2,
      type: 'Incremental',
      date: '2024-01-14 02:00',
      size: '156 MB',
      status: 'success',
      duration: '8 min',
    },
    {
      id: 3,
      type: 'Incremental',
      date: '2024-01-13 02:00',
      size: '89 MB',
      status: 'success',
      duration: '5 min',
    },
    {
      id: 4,
      type: 'Completo',
      date: '2024-01-12 02:00',
      size: '2.3 GB',
      status: 'error',
      duration: '12 min',
    },
  ]

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'all' || user.role === selectedRole
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role) => {
    const colors = {
      admin: 'bg-red-100 text-red-800',
      editor: 'bg-blue-100 text-blue-800',
      reader: 'bg-green-100 text-green-800',
    }
    return colors[role] || 'bg-gray-100 text-gray-800'
  }

  const getRoleText = (role) => {
    const texts = {
      admin: 'Administrador',
      editor: 'Editor',
      reader: 'Leitor',
    }
    return texts[role] || role
  }

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusText = (status) => {
    const texts = {
      active: 'Ativo',
      inactive: 'Inativo',
      pending: 'Pendente',
    }
    return texts[status] || status
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return CheckCircle
      case 'error': return XCircle
      case 'warning': return AlertTriangle
      default: return CheckCircle
    }
  }

  const getBackupStatusColor = (status) => {
    const colors = {
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const renderUsersTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Usuários</h2>
          <p className="text-gray-600 mt-1">Gerencie usuários, perfis e permissões</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Novo Usuário
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Buscar usuários..."
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
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Usuário</th>
                  <th className="text-left p-4 font-medium text-gray-900">Perfil</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Último Acesso</th>
                  <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                          <div className="text-sm text-gray-500">{user.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getRoleColor(user.role)}>
                        {user.role === 'admin' && <Crown className="h-3 w-3 mr-1" />}
                        {getRoleText(user.role)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(user.status)}>
                        {getStatusText(user.status)}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-900">
                        {user.lastLogin ? new Date(user.lastLogin).toLocaleString('pt-BR') : 'Nunca'}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Key className="h-4 w-4" />
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
    </div>
  )

  const renderPermissionsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Controle de Permissões</h2>
        <p className="text-gray-600 mt-1">Configure permissões por perfil de usuário</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Admin Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Crown className="h-5 w-5 text-red-600 mr-2" />
              Administrador
            </CardTitle>
            <CardDescription>Acesso total ao sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                'Gerenciar usuários',
                'Configurar sistema',
                'Fazer backup',
                'Ver analytics',
                'Editar conteúdo',
                'Publicar páginas',
                'Gerenciar acervo',
                'Moderar depoimentos'
              ].map((permission, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{permission}</span>
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Editor Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Edit className="h-5 w-5 text-blue-600 mr-2" />
              Editor
            </CardTitle>
            <CardDescription>Pode criar e editar conteúdo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Gerenciar usuários', allowed: false },
                { name: 'Configurar sistema', allowed: false },
                { name: 'Fazer backup', allowed: false },
                { name: 'Ver analytics', allowed: true },
                { name: 'Editar conteúdo', allowed: true },
                { name: 'Publicar páginas', allowed: true },
                { name: 'Gerenciar acervo', allowed: true },
                { name: 'Moderar depoimentos', allowed: true }
              ].map((permission, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{permission.name}</span>
                  {permission.allowed ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reader Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 text-green-600 mr-2" />
              Leitor
            </CardTitle>
            <CardDescription>Apenas visualização</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Gerenciar usuários', allowed: false },
                { name: 'Configurar sistema', allowed: false },
                { name: 'Fazer backup', allowed: false },
                { name: 'Ver analytics', allowed: false },
                { name: 'Editar conteúdo', allowed: false },
                { name: 'Publicar páginas', allowed: false },
                { name: 'Gerenciar acervo', allowed: false },
                { name: 'Moderar depoimentos', allowed: false }
              ].map((permission, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{permission.name}</span>
                  <XCircle className="h-4 w-4 text-red-600" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderBackupTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Backup e Restauração</h2>
          <p className="text-gray-600 mt-1">Gerencie backups automáticos e manuais</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Baixar Backup
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <RefreshCw className="h-4 w-4 mr-2" />
            Backup Manual
          </Button>
        </div>
      </div>

      {/* Backup Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Configurações de Backup</CardTitle>
            <CardDescription>Configure a frequência e tipo de backup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Backup Automático
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Diário às 02:00</option>
                <option>A cada 12 horas</option>
                <option>Semanal</option>
                <option>Desabilitado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retenção de Backups
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>30 dias</option>
                <option>60 dias</option>
                <option>90 dias</option>
                <option>1 ano</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Backup
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Incremental</option>
                <option>Completo</option>
                <option>Diferencial</option>
              </select>
            </div>
            <Button className="w-full">
              <Save className="h-4 w-4 mr-2" />
              Salvar Configurações
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status do Sistema</CardTitle>
            <CardDescription>Informações sobre armazenamento e performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <HardDrive className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">Espaço Usado</span>
              </div>
              <span className="text-sm font-medium">2.4 GB / 10 GB</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-sm text-gray-700">Último Backup</span>
              </div>
              <span className="text-sm font-medium">15/01/2024 02:00</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                <span className="text-sm text-gray-700">Status</span>
              </div>
              <Badge className="bg-green-100 text-green-800">Funcionando</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Backup History */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Backups</CardTitle>
          <CardDescription>Últimos backups realizados</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Tipo</th>
                  <th className="text-left p-4 font-medium text-gray-900">Data/Hora</th>
                  <th className="text-left p-4 font-medium text-gray-900">Tamanho</th>
                  <th className="text-left p-4 font-medium text-gray-900">Duração</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                </tr>
              </thead>
              <tbody>
                {backups.map((backup) => {
                  const StatusIcon = getStatusIcon(backup.status)
                  return (
                    <tr key={backup.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        <Badge variant="outline">{backup.type}</Badge>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">
                          {new Date(backup.date).toLocaleString('pt-BR')}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">{backup.size}</div>
                      </td>
                      <td className="p-4">
                        <div className="text-sm text-gray-900">{backup.duration}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <StatusIcon className={`h-4 w-4 mr-2 ${
                            backup.status === 'success' ? 'text-green-600' : 
                            backup.status === 'error' ? 'text-red-600' : 'text-yellow-600'
                          }`} />
                          <Badge className={getBackupStatusColor(backup.status)}>
                            {backup.status === 'success' ? 'Sucesso' : 
                             backup.status === 'error' ? 'Erro' : 'Aviso'}
                          </Badge>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configurações do Sistema</h2>
        <p className="text-gray-600 mt-1">Configure preferências gerais da plataforma</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              Configurações Gerais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Organização
              </label>
              <input
                type="text"
                defaultValue="Empresa Exemplo Ltda"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                rows={3}
                defaultValue="Centro de memória digital da nossa organização"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuso Horário
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>America/Sao_Paulo</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Autenticação de Dois Fatores</div>
                <div className="text-sm text-gray-500">Requer código adicional no login</div>
              </div>
              <Button variant="outline" size="sm">Configurar</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Sessões Simultâneas</div>
                <div className="text-sm text-gray-500">Máximo de sessões por usuário</div>
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>1</option>
                <option>3</option>
                <option>5</option>
                <option>Ilimitado</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Tempo de Sessão</div>
                <div className="text-sm text-gray-500">Logout automático após inatividade</div>
              </div>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>30 min</option>
                <option>1 hora</option>
                <option>4 horas</option>
                <option>8 horas</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Aparência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Logo da Organização
              </label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building className="h-8 w-8 text-gray-400" />
                </div>
                <Button variant="outline">Alterar Logo</Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cor Principal
              </label>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded border"></div>
                <input
                  type="color"
                  defaultValue="#2563eb"
                  className="w-16 h-8 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tema
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Claro</option>
                <option>Escuro</option>
                <option>Automático</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Email de Backup</div>
                <div className="text-sm text-gray-500">Notificar sobre status de backup</div>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Novos Usuários</div>
                <div className="text-sm text-gray-500">Notificar sobre novos cadastros</div>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Conteúdo Pendente</div>
                <div className="text-sm text-gray-500">Notificar sobre conteúdo para revisão</div>
              </div>
              <input type="checkbox" defaultChecked className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Relatórios Semanais</div>
                <div className="text-sm text-gray-500">Resumo semanal de atividades</div>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancelar</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Save className="h-4 w-4 mr-2" />
          Salvar Configurações
        </Button>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics e Relatórios</h2>
        <p className="text-gray-600 mt-1">Acompanhe o uso e performance da plataforma</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Usuários Ativos</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
                <p className="text-xs text-green-600">+12% vs. mês anterior</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Conteúdo Criado</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
                <p className="text-xs text-green-600">+8% vs. mês anterior</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Visualizações</p>
                <p className="text-2xl font-bold text-gray-900">3,247</p>
                <p className="text-xs text-green-600">+23% vs. mês anterior</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <HardDrive className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Armazenamento</p>
                <p className="text-2xl font-bold text-gray-900">2.4 GB</p>
                <p className="text-xs text-gray-600">de 10 GB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Atividade dos Usuários</CardTitle>
            <CardDescription>Últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Gráfico de atividade dos usuários</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conteúdo Mais Acessado</CardTitle>
            <CardDescription>Top 10 páginas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Nossa História', views: 1247 },
                { name: 'Galeria de Presidentes', views: 892 },
                { name: 'Inovações Tecnológicas', views: 634 },
                { name: 'Prêmios e Certificações', views: 445 },
                { name: 'Legado Social', views: 312 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(item.views / 1247) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{item.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Administração</h1>
          <p className="text-gray-600 mt-1">Gerencie usuários, permissões e configurações do sistema</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'users' && renderUsersTab()}
        {activeTab === 'permissions' && renderPermissionsTab()}
        {activeTab === 'backup' && renderBackupTab()}
        {activeTab === 'settings' && renderSettingsTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
      </div>
    </div>
  )
}

export default Administration

