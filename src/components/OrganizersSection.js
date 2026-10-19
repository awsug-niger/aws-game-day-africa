import React from 'react';
import { useOrganizers } from '../hooks/useData';
import { useLanguage } from '../i18n/LanguageContext';
import OrganizerCard from './OrganizerCard';
import TeamCard from './TeamCard';

const OrganizersSection = () => {
  const { organizersData, loading, error } = useOrganizers();
  const { t } = useLanguage();

  if (error) {
    return (
      <section id="organizers" className="section bg-light">
        <div className="container">
          <h2>{t('organizers.title')}</h2>
          <div className="error">
            <p>{t('organizers.error')} {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // Resolve the coordination team's members to their organizer records
  const coordinationTeam = organizersData.eventOrganizers?.[0];
  const mainOrganizers = (coordinationTeam?.members || [])
    .map((memberId) => organizersData.organizers.find((org) => org.id === memberId))
    .filter(Boolean);

  return (
    <section id="organizers" className="section">
      <div className="container">
        <h2>{t('organizers.title')}</h2>
        <p>{t('organizers.subtitle')}</p>

        {loading ? (
          <div className="loading">{t('organizers.loading')}</div>
        ) : (
          <>
            {/* User Group Leaders Section */}
            <div className="organizers-subsection">
              <h3>{t('organizers.leaders.title')}</h3>
              <p>{t('organizers.leaders.subtitle')}</p>
              <div className="organizers-grid">
                {/* Event organizers first */}
                {organizersData.eventOrganizers.map((eventOrg) => (
                  <TeamCard
                    key={eventOrg.id}
                    team={eventOrg}
                  />
                ))}

                {/* Individual organizers */}
                {mainOrganizers.map((organizer) => (
                  <OrganizerCard key={organizer.id} organizer={organizer} />
                ))}
              </div>
            </div>

            {/* AWS Support Team Section */}
            <div className="organizers-subsection">
              <h3>{t('organizers.aws.title')}</h3>
              <p>{t('organizers.aws.subtitle')}</p>

              {organizersData.awsHelpers?.map((awsHelper) => {
                // Get team members for this specific team
                const teamMembers = organizersData.awsStaff?.filter(staff =>
                  awsHelper.members?.includes(staff.id)
                ) || [];

                return (
                  <div key={awsHelper.id} className="aws-team-section">
                    <div className="organizers-grid">
                      {/* Team card */}
                      <TeamCard
                        team={awsHelper}
                      />

                      {/* Team members */}
                      {teamMembers.map((staff) => (
                        <OrganizerCard
                          key={staff.id}
                          organizer={staff}
                          isAwsHelper={true}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        <div className="contact-info">
          <h3>{t('organizers.contact.title')}</h3>
          <p>{t('organizers.contact.text')}</p>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
