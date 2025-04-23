
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

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
}

interface ProjectState {
  projects: Project[];
  currentProject: Project | null;
  isLoading: boolean;
  createProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => void;
  setCurrentProject: (projectId: string) => void;
}

// Separate stores for different concerns
export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}));

export const useProjectStore = create<ProjectState>((set, get) => ({
  projects: [],
  currentProject: null,
  isLoading: false,
  
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
  return useThemeStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme
  }));
};

// Hook to access user
export const useUser = () => {
  return useUserStore(state => ({
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    login: state.login,
    logout: state.logout
  }));
};

// Hook to access projects
export const useProjects = () => {
  return useProjectStore(state => ({
    projects: state.projects,
    currentProject: state.currentProject,
    createProject: state.createProject,
    setCurrentProject: state.setCurrentProject
  }));
};
