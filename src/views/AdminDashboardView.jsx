import React, { useState } from 'react';
import { 
  Users, DollarSign, Activity, CheckCircle, Clock, 
  Search, Filter, Download, QrCode, ShieldCheck, 
  TrendingUp, AlertCircle, ArrowUpRight, Check, X 
} from 'lucide-react';

export default function AdminDashboardView() {
  const [activeTab, setActiveTab] = useState('leads');
  const [passInput, setPassInput] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Simulated Lead Management Data for Gym Owner
  const [leads, setLeads] = useState([
    { id: 'TF-801', name: 'Alexander Vance', email: 'alex.vance@example.com', phone: '(555) 234-8901', goal: 'Fat Loss & Muscle Toning', visitDate: '2026-08-20', timeSlot: '09:00 AM', status: 'New', dateSubmitted: '2026-08-19' },
    { id: 'TF-802', name: 'Sarah Jenkins', email: 's.jenkins@example.com', phone: '(555) 876-5432', goal: 'Hypertrophy & Strength PRs', visitDate: '2026-08-20', timeSlot: '05:30 PM', status: 'Contacted', dateSubmitted: '2026-08-19' },
    { id: 'TF-803', name: 'Michael Chang', email: 'm.chang@example.com', phone: '(555) 345-6789', goal: 'Athletic Conditioning', visitDate: '2026-08-21', timeSlot: '07:00 AM', status: 'Trial Scheduled', dateSubmitted: '2026-08-18' },
    { id: 'TF-804', name: 'Emily Roberts', email: 'emily.r@example.com', phone: '(555) 987-1234', goal: 'Fat Loss & Muscle Toning', visitDate: '2026-08-19', timeSlot: '06:00 PM', status: 'Converted', dateSubmitted: '2026-08-17' },
    { id: 'TF-805', name: 'David Miller', email: 'david.m@example.com', phone: '(555) 456-7890', goal: 'Injury Rehab & Longevity', visitDate: '2026-08-22', timeSlot: '10:30 AM', status: 'New', dateSubmitted: '2026-08-19' },
  ]);

  const handleStatusChange = (leadId, newStatus) => {
    setLeads(leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const handleVerifyPass = (e) => {
    e.preventDefault();
    if (!passInput.trim()) return;

    // Check if pass matches simulation
    const cleanId = passInput.trim().toUpperCase();
    const foundLead = leads.find(l => l.id.toUpperCase() === cleanId || cleanId.includes('VIP') || cleanId.length >= 4);

    if (foundLead || cleanId.startsWith('TF-VIP-') || cleanId.startsWith('TF-')) {
      setScanResult({
        valid: true,
        memberName: foundLead ? foundLead.name : 'VIP Member',
        passId: cleanId,
        passType: '3-Day VIP All-Access Pass',
        expiry: 'Valid for 72 Hours from Check-in',
        amenities: ['Gym Floor', 'Sauna Suite', 'DEXA Body Scan']
      });
    } else {
      setScanResult({
        valid: false,
        message: 'Pass ID not found or expired. Please re-enter or issue a new pass.'
      });
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportLeadsCSV = () => {
    const headers = "ID,Name,Email,Phone,Goal,Visit Date,Time Slot,Status,Date Submitted\n";
    const rows = leads.map(l => `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.goal}","${l.visitDate}","${l.timeSlot}","${l.status}","${l.dateSubmitted}"`).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Titan_Forge_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="section-padding" style={{ background: 'var(--bg-dark)', minHeight: '85vh' }}>
      <div className="container">
        
        {/* Admin Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="badge-lime" style={{ marginBottom: '8px' }}>GYM OWNER COMMAND CENTER</span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: 0 }}>BUSINESS & LEAD DASHBOARD</h1>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('leads')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                background: activeTab === 'leads' ? 'var(--accent-lime)' : 'var(--bg-card)',
                color: activeTab === 'leads' ? '#0b0d0f' : '#fff',
                border: '1px solid var(--border-color)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              LEAD CRM ({leads.length})
            </button>
            <button
              onClick={() => setActiveTab('validator')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-sm)',
                background: activeTab === 'validator' ? 'var(--accent-lime)' : 'var(--bg-card)',
                color: activeTab === 'validator' ? '#0b0d0f' : '#fff',
                border: '1px solid var(--border-color)',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <QrCode size={16} /> FRONT DESK QR SCANNER
            </button>
          </div>
        </div>

        {/* Business KPI Cards Overview */}
        <div className="grid-4" style={{ gap: '20px', marginBottom: '36px' }}>
          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
              <span>MONTHLY RECURRING REVENUE</span>
              <DollarSign size={18} color="var(--accent-lime)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>$48,450</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-lime)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ArrowUpRight size={14} /> +14.2% from last month
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
              <span>ACTIVE MEMBERSHIPS</span>
              <Users size={18} color="var(--accent-cyan)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>5,240</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              84.5% Retention Rate
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
              <span>NEW VIP TRIAL LEADS</span>
              <Activity size={18} color="var(--accent-orange)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-lime)' }}>142</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              This Month (Avg 4.7 / day)
            </div>
          </div>

          <div className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
              <span>TRIAL CONVERSION RATE</span>
              <TrendingUp size={18} color="var(--accent-lime)" />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>68.4%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-lime)', marginTop: '4px' }}>
              Industry benchmark is 45%
            </div>
          </div>
        </div>

        {/* TAB 1: Lead CRM System */}
        {activeTab === 'leads' && (
          <div className="glass-card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>VIP TRIAL & CONSULTATION INQUIRIES</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Manage incoming website leads, update follow-up statuses, and export to CSV.
                </p>
              </div>

              <button onClick={exportLeadsCSV} className="btn-secondary" style={{ padding: '10px 18px', fontSize: '0.8rem' }}>
                <Download size={15} /> EXPORT CSV
              </button>
            </div>

            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '220px' }}>
                <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '38px', paddingY: '10px', fontSize: '0.85rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                {['All', 'New', 'Contacted', 'Trial Scheduled', 'Converted'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: statusFilter === status ? 'var(--accent-lime)' : 'var(--bg-card)',
                      color: statusFilter === status ? '#0b0d0f' : 'var(--text-secondary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Lead CRM Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1.5px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    <th style={{ padding: '12px 14px' }}>Lead ID</th>
                    <th style={{ padding: '12px 14px' }}>Prospect Name</th>
                    <th style={{ padding: '12px 14px' }}>Contact Info</th>
                    <th style={{ padding: '12px 14px' }}>Fitness Goal</th>
                    <th style={{ padding: '12px 14px' }}>Visit Slot</th>
                    <th style={{ padding: '12px 14px' }}>Status</th>
                    <th style={{ padding: '12px 14px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '14px', fontWeight: 800, color: 'var(--accent-lime)' }}>{lead.id}</td>
                      <td style={{ padding: '14px', fontWeight: 700, color: '#fff' }}>{lead.name}</td>
                      <td style={{ padding: '14px' }}>
                        <div style={{ color: '#fff', fontSize: '0.85rem' }}>{lead.email}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{lead.phone}</div>
                      </td>
                      <td style={{ padding: '14px', color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{lead.goal}</td>
                      <td style={{ padding: '14px' }}>
                        <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.82rem' }}>{lead.visitDate}</div>
                        <div style={{ color: 'var(--accent-lime)', fontSize: '0.75rem' }}>{lead.timeSlot}</div>
                      </td>
                      <td style={{ padding: '14px' }}>
                        <span style={{
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          background: lead.status === 'Converted' ? 'rgba(198, 255, 0, 0.15)' :
                                      lead.status === 'Trial Scheduled' ? 'rgba(0, 242, 254, 0.15)' :
                                      lead.status === 'Contacted' ? 'rgba(255, 90, 31, 0.15)' : 'rgba(255, 255, 255, 0.08)',
                          color: lead.status === 'Converted' ? 'var(--accent-lime)' :
                                 lead.status === 'Trial Scheduled' ? 'var(--accent-cyan)' :
                                 lead.status === 'Contacted' ? 'var(--accent-orange)' : '#fff',
                          border: '1px solid var(--border-color)'
                        }}>
                          {lead.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ padding: '14px' }}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          style={{
                            background: 'var(--bg-dark)',
                            color: '#fff',
                            border: '1px solid var(--border-color)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Trial Scheduled">Trial Scheduled</option>
                          <option value="Converted">Converted to Member</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Front Desk Pass Verification Tool */}
        {activeTab === 'validator' && (
          <div className="glass-card" style={{ padding: '32px', maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'var(--accent-lime-muted)', color: 'var(--accent-lime)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                <ShieldCheck size={28} />
              </div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>FRONT DESK PASS VERIFICATION</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                Enter the prospect's 6-digit VIP Pass ID or scan code to verify entitlement before floor access.
              </p>
            </div>

            <form onSubmit={handleVerifyPass} style={{ marginBottom: '24px' }}>
              <div className="form-group">
                <label className="form-label">ENTER VIP PASS CODE OR MEMBER ID</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. TF-801 or TF-VIP-849201"
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value)}
                    required
                    style={{ fontSize: '1rem', fontWeight: 700 }}
                  />
                  <button type="submit" className="btn-primary" style={{ flexShrink: 0, padding: '12px 24px' }}>
                    VERIFY PASS
                  </button>
                </div>
              </div>
            </form>

            {scanResult && (
              <div style={{
                background: scanResult.valid ? 'rgba(198, 255, 0, 0.08)' : 'rgba(255, 90, 31, 0.1)',
                border: scanResult.valid ? '1.5px solid var(--accent-lime)' : '1.5px solid var(--accent-orange)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'left'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  {scanResult.valid ? (
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-lime)', color: '#0b0d0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Check size={20} strokeWidth={3} />
                    </div>
                  ) : (
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--accent-orange)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <X size={20} strokeWidth={3} />
                    </div>
                  )}

                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: scanResult.valid ? 'var(--accent-lime)' : 'var(--accent-orange)' }}>
                    {scanResult.valid ? 'VALID PASS VERIFIED — ACCESS GRANTED' : 'INVALID OR EXPIRED PASS'}
                  </div>
                </div>

                {scanResult.valid ? (
                  <div style={{ fontSize: '0.88rem', color: '#fff', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div>Member Name: <strong>{scanResult.memberName}</strong></div>
                    <div>Pass ID: <strong style={{ color: 'var(--accent-lime)' }}>{scanResult.passId}</strong></div>
                    <div>Pass Type: <strong>{scanResult.passType}</strong></div>
                    <div>Status: <span className="badge-lime">{scanResult.expiry}</span></div>
                  </div>
                ) : (
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{scanResult.message}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
