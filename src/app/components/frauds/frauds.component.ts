import {Component, OnInit} from '@angular/core';
import {YmlService} from '../../services/yml.service';

@Component({
  selector: 'app-frauds',
  templateUrl: './frauds.component.html',
  styleUrls: ['./frauds.component.scss']
})
export class FraudsComponent implements OnInit {

  listaZestawowDanych: [
    {
      'ID_ZLA': 0,
      'ID_PL': 0,
      'ID_UB': 0,
      'ID_LEKARZ': 0,
      'ID_ZOZ': 0,
      'UB0102_PLEC': 'K',
      'UB0103_DATA_URODZENIA': {},
      'UB0403_L_PLAT_3MC': 2,
      'UB0405_L_PLAT_3MC_JEST_CHOR': 2,
      'UB0503_L_ZOZOW_2Y': 1,
      'UB0504_L_ZLA_STATUS_P_2Y': 12,
      'UB0505_L_ZLA_STATUS_K_2Y': 13,
      'UB0506_S_DNI_NIEZD_2Y': 123,
      'UB0508_L_KODOW_CHOROB_2Y': 21,
      'UB0601_L_NIESTAW_KO_2Y': 2,
      'PL0201_PKD_SEKCJA': 'A',
      'ZLA0102_NIEZDOD': {},
      'ZLA0103_NIEZDDO': {},
      'ZLA0104_LICZBADNINDP': 2,
      'ZLA0105_LICZBADNIP': 1,
      'ZLA0106_WSKAZANIALEK': '1',
      'ZLA0107_KODCHOROBYA': 'A',
      'ZLA0108_KODCHOROBYB': 'B',
      'ZLA0109_KODCHOROBYC': 'C',
      'ZLA0110_KODCHOROBYD': 'D',
      'ZLA0111_NRSTATCHOROBY': 'F21',
      'ZLA0112_KODPOKREW': '1',
      'ZLA0114_KODCH_SR_CZAS_NZD5Y': 2.23,
      'PLUB0101_KOD_TYT_PODL': '110',
      'PLUB0104_CZY_CHOR_OBOW': 0,
      'PLUB0105_CZY_CHOR_DOBR': 1,
      'PLUB0201_S_PODST_CHOR_3M': 1023.02,
      'PLUB0203_L_OKR_ROZL_3MC': 2,
      'LEK0103_L_ZLA_P_O1Y': 3,
      'LEK0104_L_ZLA_K_O1Y': 3,
      'ZOZ0103_L_ZLA_P_O1Y': 3,
      'ZOZ0104_L_ZLA_K_O1Y': 3,
      'SLO01_KO_PROG_TRAFNOSC': 0.41,
      'SLO02_KO_PROG_STRATA': 1202,
      'SLO03_KO_PROG_LDNI': 40.2,
      'SLO04_KO_WERSJA_MODELU': '1.01.001',
      'SLO11_KW_PROG_TRAFNOSC': 0.41,
      'SLO12_KW_PROG_STRATA': 1202,
      'SLO13_KW_PROG_LDNI': 40.2,
      'SLO14_KW_WERSJA_MODELU': '1.01.001',
      'PAR01_STAN_NA': {}
    }
  ];

  Frauds = [];

  constructor(private yml: YmlService) {
  }

  ngOnInit(): void {
    this.yml.calculateFrauds(this.listaZestawowDanych).subscribe(frauds => {
      this.Frauds = frauds.listaZestawowDanych;
    });
  }

}
