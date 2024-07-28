import { Component, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';

interface WorkoutData {
  type: string;
  minutes: number;
}

@Component({
  selector: 'app-workout-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="display: block;">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: []
})
export class WorkoutProgressComponent implements OnChanges, AfterViewInit {
  @Input() userData: WorkoutData[] = [];
  @Input() userName: string = '';
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart: Chart | undefined;

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userData'] && this.chart) {
      this.updateChartData();
    }
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'bar' as ChartType,
        data: {
          labels: [],
          datasets: [{
            label: 'Minutes',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      this.updateChartData();
    }
  }

  private updateChartData(): void {
    if (this.chart) {
      const labels = this.userData.map(workout => workout.type);
      const data = this.userData.map(workout => workout.minutes);

      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = data;
      this.chart.update();
    }
  }
}