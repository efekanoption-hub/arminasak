import { ShieldAlert } from 'lucide-react'

export default function SetupBanner() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div className="animated-bg" />
            <div className="glass-strong" style={{ maxWidth: 460, width: '100%', padding: 40, textAlign: 'center' }}>
                <ShieldAlert size={64} color="#f87171" strokeWidth={1.5} style={{ margin: '0 auto 24px' }} />
                <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Supabase Bağlantısı Yok</h2>
                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.6, marginBottom: 32 }}>
                    Lütfen <code>.env</code> dosyasındaki <strong>VITE_SUPABASE_URL</strong> ve <strong>VITE_SUPABASE_ANON_KEY</strong> değişkenlerini ayarlayıp uygulamayı yeniden başlatın.
                </p>
            </div>
        </div>
    )
}
