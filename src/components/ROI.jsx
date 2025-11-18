import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import { useCounter } from '../utils/useCounter';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/**
 * ROI Component
 * Section displaying ROI metrics with charts and animated counters
 */
const ROI = () => {
  const titleRef = useScrollAnimation();
  const chartsRef = useRef(null);
  const [chartsInitialized, setChartsInitialized] = useState(false);

  // Counter refs
  const costCounterRef = useCounter(40);
  const speedCounterRef = useCounter(3);
  const resolutionCounterRef = useCounter(85);

  // Chart options
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#9CA3AF' },
      },
    },
    scales: {
      y: {
        ticks: { color: '#9CA3AF', beginAtZero: true },
        grid: { color: '#374151' },
      },
      x: {
        ticks: { color: '#9CA3AF' },
        grid: { display: false },
      },
    },
  };

  const doughnutChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#9CA3AF' },
      },
    },
    cutout: '70%',
  };

  // Chart data
  const costChartData = {
    labels: ['Support', 'Sales Ops', 'Onboarding'],
    datasets: [
      {
        label: 'Before AEON',
        data: [100, 80, 60],
        backgroundColor: '#4B5563',
        borderRadius: 4,
      },
      {
        label: 'With AEON (Est. 40% Cost Reduction)',
        data: [60, 48, 36],
        backgroundColor: '#FFC700',
        borderRadius: 4,
      },
    ],
  };

  const growthChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Leads Qualified (Traditional)',
        data: [50, 60, 55, 70],
        borderColor: '#4B5563',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Leads Qualified (With AEON 3x)',
        data: [150, 180, 165, 210],
        borderColor: '#FFC700',
        backgroundColor: 'rgba(255, 199, 0, 0.1)',
        fill: true,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['AEON (Repetitive Tasks)', 'Human Team (Complex Strategy)'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#FFC700', '#4B5563'],
        borderColor: '#121212',
        borderWidth: 4,
        hoverOffset: 4,
      },
    ],
  };

  // Initialize charts when section is visible
  useEffect(() => {
    if (!chartsRef.current || chartsInitialized) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setChartsInitialized(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(chartsRef.current);

    return () => {
      if (chartsRef.current) {
        observer.unobserve(chartsRef.current);
      }
    };
  }, [chartsInitialized]);

  return (
    <section id="roi" className="py-20">
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto animate-on-scroll fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            See Your <span className="section-title">Visualized ROI</span>
          </h2>
          <p className="mt-4 text-gray-400">
            AEON doesn't just promise results; it delivers quantifiable improvements to your bottom
            line.
          </p>
        </div>

        {/* Animated Counters */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="feature-card p-6 animate-on-scroll fade-in-up">
            <h4 className="text-lg text-gray-400 mb-2">Cost Reduction</h4>
            <span className="text-5xl font-extrabold text-yellow-500">
              <span ref={costCounterRef} className="counter" data-target="40">
                0
              </span>
              %
            </span>
          </div>
          <div className="feature-card p-6 animate-on-scroll fade-in-up delay-100">
            <h4 className="text-lg text-gray-400 mb-2">Faster Qualification</h4>
            <span className="text-5xl font-extrabold text-yellow-500">
              <span ref={speedCounterRef} className="counter" data-target="3">
                0
              </span>
              x
            </span>
          </div>
          <div className="feature-card p-6 animate-on-scroll fade-in-up delay-200">
            <h4 className="text-lg text-gray-400 mb-2">Resolution Rate</h4>
            <span className="text-5xl font-extrabold text-yellow-500">
              <span ref={resolutionCounterRef} className="counter" data-target="85">
                0
              </span>
              %+
            </span>
          </div>
        </div>

        <div ref={chartsRef} id="roi-charts" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Chart 1: Cost Reduction */}
          <div className="feature-content-wrapper p-6 animate-on-scroll fade-in-left delay-100">
            <h3 className="text-xl font-bold text-white mb-4">Operational Cost Reduction</h3>
            <div className="h-80">{chartsInitialized && <Bar data={costChartData} options={chartOptions} />}</div>
          </div>

          {/* Chart 2: Lead Qualification */}
          <div className="feature-content-wrapper p-6 animate-on-scroll fade-in-up delay-200">
            <h3 className="text-xl font-bold text-white mb-4">Lead Qualification Growth</h3>
            <div className="h-80">
              {chartsInitialized && <Line data={growthChartData} options={chartOptions} />}
            </div>
          </div>

          {/* Chart 3: Task Distribution */}
          <div className="feature-content-wrapper p-6 animate-on-scroll fade-in-right delay-300">
            <h3 className="text-xl font-bold text-white mb-4">Team Task Distribution</h3>
            <div className="h-80">
              {chartsInitialized && <Doughnut data={doughnutChartData} options={doughnutChartOptions} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;

