import React from 'react';

const styles = {
  navBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '64px',
    backgroundColor: '#1f1f23',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    padding: '8px 12px',
    transition: 'color 0.2s ease',
  },
  active: {
    color: '#00b37e',
    fontWeight: 600,
  },
  inactive: {
    color: '#a8a8b3',
    fontWeight: 400,
  },
};

export const NavigationBottomBar = ({ activeTab, onNavigate }) => {
  const tabs = [
    { id: 'inicio', label: 'Início' },
    { id: 'buscar', label: 'Buscar' },
    { id: 'notificacoes', label: 'Notificações' },
    { id: 'perfil', label: 'Perfil' },
  ];

  return (
    <nav style={styles.navBar} aria-label="Navegação Principal">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onNavigate(tab.id)}
            style={{
              ...styles.button,
              ...(isActive ? styles.active : styles.inactive),
            }}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};
