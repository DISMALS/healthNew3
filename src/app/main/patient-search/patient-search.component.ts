import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {
  public count:number = 0;
  public patientList: Array<PatientInfo> = [];
  public titleFilter:FormControl = new FormControl();

  constructor () { }

  ngOnInit () {
    const patList = [
      new PatientInfo(1, '患者一', 'M', 36736485, 'R00001', 15138991340),
      new PatientInfo(2, '患者二', 'F', 724234, 'R00002', 15138991240),
      new PatientInfo(3, '患者三', 'F', 234231323, 'R00003', 15138951340),
      new PatientInfo(4, '患者四', 'M', 46456571234, 'R00004', 15133991340),
      new PatientInfo(5, '患者五', 'O', 65852343434, 'R00005', 15138951340)
    ];
    this.patientList = patList.map( item => {
      if (item.gender === 'M') {item.sex = '男';}
      if (item.gender === 'F') {item.sex = '女';}
      if (item.gender === 'O') {item.sex = '未知';}
      return item;
    });

    // 延迟搜索
    this.titleFilter.valueChanges.debounceTime(1000).subscribe( value => {
      console.log(value);
      this.titleFilter.setValue('');
    });
  }
  clear () {
    console.log('清空');
  }
}
export class PatientInfo {
  constructor (
    public id: number,
    public name: string,
    public gender: string,
    public birthday: number,
    public mrn: string,
    public phon: number,
    public sex?:string
  ) {}
}
