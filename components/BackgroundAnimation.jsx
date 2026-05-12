export default function BackgroundAnimation() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.12),transparent_35%,rgba(15,23,42,0.45)_70%,rgba(0,0,0,0.95))]" />
            <div className="absolute inset-0 bg-black/55" />
        </div>
    );
}
