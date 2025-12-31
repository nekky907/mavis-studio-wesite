'use client';

import Image from 'next/image';
import { Camera } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TeamMember } from '@/types';

interface TeamContentProps {
  teamMembers: TeamMember[] | null;
}

export function TeamContent({ teamMembers }: TeamContentProps) {
  const t = useTranslations();

  const defaultMembers = [
    {
      name: 'Nonthawat Pinchai',
      role: t('team.members.nonthawat.role'),
      bio: t('team.members.nonthawat.bio'),
    },
    {
      name: 'Benyapa Varalert',
      role: t('team.members.benyapa.role'),
      bio: t('team.members.benyapa.bio'),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-24 sm:pt-32 pb-12 sm:pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-4 sm:mb-6 font-medium uppercase">
            {t('team.hero.label')}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-8 leading-tight">
            {t('team.hero.title')}<br />
            <span className="text-secondary">{t('team.hero.titleHighlight')}</span>
          </h1>

          <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            {t('team.hero.description')}
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {teamMembers && teamMembers.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center group">
                  <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-xl group-hover:shadow-2xl transition-all">
                    {member.image_url ? (
                      <Image
                        src={member.image_url}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                        <Camera className="text-white" size={48} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm sm:text-base mb-2 sm:mb-4">{member.role}</p>
                  {member.bio && (
                    <p className="text-xs sm:text-sm leading-relaxed opacity-80 hidden sm:block">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto">
                {defaultMembers.map((member, i) => (
                  <div key={i} className="text-center">
                    <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <Camera className="text-white" size={48} />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm sm:text-base mb-2 sm:mb-4">{member.role}</p>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-80 hidden sm:block">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-tertiary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 sm:mb-6">{t('team.join.title')}</h2>
          <p className="text-sm sm:text-base md:text-lg opacity-80 mb-6 sm:mb-8">
            {t('team.join.description')}
          </p>
          <a
            href="mailto:careers@mavisstudio.com"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-primary text-tertiary font-medium text-sm sm:text-base tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            {t('team.join.button')}
          </a>
        </div>
      </section>
    </>
  );
}
