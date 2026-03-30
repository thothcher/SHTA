import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomePage),
    data: {
      seo: {
        title: 'SHTA | შესავალი თანამედროვე აზროვნებაში',
        description: 'ინტერაქტიული სასწავლო პლატფორმა კურსისთვის „შესავალი თანამედროვე აზროვნებაში“ - თავები, ქვიზები, ფლეშბარათები და სასწავლო რესურსები სტუდენტებისთვის.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.LoginPage),
    data: {
      seo: {
        title: 'შესვლა | SHTA',
        description: 'შედით SHTA-ში და გააგრძელეთ სწავლა, პროგრესის კონტროლი და თქვენი სასწავლო რესურსების გამოყენება.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.RegisterPage),
    data: {
      seo: {
        title: 'რეგისტრაცია | SHTA',
        description: 'შექმენით ანგარიში SHTA-ზე და მიიღეთ წვდომა სასწავლო პროგრესზე, ქვიზებზე და ფლეშბარათებზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password').then(m => m.ForgotPasswordPage),
    data: {
      seo: {
        title: 'პაროლის აღდგენა | SHTA',
        description: 'აღადგინეთ თქვენი SHTA ანგარიშის პაროლი და დაუბრუნდით სასწავლო პლატფორმას.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'chapters',
    loadComponent: () => import('./pages/chapters/chapters').then(m => m.ChaptersPage),
    data: {
      seo: {
        title: 'თავების გზამკვლევი | SHTA',
        description: 'იხილეთ „შესავალი თანამედროვე აზროვნებაში“ კურსის ყველა თავი, ძირითადი თემები და სასწავლო მიმოხილვები ერთ ადგილას.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'chapters/:id',
    loadComponent: () => import('./pages/chapter-detail/chapter-detail').then(m => m.ChapterDetailPage),
    data: {
      seo: {
        title: 'თავი | SHTA',
        description: 'წაიკითხეთ თავის მასალა, ძირითადი იდეები და თემები SHTA სასწავლო პლატფორმაზე.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'quiz/:chapterId',
    loadComponent: () => import('./pages/quiz/quiz').then(m => m.QuizPage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'ქვიზი | SHTA',
        description: 'შეამოწმეთ ცოდნა ინტერაქტიული ქვიზებით SHTA-ზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'memory-game',
    loadComponent: () => import('./pages/memory-game/memory-game').then(m => m.MemoryGamePage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'მეხსიერების თამაში | SHTA',
        description: 'ივარჯიშეთ ტერმინებზე და ცნებებზე SHTA-ს მეხსიერების თამაშით.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'facts',
    loadComponent: () => import('./pages/facts/facts').then(m => m.FactsPage),
    data: {
      seo: {
        title: 'საინტერესო ფაქტები | SHTA',
        description: 'აღმოაჩინეთ საინტერესო ფაქტები, კონტექსტები და მოკლე განმარტებები თანამედროვე აზროვნების შესახებ.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'thinkers',
    loadComponent: () => import('./pages/thinkers/thinkers').then(m => m.ThinkersPage),
    data: {
      seo: {
        title: 'ცნობილი მოაზროვნეები | SHTA',
        description: 'გაეცანით მოაზროვნეებს, რომლებმაც ჩამოაყალიბეს თანამედროვე აზროვნება და კურსის ძირითადი იდეები.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'stories',
    loadComponent: () => import('./pages/stories/stories').then(m => m.StoriesPage),
    data: {
      seo: {
        title: 'ისტორიები მოაზროვნეებზე | SHTA',
        description: 'წაიკითხეთ საინტერესო ისტორიები ცნობილი მოაზროვნეების ცხოვრებიდან და იდეების ჩამოყალიბების შესახებ.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'notes',
    loadComponent: () => import('./pages/notes/notes').then(m => m.NotesPage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'ჩემი ჩანაწერები | SHTA',
        description: 'მართეთ თქვენი პირადი ჩანაწერები და სასწავლო მასალა SHTA-ზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'პროფილი | SHTA',
        description: 'იხილეთ და მართეთ თქვენი SHTA პროფილი.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage),
    data: {
      seo: {
        title: 'კონტაქტი | SHTA',
        description: 'დაგვიკავშირდით შეკითხვების, შემოთავაზებების ან უკუკავშირის გასაზიარებლად.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq').then(m => m.FaqPage),
    data: {
      seo: {
        title: 'FAQ | SHTA',
        description: 'იხილეთ ხშირად დასმული კითხვები SHTA-ს, პლატფორმის ფუნქციებისა და სასწავლო პროცესის შესახებ.',
        robots: 'index, follow'
      }
    }
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardPage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'მართვის პანელი | SHTA',
        description: 'იხილეთ თქვენი პროგრესი, მიღწევები და აქტივობები SHTA-ზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  { path: 'achievements', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'flashcards',
    loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'ფლეშბარათები | SHTA',
        description: 'იმეცადინეთ ფლეშბარათებით SHTA სასწავლო პლატფორმაზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'flashcards/:chapterId',
    loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage),
    canActivate: [authGuard],
    data: {
      seo: {
        title: 'ფლეშბარათები | SHTA',
        description: 'იმეცადინეთ ფლეშბარათებით SHTA სასწავლო პლატფორმაზე.',
        robots: 'noindex, nofollow'
      }
    }
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.AdminPage),
    canActivate: [authGuard, adminGuard],
    data: {
      seo: {
        title: 'ადმინი | SHTA',
        description: 'SHTA ადმინისტრაციული პანელი.',
        robots: 'noindex, nofollow'
      }
    }
  },
  { path: '**', redirectTo: '' }
];
