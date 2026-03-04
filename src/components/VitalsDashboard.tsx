import { useState, useMemo } from "react";
import {
    ArrowLeft,
    BarChart3,
    Heart,
    Droplets,
    Moon,
    Activity,
    Footprints,
    ChevronRight,
    RefreshCw,
    X,
    TrendingUp
} from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const allVitalsData = {
    heartRate: [
        { day: 'Mon', value: 72 }, { day: 'Tue', value: 85 }, { day: 'Wed', value: 78 },
        { day: 'Thu', value: 92 }, { day: 'Fri', value: 88 }, { day: 'Sat', value: 82 }, { day: 'Sun', value: 87 }
    ],
    bloodOxygen: [
        { day: 'Mon', value: 98 }, { day: 'Tue', value: 97 }, { day: 'Wed', value: 99 },
        { day: 'Thu', value: 98 }, { day: 'Fri', value: 98 }, { day: 'Sat', value: 97 }, { day: 'Sun', value: 98 }
    ],
    sleep: [
        { day: 'Mon', value: 7.2 }, { day: 'Tue', value: 6.5 }, { day: 'Wed', value: 8.0 },
        { day: 'Thu', value: 6.2 }, { day: 'Fri', value: 7.5 }, { day: 'Sat', value: 9.0 }, { day: 'Sun', value: 8.5 }
    ],
    respiratoryRate: [
        { day: 'Mon', value: 14 }, { day: 'Tue', value: 16 }, { day: 'Wed', value: 15 },
        { day: 'Thu', value: 14 }, { day: 'Fri', value: 15 }, { day: 'Sat', value: 14 }, { day: 'Sun', value: 14 }
    ],
    steps: [
        { day: 'Mon', value: 3400 }, { day: 'Tue', value: 5200 }, { day: 'Wed', value: 4100 },
        { day: 'Thu', value: 2103 }, { day: 'Fri', value: 6800 }, { day: 'Sat', value: 8500 }, { day: 'Sun', value: 7200 }
    ]
};

const vitalConfigs = {
    heartRate: { label: 'Heart Rate', unit: 'bpm', color: '#6366f1', icon: Heart, insight: "Your heart rate peaked on Thursday during activity." },
    bloodOxygen: { label: 'Blood Oxygen', unit: '%', color: '#3b82f6', icon: Droplets, insight: "Oxygen levels remained stable all week." },
    sleep: { label: 'Sleep', unit: 'hrs', color: '#8b5cf6', icon: Moon, insight: "Longest sleep duration recorded on Saturday." },
    respiratoryRate: { label: 'Respiratory', unit: 'bpm', color: '#10b981', icon: Activity, insight: "Breathing pattern is consistent and healthy." },
    steps: { label: 'Steps', unit: 'steps', color: '#f97316', icon: Footprints, insight: "Bravo! You smashed your 5000-step goal on four days." }
};

interface VitalCardProps {
    title: string;
    value: string;
    unit?: string;
    subtext: string;
    icon: React.ReactNode;
    color: string;
    date?: string;
}

const VitalCard = ({ title, value, unit, subtext, icon, color, date }: VitalCardProps) => (
    <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-50 flex flex-col gap-4 transition-all hover:shadow-md active:scale-98 group">
        <div className="flex justify-between items-start">
            <div className={`p-3 rounded-2xl ${color} bg-opacity-10 text-opacity-100`}>
                {icon}
            </div>
            {date && <span className="text-[12px] font-bold text-gray-400">{date}</span>}
        </div>

        <div className="flex flex-col gap-1">
            <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
            <div className="flex items-baseline gap-1">
                <span className="text-[28px] font-black text-gray-900 tracking-tight">{value}</span>
                {unit && <span className="text-[14px] font-bold text-gray-500">{unit}</span>}
            </div>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-gray-50">
            <span className="text-[12px] font-medium text-gray-400">{subtext}</span>
            <button className="text-[12px] font-bold text-indigo-600 flex items-center gap-0.5 hover:opacity-80">
                show more
                <ChevronRight className="h-3 w-3" />
            </button>
        </div>
    </div>
);

interface VitalsDashboardProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    isPage?: boolean;
}

const VitalsDashboard = ({ open, onOpenChange, isPage = false }: VitalsDashboardProps) => {
    const [isChartOpen, setIsChartOpen] = useState(false);
    const [selectedVital, setSelectedVital] = useState<keyof typeof allVitalsData>('heartRate');

    const activeConfig = useMemo(() => vitalConfigs[selectedVital], [selectedVital]);

    return (
        <>
            <div className={`w-full h-full bg-[#fafafa] flex flex-col absolute inset-0 z-[60] duration-300 animate-in slide-in-from-right-full shadow-2xl overflow-hidden`}>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-100 sticky top-0 z-20">
                    <button onClick={() => onOpenChange(false)} className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90">
                        <ArrowLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">Vitals Dashboard</h2>
                    <button
                        onClick={() => setIsChartOpen(true)}
                        className="hover:bg-gray-100 p-2 rounded-full transition-colors active:scale-90"
                    >
                        <BarChart3 className="h-5 w-5 text-indigo-600" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 pb-20 no-scrollbar space-y-6 relative">
                    {/* Sync Status */}
                    <div className="flex items-center justify-between bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-xl shadow-sm">
                                <RefreshCw className="h-4 w-4 text-indigo-600 animate-spin-slow" />
                            </div>
                            <span className="text-[13px] font-bold text-indigo-900">syncing from Apple Watch Series 9</span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>

                    {/* Vitals Grid */}
                    <div className="flex flex-col gap-4">
                        <VitalCard
                            title="Heart Rate"
                            value="87"
                            unit="bpm"
                            subtext="last updated 7 mins ago"
                            icon={<Heart className="h-6 w-6 text-red-500" />}
                            color="bg-red-500"
                        />

                        <VitalCard
                            title="Blood Oxygen"
                            value="98"
                            unit="%"
                            subtext="last updated 7 mins ago"
                            icon={<Droplets className="h-6 w-6 text-blue-500" />}
                            color="bg-blue-500"
                        />

                        <VitalCard
                            title="Sleep Duration"
                            value="6hr 23mins"
                            date="4th March 2026"
                            subtext="Good sleep quality"
                            icon={<Moon className="h-6 w-6 text-indigo-600" />}
                            color="bg-indigo-600"
                        />

                        <VitalCard
                            title="Respiratory Rate"
                            value="Normal"
                            date="4th March 2026"
                            subtext="14 breaths per min"
                            icon={<Activity className="h-6 w-6 text-emerald-500" />}
                            color="bg-emerald-500"
                        />

                        <VitalCard
                            title="Steps"
                            value="2103"
                            date="4th March 2026"
                            subtext="Goal: 5000 steps"
                            icon={<Footprints className="h-6 w-6 text-orange-500" />}
                            color="bg-orange-500"
                        />
                    </div>
                </div>
            </div>

            {/* Vitals Charts Dialog */}
            <Dialog open={isChartOpen} onOpenChange={setIsChartOpen}>
                <DialogContent className="sm:max-w-[420px] w-[95%] rounded-[32px] p-0 border-none bg-white shadow-2xl animate-in fade-in zoom-in duration-200 z-[120] max-h-[90vh] flex flex-col">
                    <div className="p-7 pb-10 space-y-7 overflow-y-auto no-scrollbar flex-1">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h2 className="text-[20px] font-black text-gray-900 tracking-tight">Vitals Trend</h2>
                                <p className="text-[12px] font-bold uppercase tracking-widest mt-0.5" style={{ color: activeConfig.color }}>
                                    Last 7 Days ({activeConfig.unit})
                                </p>
                            </div>
                        </div>

                        {/* Vital Selection Chips */}
                        <div className="flex items-center flex-nowrap gap-2 overflow-x-auto pb-4 no-scrollbar touch-pan-x" style={{ WebkitOverflowScrolling: 'touch' }}>
                            {(Object.keys(vitalConfigs) as Array<keyof typeof allVitalsData>).map((key) => {
                                const cfg = vitalConfigs[key];
                                const Icon = cfg.icon;
                                const isActive = selectedVital === key;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedVital(key)}
                                        className={`whitespace-nowrap flex-shrink-0 px-5 py-3 rounded-2xl flex items-center gap-2 text-[13px] font-bold transition-all active:scale-95 ${isActive
                                            ? "text-white shadow-md"
                                            : "bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100"
                                            }`}
                                        style={{ backgroundColor: isActive ? cfg.color : undefined }}
                                    >
                                        <Icon className={`h-4 w-4 ${isActive ? "text-white" : ""}`} />
                                        {cfg.label}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Chart Container */}
                        <div className="h-[240px] w-full -ml-4 flex-shrink-0">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={allVitalsData[selectedVital]}>
                                    <defs>
                                        <linearGradient id="colorVital" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={activeConfig.color} stopOpacity={0.15} />
                                            <stop offset="95%" stopColor={activeConfig.color} stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="day"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                                    <Tooltip
                                        contentStyle={{
                                            borderRadius: '16px',
                                            border: 'none',
                                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                            fontWeight: 800,
                                            fontSize: '14px'
                                        }}
                                        cursor={{ stroke: activeConfig.color, strokeWidth: 1, strokeDasharray: '4 4' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke={activeConfig.color}
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorVital)"
                                        animationDuration={1000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Insights */}
                        <div className="bg-gray-50 p-5 rounded-[24px] border border-gray-100 flex gap-4 items-center flex-shrink-0 mb-2">
                            <div className="bg-white p-3 rounded-2xl shadow-sm flex-shrink-0">
                                <TrendingUp className="h-6 w-6 text-gray-900" style={{ color: activeConfig.color }} />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0 pr-1">
                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1.5">Weekly Insight</p>
                                <p className="text-[14px] font-bold text-gray-900 leading-tight break-words">
                                    {activeConfig.insight}
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default VitalsDashboard;
