import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  FormsModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatTabsModule,
  MatToolbarModule,
  MatInputModule,
  MatExpansionModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...materialModules],
})
export class SharedMaterialModule {}
