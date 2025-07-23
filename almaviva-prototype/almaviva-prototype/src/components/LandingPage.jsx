import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Clock, 
  Archive, 
  Users, 
  FileText, 
  Check,
  Star,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Globe,
  Heart,
  TrendingUp,
  Award
} from 'lucide-react'

const LandingPage = ({ onGetStarted }) => {
  const features = [
    {
      icon: Clock,
      title: 'Linha do Tempo Interativa',
      description: 'Crie uma cronologia visual da sua organização com eventos, fotos e documentos organizados por categorias.',
    },
    {
      icon: Archive,
      title: 'Acervo Digital Completo',
      description: 'Organize documentos, imagens e vídeos com sistema de busca avançada e categorização inteligente.',
    },
    {
      icon: Users,
      title: 'Depoimentos e Narrativas',
      description: 'Registre entrevistas com fundadores, líderes e colaboradores em texto, áudio ou vídeo.',
    },
    {
      icon: FileText,
      title: 'Páginas Temáticas',
      description: 'Templates prontos para criar páginas como "Nossa História", "Galeria de Presidentes" e "Legado Social".',
    },
    {
      icon: Shield,
      title: 'Segurança e Backup',
      description: 'Seus dados protegidos com backup automático e controle de acesso por perfis de usuário.',
    },
    {
      icon: Zap,
      title: 'IA para Storytelling',
      description: 'Tecnologia de inteligência artificial para ativar estrategicamente a memória organizacional.',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 79',
      period: '/mês',
      description: 'Ideal para pequenas empresas começando a preservar sua história',
      features: [
        'Até 5 usuários',
        '1GB de armazenamento',
        'Linha do tempo básica',
        'Upload de arquivos',
        'Suporte por email',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para empresas que querem explorar todo o potencial da memória organizacional',
      features: [
        'Até 25 usuários',
        '10GB de armazenamento',
        'Todas as funcionalidades',
        'Páginas temáticas ilimitadas',
        'Analytics avançados',
        'Suporte prioritário',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'R$ 399',
      period: '/mês',
      description: 'Solução completa para grandes organizações com necessidades avançadas',
      features: [
        'Usuários ilimitados',
        '100GB de armazenamento',
        'IA para storytelling',
        'Integração com sistemas',
        'Treinamento personalizado',
        'Suporte 24/7',
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Diretora de RH',
      company: 'TechCorp Brasil',
      content: 'A AlmaViva transformou como preservamos e compartilhamos nossa história. O engajamento dos colaboradores aumentou significativamente.',
      rating: 5,
    },
    {
      name: 'João Silva',
      role: 'CEO',
      company: 'Inovação & Cia',
      content: 'Finalmente conseguimos organizar 30 anos de história da empresa de forma profissional e acessível. Recomendo para qualquer organização.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Gerente de Comunicação',
      company: 'Grupo Futuro',
      content: 'A funcionalidade de storytelling com IA nos ajudou a criar narrativas poderosas para nossos stakeholders. Ferramenta indispensável.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AV</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">AlmaViva</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Funcionalidades</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Preços</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Depoimentos</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Entrar</Button>
              <Button onClick={onGetStarted} className="bg-blue-600 hover:bg-blue-700">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme a História da Sua
              <span className="text-blue-600 block">Organização em Valor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Crie um centro de memória digital completo para preservar, organizar e ativar estrategicamente 
              a história da sua empresa com tecnologia de ponta e storytelling inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={onGetStarted} size="lg" className="bg-blue-600 hover:bg-blue-700">
                Começar Teste Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Teste gratuito por 14 dias • Sem cartão de crédito • Suporte em português
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para preservar sua história
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Funcionalidades completas para criar, organizar e compartilhar a memória da sua organização
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-3 bg-blue-100 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que investir na memória organizacional?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fortalece o Sentimento de Pertencimento</h3>
                    <p className="text-gray-600">Colaboradores que conhecem a história da empresa se sentem mais conectados e engajados.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Melhora a Tomada de Decisão</h3>
                    <p className="text-gray-600">Acesso a informações históricas confiáveis para decisões estratégicas mais assertivas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fortalece a Marca e Reputação</h3>
                    <p className="text-gray-600">Uma história bem contada diferencia sua organização no mercado e gera confiança.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Preserva o Conhecimento</h3>
                    <p className="text-gray-600">Evita a perda de conhecimento institucional com a saída de colaboradores experientes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
                  <Zap className="h-4 w-4 mr-2" />
                  Powered by AI
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Storytelling Inteligente</h3>
                <p className="text-gray-600">
                  Nossa IA analisa seu acervo e sugere narrativas poderosas para diferentes audiências
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic">
                    "Com base nos documentos de 1985-1990, identifiquei 3 marcos fundamentais que podem ser destacados na página 'Nossa Jornada de Inovação'..."
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Experimentar IA Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos para cada necessidade
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para o tamanho e necessidades da sua organização
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={onGetStarted}
                  >
                    Começar Teste Gratuito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Organizações que já transformaram sua memória em valor estratégico
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar sua história em valor?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comece hoje mesmo a preservar e ativar a memória da sua organização. 
            Teste gratuito por 14 dias, sem compromisso.
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Começar Teste Gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AV</span>
                </div>
                <span className="ml-2 text-xl font-bold">AlmaViva</span>
              </div>
              <p className="text-gray-400">
                Transformando história organizacional em valor estratégico através da tecnologia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white">Preços</a></li>
                <li><a href="#" className="hover:text-white">Segurança</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white">Documentação</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Comunidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AlmaViva. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

