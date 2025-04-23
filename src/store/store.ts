
import { create } from 'zustand';

type ProjectType = 'web' | 'mobile' | 'both';
type ProjectScope = 'frontend' | 'backend' | 'fullstack';

interface Project {
  id: string;
  name: string;
  description: string;
  prompt: string;
  type: ProjectType;
  scope: ProjectScope;
  includeAuth: boolean;
  includePayments: boolean;
  createdAt: Date;
  updatedAt: Date;
  status: 'draft' | 'generating' | 'ready' | 'deployed';
  deployUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AppState {
  theme: 'light' | 'dark';
  user: User | null;
  projects: Project[];
  currentProject: Project | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  login: (user: User) => void;
  logout: () => void;
  createProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => void;
  setCurrentProject: (projectId: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  theme: 'light',
  user: null,
  projects: [],
  currentProject: null,
  isLoggedIn: false,
  isLoading: false,
  
  setTheme: (theme) => set({ theme }),
  
  login: (user) => set({ user, isLoggedIn: true }),
  
  logout: () => set({ user: null, isLoggedIn: false }),
  
  createProject: (project) => {
    const newProject = {
      ...project,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'draft' as const,
    };
    
    set((state) => ({ 
      projects: [...state.projects, newProject],
      currentProject: newProject
    }));
  },
  
  setCurrentProject: (projectId) => {
    const { projects } = get();
    const project = projects.find(p => p.id === projectId) || null;
    set({ currentProject: project });
  }
}));

// Hook to access theme
export const useTheme = () => {
  const { theme, setTheme } = useAppStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme
  }));
  
  return { theme, setTheme };
};

// Hook to access user
export const useUser = () => {
  const { user, isLoggedIn, login, logout } = useAppStore(state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    login: state.login,
    logout: state.logout
  }));
  
  return { user, isLoggedIn, login, logout };
};

// Hook to access projects
export const useProjects = () => {
  const { projects, currentProject, createProject, setCurrentProject } = useAppStore(state => ({
    projects: state.projects,
    currentProject: state.currentProject,
    createProject: state.createProject,
    setCurrentProject: state.setCurrentProject
  }));
  
  return { projects, currentProject, createProject, setCurrentProject };
};
