import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupaBaseService } from '../../../supabase/supabase.service';

@Component({
  selector: 'app-redirect',
  template: ''
})
export class RedirectComponent implements OnInit {

  constructor(private supabaseService: SupaBaseService, private router: Router) {}

  ngOnInit(): void {
    this.supabaseService.getUser().subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}