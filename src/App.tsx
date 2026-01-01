import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StudyCenter from './pages/StudyCenter';
import ExamSelect from './pages/ExamSelect';
import ActiveExam from './pages/ActiveExam';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="study" element={<StudyCenter />} />
            <Route path="exams" element={<ExamSelect />} />
            <Route path="exam/:examId" element={<ActiveExam />} />
            <Route path="results/:attemptId" element={<ResultsPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
