import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile: any = {};
  weatherInfo = [];

  constructor(private service: ServiceService) {}

  ngOnInit() {
    // this.profileService.getProfile().subscribe((data) => {
    //   this.profile = data;
    //   console.log("Profile:\n",this.profile);
    // });

    this.service.getWeather().subscribe((data) => {
      console.log("Before call in home component");
      this.weatherInfo = data;
    })
  }

  // Method to call the API and download the file
    downloadResume() {
      // this.profileService.downloadResume().subscribe(
      //   (blob: Blob) => {
      //     // Use FileSaver.js to download the file
      //     const filename = 'Balusu_resume.pdf'; // Provide default filename
      //     saveAs(blob, filename); // Trigger file download
      //   },
      //   (error) => {
      //     console.error('Error downloading file:', error);
      //     alert('There was an error downloading the file.');
      //   }
      // );
    }

    viewResume() {
      // this.profileService.viewResume().subscribe(response => {
      //   const blob = new Blob([response], { type: 'application/pdf' });
      //   const url = window.URL.createObjectURL(blob);
      //   window.open(url);  // Open in new tab
      // });
    }
}
