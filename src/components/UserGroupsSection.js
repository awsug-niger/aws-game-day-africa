import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useUserGroups } from '../hooks/useData';
import { useLanguage } from '../i18n/LanguageContext';
import UserGroupCard from './UserGroupCard';

// Fix for default markers in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icon function based on continent
const createCustomIcon = (country) => {
  const isAfrica = ['🇲🇦', '🇸🇳', '🇧🇯', '🇨🇬', '🇨🇲', '🇨🇩', '🇳🇪'].includes(country.split(' ')[0]);

  const iconColor = isAfrica ? '#E6820A' : '#FF9900';

  return L.divIcon({
    html: `
      <div style="
        background-color: ${iconColor};
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        color: white;
      ">
        ${country.split(' ')[0]}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
};

const UserGroupsSection = () => {
  const { userGroups, loading, error } = useUserGroups();
  const { t } = useLanguage();

  if (error) {
    return (
      <section id="usergroups" className="section">
        <div className="container">
          <h2>{t('usergroups.title')}</h2>
          <div className="error">
            <p>{t('usergroups.error')} {error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (loading) {
    return (
      <section id="usergroups" className="section">
        <div className="container">
          <h2>{t('usergroups.title')}</h2>
          <div className="loading">{t('usergroups.loading')}</div>
        </div>
      </section>
    );
  }

  // Calculate bounds to fit all markers
  const bounds = userGroups.reduce((acc, group) => {
    if (group.coordinates) {
      const [lat, lng] = group.coordinates;
      acc.extend([lat, lng]);
    }
    return acc;
  }, L.latLngBounds());

  return (
    <section id="usergroups" className="section bg-light">
      <div className="container">
        <h2>{t('usergroups.title')}</h2>
        <p>{t('usergroups.subtitle')}</p>

        <div className="map-container">
          <MapContainer
            bounds={bounds}
            boundsOptions={{ padding: [20, 20] }}
            style={{ height: '500px', width: '100%' }}
            className="leaflet-map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {userGroups.map((group, index) => {
              if (!group.coordinates) return null;

              const [lat, lng] = group.coordinates;
              const hasValidMeetupUrl = group.meetupUrl && group.meetupUrl !== '#';

              return (
                <Marker
                  key={index}
                  position={[lat, lng]}
                  icon={createCustomIcon(group.country)}
                >
                  <Popup className="custom-popup">
                    <div className="popup-content">
                      <div className="popup-flag">{group.country.split(' ')[0]}</div>
                      <h3>{group.name}</h3>
                      <p className="popup-location">📍 {group.location}</p>
                      {hasValidMeetupUrl ? (
                        <a
                          href={group.meetupUrl}
                          className="btn btn-primary btn-sm"
                          style={{ color: '#ffffff' }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Meetup
                        </a>
                      ) : (
                        <span className="popup-coming-soon">{t('usergroups.meetupSoon')}</span>
                      )}
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        <div className="map-legend">
          <div className="legend-item">
            <div className="legend-marker africa"></div>
            <span>{t('usergroups.legend.africa')} ({userGroups.filter(g => ['🇲🇦', '🇸🇳', '🇧🇯', '🇨🇬', '🇨🇲', '🇨🇩', '🇳🇪', '🇲🇺', '🇳🇬', '🇿🇦', '🇰🇪'].includes(g.country.split(' ')[0])).length} {t('usergroups.legend.count')})</span>
          </div>
        </div>

        <div className="usergroups-list" style={{ marginTop: 'var(--space-2xl)' }}>
          {[...userGroups].sort((a, b) => a.name.localeCompare(b.name)).map((group) => (
            <UserGroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGroupsSection;