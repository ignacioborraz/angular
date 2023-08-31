import { Component } from '@angular/core';
import { Social } from 'src/app/models/social.model';
import { Link } from 'src/app/models/link.model';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  social: Social[] = [
    { name: 'Continuar con Google', photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSEvV1U2Ij1EUBvDfLHw1ZGFrI6nRiFj4iiyZZKmhLLCyRCmLyYIkhWytxsZXs5hJYqXUjIWVIoSU2CBFpKF8dfRO3a73/v+3qSnO5q33PPc89zz33Of2mOHomeH6/gmCNdiKddjIn009wTPcwFgnFTp1MBuncbCLjBPYiTdtuBLBcoygv/KMYiNHawnm4gGWtSx4iu9YisBFXMEe/KwlOIdDCfgbTuIC3jX/Z+EYotNB/Ch1mku0BXcS8GesxotKqf6C5QSXsTtB7cfwdIvHupzgHtY2BT9hYVZ8Hm51ITyB21OYnOA9FjXJGL/NWbH5CNk6xRGcKRG8xuImeRebpkEQA3K+RHAdO5rkJHrxKyFpkyg6XpFgduFaiSD0G0rA+3CxiyRncTjBLMHLEkEkHyeX6CNW4VWBZCXirBY0+UdZN61uGlf+VFLwA/Yi5JuK8KkDOJ5NWoz41XQzbV4Ut/R+iw8F0XPEJIVVzMm6uonteacls+vDKOJbE+MYwJdagsCFDCFVeoD5+q8I7wpfavWjmhctvGgbNmB9c/sfNo/NJbzt1GINQY1ERcz/T/AbYzBHGUm0L68AAAAASUVORK5CYII=' },
    { name: 'Continuar con Microsoft', photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFRJREFUSEtjZKAxYKSx+Qx0t+A/AR/1MDAwMDEwMBQRUAd3OLoPRi2AhdxoEA3iVNRAIH0fg8pbEVAHNwc9H9DcgtGMNprRGEaLa+rX0HSvk6nuBQD8zyQZxquBtQAAAABJRU5ErkJggg==' },
    { name: 'Continuar con Apple', photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAaFJREFUSEu11T9IlWEUBvCfVhpYFE2ZQkRQkUsmQaMEhdIQFUHYGCGNDQ1hEETRJri1BBE0CBoVJYJDi0HQIkHQn61AGoKiISKU4sR74+J97/347vWe8eM9z3PO85xzvg5tjo4241tPgs04gqM4gItRfBFBF47jNIawC9vwGcv4g27sxs4qvBVsKiI4hyn0NinjRqzmOoiK7uFCk8CRFp111uvgLsZbAI/UH0nKGg/2410d8J9YTMmD2NugiPfJ6BqCK5hck/gKd9K3SxhB6NsonuJUTqJZnEmZv3ENc3iIwyVku4kbOYIXGMYvHEMPHmFrCfB4egILOYLXad6jiyW8aQL8K/oQCtR48AQfcBWVbkoW7zauV5LW7sEYHuMQXpZFTtLuwZd6BJXv1WaX4Qljw+D/kdvkLfiODWWQEfLGzYotbkhwEs9Kgj9A7Mg/Y4sIbmECMQ07KjelDuEnXE67kn2Sk2gGZ9Mk3cd5DKC/amTDxGk8z1Vd1MFbHMQo5ktKVfM818E3bMc+fGwHwWrSPc5EXNCWouiX2RJ4JLed4C/bHEMZXsl2vwAAAABJRU5ErkJggg==' },
    { name: 'Continuar con Slack', photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgdJREFUSEu11EnIjWEUB/DfZ1ZKigxLkkhkocg8RRFbC2zMCzthpyTjCgssCFnYSJmKzCshlAUbw86wECVJSEfnfj337X73rZvv2by953nO+f/P/wxdevl09XJ8dQDjcRzTcAXrk9BprMATbMa7nojWAZzFusJ5CfrjemE7ga3/C2BHBjpUBLyDRZ0CTMB9jMwAO/N7sAh4Fws7BQi/gZiOfniN1egog0nYmAWtEvqKSziD7ThcPLiNxZiJLfiMk3gVb8oi38O8mradimWoSrQS7zEk/W8hGqIJ4BNG1ACEPANwrnh3EXvxrLAF2JgqwH7sagMQBMYlqTcYjt/J9AueFr57sLsKEP8zUoIqTjCKmfiRF4OxBg/xAqNS/7i+hseNAGUNBmFpUeQYoA+YnbareJuOY7EKQ1tkHFLdaJApAULXtYVDrIe5OJK2PylLtG1k1O7EKvm3VkqAaK9hhVd0zD4sL2xBoE/K1Q7gY8rWBPAAc9Ir+n506rmgiBSTHKuhW+MeULqnu8xgMjZhSjK/iRiicg3ELoohi/Sj91vV4HkO2stWXVQl1ArgQrbrLzzCz3Za1a3rVgARr7GLvmWNQt6Wpw4gtJxfqUH4HChs5yvd1wRUB3AU2wqP2EN9s/gN8yls6DSDiTiWg3a5CBRbNYr8HbMQq6MjiWrmqf66TqL6CDUv/gKbWWIZD0WWYQAAAABJRU5ErkJggg==' },
  ]
  links: Link[] = [
    { name: 'Plantillas', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Precios', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Aplicaciones', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Trabajos', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Blog', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Desarrolladores', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Acerca de', to: '', color: 'text-gray-600', size: '12px' },
    { name: 'Ayuda', to: '', color: 'text-gray-600', size: '12px' }
  ]
  user_login: Login = { email: '', password: '' }
  capture_data() {
    console.log(this.user_login);
  }
}
