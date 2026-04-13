import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import ExamSelectPage from './pages/Exam/ExamSelectPage'
import AdminDashboard from './pages/Admin/AdminDashboard'
import KvkkPage from './pages/Legal/KvkkPage'
import TermsPage from './pages/Legal/TermsPage'
import FaqPage from './pages/Help/FaqPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import AboutPage from './pages/About/AboutPage'
import ManagementPage from './pages/Management/ManagementPage'
import LibraryPage from './pages/Library/LibraryPage'
import QuizListPage from './pages/Quiz/QuizListPage'
import QuizPlayPage from './pages/Quiz/QuizPlayPage'
import GoalSelectPage from './pages/Panel/GoalSelectPage'
import PanelPage from './pages/Panel/PanelPage'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AnnouncementsPage from './pages/Announcements/AnnouncementsPage'
import AnnouncementDetailPage from './pages/Announcements/AnnouncementDetailPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/giris', element: <LoginPage /> },
      { path: '/kayit', element: <RegisterPage /> },
      { path: '/sinav', element: <ExamSelectPage /> },
      { path: '/admin', element: <AdminDashboard /> },
      { path: '/kvkk', element: <KvkkPage /> },
      { path: '/kullanim-sozlesmesi', element: <TermsPage /> },
      { path: '/hakkimizda', element: <AboutPage /> },
      { path: '/kutuphane', element: <LibraryPage /> },
      { path: '/kutuphane/hedef', element: <ProtectedRoute><GoalSelectPage /></ProtectedRoute> },
      { path: '/kutuphane/panel', element: <ProtectedRoute><PanelPage /></ProtectedRoute> },
      { path: '/kutuphane/denemeler', element: <QuizListPage /> },
      { path: '/kutuphane/deneme/:quizId', element: <QuizPlayPage /> },
      { path: '/yonetim', element: <ManagementPage /> },
      { path: '/duyurular', element: <AnnouncementsPage /> },
      { path: '/duyurular/:id', element: <AnnouncementDetailPage /> },
      { path: '/yardim/sss', element: <FaqPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
