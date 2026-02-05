import {
    HeartPulse,
    Users,
    Scale,
    Gavel
} from 'lucide-react';
import React from 'react';

export const specializations = [
    {
        id: 'med',
        title: 'Prawo Medyczne',
        icon: <HeartPulse className="w-8 h-8" />,
        desc: 'Kompleksowa pomoc dla pacjentów (błędy medyczne) oraz podmiotów leczniczych (kontrakty, obsługa prawna).',
        detailedDesc: [
            'Reprezentacja w sprawach o błędy medyczne',
            'Dochodzenie odszkodowań i zadośćuczynień',
            'Obrona lekarzy i personelu medycznego',
            'Analiza dokumentacji medycznej',
            'Audyt prawny podmiotów leczniczych'
        ]
    },
    {
        id: 'fam',
        title: 'Prawo Rodzinne',
        icon: <Users className="w-8 h-8" />,
        desc: 'Empatyczne prowadzenie spraw rozwodowych, alimentacyjnych i dotyczących władzy rodzicielskiej.',
        detailedDesc: [
            'Rozwody i separacje',
            'Podział majątku wspólnego',
            'Ustalenie kontaktów z dziećmi',
            'Alimenty',
            'Ubezwłasnowolnienia'
        ]
    },
    {
        id: 'civ',
        title: 'Prawo Cywilne i Odszkodowania',
        icon: <Scale className="w-8 h-8" />,
        desc: 'Dochodzenie roszczeń, windykacja należności, sprawy spadkowe i analiza umów.',
        detailedDesc: [
            'Odszkodowania komunikacyjne',
            'Sprawy o zapłatę',
            'Naruszenie dóbr osobistych',
            'Sprawy spadkowe (zachowek, dział spadku)',
            'Zasiedzenia nieruchomości'
        ]
    },
    {
        id: 'pen',
        title: 'Prawo Karne',
        icon: <Gavel className="w-8 h-8" />,
        desc: 'Obrona w postępowaniu przygotowawczym i sądowym. Pomoc na każdym etapie sprawy.',
        detailedDesc: [
            'Obrona w sprawach karnych i karnoskarbowych',
            'Reprezentacja pokrzywdzonych (oskarżyciel posiłkowy)',
            'Wnioski o dozór elektroniczny',
            'Odroczenie wykonania kary',
            'Warunkowe przedterminowe zwolnienie'
        ]
    }
];

export const posts = [
    {
        id: 1,
        category: 'Prawo Medyczne',
        title: 'Błąd medyczny a powikłanie – gdzie leży granica?',
        excerpt: 'Nie każde niepowodzenie w leczeniu jest błędem lekarza. Wyjaśniam kluczowe różnice, które decydują o przyznaniu odszkodowania.',
        date: '12 Lutego 2026'
    },
    {
        id: 2,
        category: 'Prawo Rodzinne',
        title: 'Rozwód z orzekaniem o winie – czy warto?',
        excerpt: 'Proces trwa dłużej i jest bardziej obciążający psychicznie. Kiedy walka o winę ma sens, a kiedy lepiej odpuścić?',
        date: '28 Stycznia 2026'
    },
    {
        id: 3,
        category: 'Prawo Karne',
        title: 'Jazda pod wpływem alkoholu – nowe przepisy 2026',
        excerpt: 'Zaostrzenie kar dla kierowców. Co grozi za prowadzenie pojazdu w stanie nietrzeźwości według znowelizowanego kodeksu?',
        date: '10 Stycznia 2026'
    }
];
