import { IShoppingProduct } from 'src/app/core/interface';
import { fakeProducts } from './../../../../moocks/index';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TuiFileLike } from '@taiga-ui/kit';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  datas: IShoppingProduct[] = fakeProducts;
  enableProductForm: boolean = false;
  readonly control = new FormControl([], [maxFilesLength(3)]);
  rejectedFiles: readonly TuiFileLike[] = [];

  ngOnInit(): void {
    this.control.statusChanges.subscribe((response) => {
      console.info('STATUS', response);
      console.info('ERRORS', this.control.errors, '\n');
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({ value }: AbstractControl) => {
    return value.length > maxLength
      ? {
          maxLength: new TuiValidationError(
            'Error: maximum limit - 3 files for upload'
          ),
        }
      : null;
  };
}
