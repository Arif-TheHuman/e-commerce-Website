import { Component } from '@angular/core';

type Statistic = {
  name: string;
  value: number;
};

type StatisticKey = keyof Statistic;

@Component({
  selector: 'app-performance',
  templateUrl: './performance.page.html',
  styleUrls: ['./performance.page.scss'],
})
export class PerformancePage {
  statistics: Statistic[] = [];
  sortColumn: StatisticKey = 'name';
  sortAscending: boolean = true;

  constructor() {
    this.generateStatistics();
  }

  generateStatistics() {
    const stats = ['Revenue', 'Profit', 'Loss', 'Sales', 'Customers'];
    this.statistics = stats.map(stat => ({
      name: stat,
      value: Math.floor(Math.random() * 10000)
    }));
    this.sortData();
  }

  sortData() {
    this.statistics.sort((a, b) => {
      if (a[this.sortColumn] < b[this.sortColumn]) return this.sortAscending ? -1 : 1;
      if (a[this.sortColumn] > b[this.sortColumn]) return this.sortAscending ? 1 : -1;
      return 0;
    });
  }

  changeSort(column: StatisticKey) {
    if (column === this.sortColumn) {
      this.sortAscending = !this.sortAscending;
    } else {
      this.sortColumn = column;
      this.sortAscending = true;
    }
    this.sortData();
  }
}