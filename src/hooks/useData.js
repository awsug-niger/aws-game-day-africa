import { useState, useEffect } from 'react';

// Custom hook for loading user groups
export const useUserGroups = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUserGroups = async () => {
      try {
        setLoading(true);
        const response = await fetch('./data/usergroups.json');
        if (!response.ok) {
          throw new Error('Failed to load user groups');
        }
        const data = await response.json();
        setUserGroups(data.usergroups || []);
      } catch (err) {
        setError(err.message);
        console.error('Error loading user groups:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUserGroups();
  }, []);

  return { userGroups, loading, error };
};

// Custom hook for loading organizers
export const useOrganizers = () => {
  const [organizersData, setOrganizersData] = useState({
    organizers: [],
    eventOrganizers: [],
    awsHelpers: [],
    awsStaff: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrganizers = async () => {
      try {
        setLoading(true);
        const response = await fetch('./data/organizers.json');
        if (!response.ok) {
          throw new Error('Failed to load organizers');
        }
        const data = await response.json();
        setOrganizersData({
          organizers: data.organizers || [],
          eventOrganizers: data.eventOrganizers || [],
          awsHelpers: data.awsHelpers || [],
          awsStaff: data.awsStaff || []
        });
      } catch (err) {
        setError(err.message);
        console.error('Error loading organizers:', err);
      } finally {
        setLoading(false);
      }
    };

    loadOrganizers();
  }, []);

  return { organizersData, loading, error };
};

// Custom hook for loading sponsors
export const useSponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSponsors = async () => {
      try {
        setLoading(true);
        const response = await fetch('./data/sponsors.json');
        if (!response.ok) {
          throw new Error('Failed to load sponsors');
        }
        const data = await response.json();
        setSponsors(data.sponsors || []);
      } catch (err) {
        setError(err.message);
        console.error('Error loading sponsors:', err);
      } finally {
        setLoading(false);
      }
    };

    loadSponsors();
  }, []);

  return { sponsors, loading, error };
};
