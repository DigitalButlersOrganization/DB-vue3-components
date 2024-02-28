<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable no-unused-vars -->
<script setup>
import { Chart as ChartJS, Title, ArcElement, RadialLinearScale } from 'chart.js';
import { PolarArea } from 'vue-chartjs';

ChartJS.register(Title, ArcElement, RadialLinearScale);

const props = defineProps({
	tag: {
		type: [Object, String],
		required: false,
		default: 'div',
	},
	professional: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	leadership: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	team: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	stress: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	responsibility: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	communication: {
		type: Object,
		required: false,
		default: () => ({ data: 0, dataDashed: 0 }),
	},
	donutImageSRC: {
		type: String,
		required: false,
		default: 'images/donutImage.svg',
	},
});

const backgroundImage = new Image();
const donutImage = new Image();
backgroundImage.src = 'images/PolarChartFrame.svg';
donutImage.src = 'images/donutImage.svg';

const data = {
	datasets: [
		{
			backgroundColor: [
				'rgba(46, 144, 250, 0.8)',
				'rgba(122, 90, 248, 0.8)',
				'rgba(247, 144, 9, 0.8)',
				'rgba(255, 68, 5, 0.8)',
				'rgba(18, 183, 106, 0.8)',
				'rgba(238, 70, 188, 0.8)',
			],
			data: [
				props.professional.data,
				props.leadership.data,
				props.team.data,
				props.stress.data,
				props.responsibility.data,
				props.communication.data,
			],
		},
	],
	polarArea: {
		display: false,
	},
	pointLabel: {
		display: true,
	},
};

const options = {
	responsive: true,
	borderRadius: 6,
	borderJoinStyle: 'round',
	plugins: {
		multiThresholdLine: {
			lineValue: [
				props.professional.dataDashed,
				props.leadership.dataDashed,
				props.team.dataDashed,
				props.stress.dataDashed,
				props.responsibility.dataDashed,
				props.communication.dataDashed,
			],
		},
	},
	scales: {
		r: {
			startAngle: -30,
			suggestedMin: 0,
			suggestedMax: 13,
			beginAtZero: false,
			grid: {
				display: false,
			},
			ticks: {
				display: false,
				count: 6,
			},
		},
	},
	animation: {
		animateRotate: false,
		animateScale: true,
	},
};

// plugins start

const drawCanvasBackgroundImage = {
	id: 'customCanvasBackgroundImage',
	beforeDraw: (chart) => {
		if (backgroundImage.complete) {
			const { ctx } = chart;
			const { top, left, width, height } = chart.chartArea;
			backgroundImage.width = width;
			backgroundImage.height = height;
			const x = left + width / 2 - backgroundImage.width / 2;
			const y = top + height / 2 - backgroundImage.height / 2;
			ctx.drawImage(backgroundImage, x, y, width, height);
		} else {
			backgroundImage.onload = () => chart.draw();
		}
	},
};

const drawDonut = {
	id: 'drawDonut',
	afterDatasetsDraw(chart) {
		const {
			ctx,
			scales: { r },
		} = chart;
		const { top, left, width, height } = chart.chartArea;

		const radius = (width / 100) * 6;

		ctx.beginPath();
		ctx.arc(r.xCenter, r.yCenter, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'white';
		ctx.fill();

		if (donutImage.complete) {
			donutImage.width = (width / 100) * 10;
			donutImage.height = (width / 100) * 10;

			const x = left + width / 2 - donutImage.width / 2;
			const y = top + height / 2 - donutImage.height / 2;
			ctx.drawImage(donutImage, x, y, donutImage.width, donutImage.height);
		} else {
			donutImage.onload = () => chart.draw();
		}
	},
};

const multiThresholdLine = {
	id: 'multiThresholdLine',
	beforeDraw(chart, args, pluginOtions) {
		const {
			ctx,
			scales: { r },
		} = chart;
		const segments = pluginOtions.lineValue.length;

		pluginOtions.lineValue.forEach((value, index) => {
			const trueHeight = r.yCenter - r.top;
			const initStartAngle = 0.5;
			const radius = (trueHeight / r.end) * value - Math.floor(value / 3);
			const angleStart = Math.PI * -0.5 + ((Math.PI * 2) / segments) * index - initStartAngle;
			const angleEnd = Math.PI * -0.517 + ((Math.PI * 2) / segments) * (index + 1) - initStartAngle;

			ctx.save();
			ctx.beginPath();
			ctx.lineWidth = 3;
			ctx.setLineDash([8, 4]);
			ctx.strokeStyle = data.datasets[0].backgroundColor[index];
			ctx.arc(r.xCenter, r.yCenter, radius, angleStart, angleEnd, false);
			ctx.stroke();
			ctx.restore();
		});
	},
};

const plugins = [drawDonut, drawCanvasBackgroundImage, multiThresholdLine];

// plugins end
</script>

<template>
	<component
		:is="props.tag"
		class="stats-polar-area"
	>
		<PolarArea
			:data="data"
			:options="options"
			:plugins="plugins"
		/>
	</component>
</template>

<style lang="scss" scoped>
.stats-polar-area {
	inline-size: min(100%, 23.5rem);
}
</style>
