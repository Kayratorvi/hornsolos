import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { TextDescriptionsComponent } from 'src/app/home/solo-cards/text-descriptions/text-descriptions.component'

@Component({
  selector: 'app-solo-cards',
  templateUrl: './solo-cards.component.html',
  styleUrls: ['./solo-cards.component.sass']
})
export class SoloCardsComponent {

  hornSolos = [{
    songTitle: "Sonata for Horn and Piano",
    composer: "Ludwig van Beethoven",
    recording: "https://youtu.be/mlKJ9CjSv_U?t=161",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEp3HNXH45CemAVHsY?e=iBbOQT",
    png: "./assets/images/beethoven_sonata.png",
    divId: 0,
    description: this.descriptions.text[0],
    personalNote: this.descriptions.personal[0],
    songLength: this.descriptions.length[0]
  },{
    songTitle: "Concerto for Horn and Strings",
    composer: "Gordon Jacob",
    recording: "https://youtu.be/v7Gp7hWRMrg",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzOQkc3rfTnLm7R2?e=comdpb",
    png: "./assets/images/jacob_concerto.png",
    divId: 1,
    description: this.descriptions.text[1],
    personalNote: this.descriptions.personal[1],
    songLength: this.descriptions.length[1]
  },{
    songTitle: "Concerto Op. 8",
    composer: "Franz Strauss",
    recording: "https://youtu.be/LPkiSzUqAgM",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzt-NWEItdaI1wkv?e=gKRIZu",
    png: "./assets/images/franz_strauss_concerto.png",
    divId: 2,
    description: this.descriptions.text[2],
    personalNote: this.descriptions.personal[2],
    songLength: this.descriptions.length[2]
  },{
    songTitle: "Concerto no. 1 in Eb Major",
    composer: "Richard Strauss",
    recording: "https://youtu.be/s68W8KDp5eM",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzmVw41GSqtiBx-Z?e=qQtVUE",
    png: "./assets/images/richard_strauss_concerto_no1.png",
    divId: 3,
    description: this.descriptions.text[3],
    personalNote: this.descriptions.personal[3],
    songLength: this.descriptions.length[3]
  },{
    songTitle: "Concerto no. 2 in Eb Major",
    composer: "Richard Strauss",
    recording: "https://youtu.be/QWI8xrbbOQk",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrE50CGnV8fpdIY1aiP?e=snqJ6e",
    png: "./assets/images/richard_strauss_concerto_no2.png",
    divId: 4,
    description: this.descriptions.text[4],
    personalNote: this.descriptions.personal[4],
    songLength: this.descriptions.length[4]
  },{
    songTitle: "Sonata for Horn and Piano",
    composer: "Paul Hindemith",
    recording: "https://youtu.be/dghhzQ6pV5g",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywfOz2SNx7Jf_y11?e=o9N9X5",
    png: "./assets/images/hindemith_sonata.png",
    divId: 5,
    description: this.descriptions.text[5],
    personalNote: this.descriptions.personal[5],
    songLength: this.descriptions.length[5]
  },{
    songTitle: "Concerto no. 1 in D Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=5",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzSpI-7X16ftJRwy?e=0BWKeV",
    png: "./assets/images/mozart_concerto_1.png",
    divId: 6,
    description: this.descriptions.text[6],
    personalNote: this.descriptions.personal[6],
    songLength: this.descriptions.length[6]
  },{
    songTitle: "Concerto no. 2 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=755",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzW8lCcx_YsHeVy7?e=w9wBR5",
    png: "./assets/images/mozart_concerto_2.png",
    divId: 7,
    description: this.descriptions.text[7],
    personalNote: this.descriptions.personal[7],
    songLength: this.descriptions.length[7]
  },{
    songTitle: "Concerto no. 3 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=1553",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzaRTez_VwvcVmxg?e=dlPS09",
    png: "./assets/images/mozart_concerto_3.png",
    divId: 8,
    description: this.descriptions.text[8],
    personalNote: this.descriptions.personal[8],
    songLength: this.descriptions.length[8]
  },{
    songTitle: "Concerto no. 4 in Eb Major",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/hQ0X44TuCnc?t=2430",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzenTQSsA3v-fpcB?e=nuoQqh",
    png: "./assets/images/mozart_concerto_4.png",
    divId: 9,
    description: this.descriptions.text[9],
    personalNote: this.descriptions.personal[9],
    songLength: this.descriptions.length[9]
  },{
    songTitle: "Horn Quintet: Rondo",
    composer: "W.A. Mozart",
    recording: "https://youtu.be/dFw4YWJ-pIc?t=522",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrE3WFq7P-dd0VQZ0Af?e=smCs47",
    png: "./assets/images/mozart_quintet_rondo.png",
    divId: 10,
    description: this.descriptions.text[10],
    personalNote: this.descriptions.personal[10],
    songLength: this.descriptions.length[10]
  },{
    songTitle: "Horn-lokk",
    composer: "Sigurd Berge",
    recording: "https://youtu.be/XF2q3PqK_LU",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEgehRnM_BQdtDmmylaQ?e=VeSuOr",
    png: "./assets/images/horn-lokk.png",
    divId: 11,
    description: this.descriptions.text[11],
    personalNote: this.descriptions.personal[11],
    songLength: this.descriptions.length[11]
  },{
    songTitle: "Intrada for Solo Horn",
    composer: "Otto Ketting",
    recording: "https://youtu.be/UVcCBOJu748",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEsiq6XrbRCYw0y-7l?e=pq8Edj",
    png: "./assets/images/intrada.png",
    divId: 12,
    description: this.descriptions.text[12],
    personalNote: this.descriptions.personal[12],
    songLength: this.descriptions.length[12]
  },{
    songTitle: "Morceau de Concert",
    composer: "Camille Saint-Saens",
    recording: "https://youtu.be/hT-rV9UmTnA",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEsiuNHhVgZT8J3ojp?e=inK8wY",
    png: "./assets/images/morceau_de_concert.png",
    divId: 13,
    description: this.descriptions.text[13],
    personalNote: this.descriptions.personal[13],
    songLength: this.descriptions.length[13]
  },{
    songTitle: "Parable VIII for Solo Horn",
    composer: "Vincent Persichetti",
    recording: "https://youtu.be/ViEjfDcfd8g",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywkv1hGtxHlL_Z-L?e=cmFW6B",
    png: "./assets/images/parable.png",
    divId: 14,
    description: this.descriptions.text[14],
    personalNote: this.descriptions.personal[14],
    songLength: this.descriptions.length[14]
  },{
    songTitle: "Suite in F Major for Two Horns",
    composer: "Georg Philipp Telemann",
    recording: "https://youtu.be/1RW_A_43nKs",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrEywin5J4etVZXCFUJ?e=r4GCcf",
    png: "./assets/images/suite_duet_in_f.png",
    divId: 15,
    description: this.descriptions.text[15],
    personalNote: this.descriptions.personal[15],
    songLength: this.descriptions.length[15]
  },{
    songTitle: "Villanelle",
    composer: "Paul Dukas",
    recording: "https://youtu.be/FKQbfOEDPVo",
    pdf: "https://1drv.ms/b/s!AkA_Acnm8RrExzrGKbFOEiWHIzWG?e=tKmwwp",
    png: "./assets/images/villanelle.png",
    divId: 16,
    description: this.descriptions.text[16],
    personalNote: this.descriptions.personal[16],
    songLength: this.descriptions.length[16]
  }];

  time = new Observable<Date>((observer: Observer<Date>) => {
    observer.next(new Date());
    setInterval(() => observer.next(new Date()), 10000);
  });

  show = false;
  divIdInt = -1;

  expand(int: number) {
    if (int != null || int > 16) {
    document.getElementById(this.hornSolos[int].divId.toString())!.style.display = "block";
    }
    else {
      throw console.error();
    }
  }

  minimize(int: number) {
    if (int != null || int > 16) {
      document.getElementById(this.hornSolos[int].divId.toString())!.style.display = "none";
    }
    else {
      throw console.error();
    }
  }

  divIdCheck(int: number) {
    if (this.divIdInt == int) {
      return true;
    }
    else {
      return false;
    }
  }

  configUrl = './assets/config.json'

  getTextFile(fileName: string) {
    console.log(this.http.get(fileName, {responseType: 'text'}));
    return this.http.get(fileName, {responseType: 'text'});
  }

  constructor(private http: HttpClient,
    private descriptions: TextDescriptionsComponent) { }

}