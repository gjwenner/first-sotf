import './DashboardTemplate.css';

export const DashboardTemplate = ({ sidebar, topbar, children }) => {
  return (
    <div className="app-container">
      {sidebar}
      <div className="main-wrapper">
        {topbar}
        <main className="main-content">
          <section className="dashboard-grid">
            {children}
          </section>
        </main>
      </div>
    </div>
  );
};
