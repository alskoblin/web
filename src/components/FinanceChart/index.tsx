import React, { useState, useEffect, useRef } from 'react';
import './style.css';

interface Transaction {
    id: string;
    date: string;
    amount: number;
    type: 'income' | 'expense';
}

interface FinanceHistogramProps {
    transactions: Transaction[];
}

type DataType = 'all' | 'income' | 'expense';
type PeriodType = 'week' | 'month' | 'year';

const FinanceHistogram: React.FC<FinanceHistogramProps> = ({ transactions }) => {
    const [dataType, setDataType] = useState<DataType>('all');
    const [period, setPeriod] = useState<PeriodType>('month');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Генерация тестовых данных если нет транзакций
    const getData = () => {
        if (transactions.length === 0) {
            // Генерируем тестовые данные
            const testData: Transaction[] = [];
            const today = new Date();

            for (let i = 0; i < 30; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);

                testData.push({
                    id: `${i}-income`,
                    date: date.toISOString().split('T')[0],
                    amount: Math.floor(Math.random() * 5000) + 3000,
                    type: 'income'
                });

                testData.push({
                    id: `${i}-expense`,
                    date: date.toISOString().split('T')[0],
                    amount: Math.floor(Math.random() * 3000) + 1000,
                    type: 'expense'
                });
            }
            return testData;
        }
        return transactions;
    };

    const drawHistogram = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const data = getData();
        const now = new Date();

        // Фильтрация по периоду
        const days = period === 'week' ? 7 : period === 'month' ? 30 : 365;
        const filteredData = data.filter(t => {
            const diff = (now.getTime() - new Date(t.date).getTime()) / (1000 * 3600 * 24);
            return diff <= days;
        });

        // Фильтрация по типу
        const finalData = dataType === 'all'
            ? filteredData
            : filteredData.filter(t => t.type === dataType);

        // Группировка по дням
        const grouped: {[key: string]: {income: number, expense: number}} = {};

        finalData.forEach(t => {
            const dateKey = new Date(t.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: period === 'year' ? 'short' : 'numeric'
            });

            if (!grouped[dateKey]) {
                grouped[dateKey] = { income: 0, expense: 0 };
            }

            grouped[dateKey][t.type] += t.amount;
        });

        const labels = Object.keys(grouped).slice(-10); // Берем последние 10 дней
        const values = labels.map(label => ({
            income: grouped[label].income,
            expense: grouped[label].expense
        }));

        // Очистка
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Настройки
        const padding = 40;
        const chartWidth = canvas.width - padding * 2;
        const chartHeight = canvas.height - padding * 2;
        const barWidth = chartWidth / labels.length * 0.8;
        const gap = chartWidth / labels.length * 0.2;

        // Максимальное значение для масштабирования
        const maxValue = Math.max(...values.map(v => Math.max(v.income, v.expense)));

        // Рисуем столбцы
        labels.forEach((label, i) => {
            const x = padding + i * (barWidth + gap);

            if (dataType === 'all') {
                // Две колонки
                const incomeHeight = (values[i].income / maxValue) * chartHeight;
                const expenseHeight = (values[i].expense / maxValue) * chartHeight;

                // Доходы (зеленый)
                ctx.fillStyle = '#4CAF50';
                ctx.fillRect(x, canvas.height - padding - incomeHeight, barWidth/2, incomeHeight);

                // Расходы (красный)
                ctx.fillStyle = '#F44336';
                ctx.fillRect(x + barWidth/2, canvas.height - padding - expenseHeight, barWidth/2, expenseHeight);
            } else {
                // Одна колонка
                const value = dataType === 'income' ? values[i].income : values[i].expense;
                const height = (value / maxValue) * chartHeight;

                ctx.fillStyle = dataType === 'income' ? '#4CAF50' : '#F44336';
                ctx.fillRect(x, canvas.height - padding - height, barWidth, height);
            }

            // Подпись
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(label, x + barWidth/2, canvas.height - padding + 20);
        });

        // Оси
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.strokeStyle = '#ddd';
        ctx.stroke();

        // Легенда
        const legendY = 20;
        if (dataType === 'all') {
            // Доходы
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(canvas.width - 180, legendY, 15, 15);
            ctx.fillStyle = '#a13232';
            ctx.fillText('Доходы', canvas.width - 160, legendY + 12);

            // Расходы
            ctx.fillStyle = '#F44336';
            ctx.fillRect(canvas.width - 80, legendY, 15, 15);
            ctx.fillStyle = '#333';
            ctx.fillText('Расходы', canvas.width - 60, legendY + 12);
        } else {
            ctx.fillStyle = dataType === 'income' ? '#4CAF50' : '#F44336';
            ctx.fillRect(canvas.width - 150, legendY, 15, 15);
            ctx.fillStyle = '#333';
            ctx.fillText(dataType === 'income' ? 'Доходы' : 'Расходы', canvas.width - 130, legendY + 12);
        }
    };

    useEffect(() => {
        drawHistogram();
    }, [dataType, period]);

    return (
        <div className="finance-histogram">
            <div className="controls">
                <div className="tabs">
                    <button
                        className={dataType === 'all' ? 'active' : ''}
                        onClick={() => setDataType('all')}
                    >
                        Все
                    </button>
                    <button
                        className={dataType === 'income' ? 'active' : ''}
                        onClick={() => setDataType('income')}
                    >
                        Доходы
                    </button>
                    <button
                        className={dataType === 'expense' ? 'active' : ''}
                        onClick={() => setDataType('expense')}
                    >
                        Расходы
                    </button>
                </div>

                <div className="period">
                    <select value={period} onChange={(e) => setPeriod(e.target.value as PeriodType)}>
                        <option value="week">Неделя</option>
                        <option value="month">Месяц</option>
                        <option value="year">Год</option>
                    </select>
                </div>
            </div>

            <div className="chart-container">
                <canvas
                    ref={canvasRef}
                    width={600}
                    height={300}
                />
            </div>
        </div>
    );
};

export default FinanceHistogram;