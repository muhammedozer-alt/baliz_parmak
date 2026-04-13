import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'

interface Props {
  children: React.ReactNode
  requiredRole?: 'admin'
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
  const user = useAuthStore((s) => s.user)
  const isInitialized = useAuthStore((s) => s.isInitialized)
  const location = useLocation()

  // Henüz initialize olmadıysa loading göster
  if (!isInitialized) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    )
  }

  // Giriş yapılmamışsa login'e yönlendir
  if (!user) {
    return <Navigate to="/giris" state={{ from: location }} replace />
  }

  // Rol kontrolü
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
