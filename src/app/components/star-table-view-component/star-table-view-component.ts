import { DecimalPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

interface BrightStar {
  id: number;
  hip: number | null;
  hd: number | null;
  hr: number | null;
  name: string;
  properName: string | null;
  bayerFlamsteed: string | null;
  constellation: string | null;
  rightAscension: number | null;
  declination: number | null;
  distanceParsec: number | null;
  apparentMagnitude: number;
  absoluteMagnitude: number | null;
  spectralType: string | null;
  colorIndex: number | null;
  luminosity: number | null;
  temperatureK: number | null;
}

@Component({
  selector: 'app-star-table-view-component',
  standalone: true,
  imports: [DecimalPipe, MatPaginatorModule, MatTableModule],
  templateUrl: './star-table-view-component.html',
  styleUrl: './star-table-view-component.css',
})
export class StarTableViewComponent implements OnInit {
  private paginator?: MatPaginator;

  @ViewChild(MatPaginator)
  protected set matPaginator(paginator: MatPaginator | undefined) {
    if (paginator) {
      this.paginator = paginator;
      this.dataSource.paginator = paginator;
    }
  }

  protected readonly dataSource = new MatTableDataSource<BrightStar>([]);
  protected readonly displayedColumns = [
    'rank',
    'name',
    'catalogs',
    'spectralType',
    'apparentMagnitude',
    'absoluteMagnitude',
    'colorIndex',
    'temperatureK',
    'luminosity',
    'distanceParsec',
  ];

  protected readonly stars = signal<BrightStar[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly brightest = computed(() => this.stars()[0]);
  protected readonly faintest = computed(() => this.stars()[this.stars().length - 1]);

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<BrightStar[]>('data/brightest-stars.json').subscribe({
      next: (stars) => {
        this.stars.set(stars);
        this.dataSource.data = stars;
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Could not load the brightest stars catalog.');
        this.isLoading.set(false);
      },
    });
  }

  protected catalogLabel(star: BrightStar): string {
    const ids = [
      star.hr ? `HR ${star.hr}` : null,
      star.hd ? `HD ${star.hd}` : null,
      star.hip ? `HIP ${star.hip}` : null,
    ].filter(Boolean);

    return ids.length ? ids.join(' / ') : `HYG ${star.id}`;
  }

  protected rowNumber(index: number): number {
    const pageIndex = this.paginator?.pageIndex ?? 0;
    const pageSize = this.paginator?.pageSize ?? this.dataSource.data.length;

    return pageIndex * pageSize + index + 1;
  }
}
