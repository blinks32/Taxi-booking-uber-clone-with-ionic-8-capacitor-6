import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  histories: any[] = [];
  loading: boolean = true;

  constructor(private nav: NavController, private firestore: Firestore, private auth: Auth) { }

  ngOnInit() {
    this.loadHistory();
  }

  goBack() {
    this.nav.pop();
  }

  async loadHistory() {
    try {
      const userId = this.auth.currentUser.uid;
      const historyRef = collection(this.firestore, `Riders/${userId}/History`);
      const snapshot = await getDocs(historyRef);
      this.histories = snapshot.docs.map(doc => doc.data());
      console.log('Fetched data:', this.histories); // Debugging log
    } catch (error) {
      console.error('Error fetching history:', error); // Handle any errors
    } finally {
      this.loading = false; // Ensure loading is set to false after data is fetched
    }
  }
}
