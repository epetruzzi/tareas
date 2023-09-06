import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController
    ) { }

    //#########LOADING#######

    //   presents

    async presentLoading(opt?: LoadingOptions) {
      const loading = await this.loadingController.create(opt);
       await loading.present();
    }

    //    dismiss

    async dismissLoading(){
      return await this.loadingController.dismiss()
    }

    setElementInLocalStorage(key: string, element: any){
      return localStorage.setItem(key, JSON.stringify(element))
    }

    getElementFromLocalStorage(key: string){
      return JSON.parse(localStorage.getItem(key))
    }

    async presentToast(opts: ToastOptions) {
      const toast = await this.toastController.create(opts);
     toast.present();
    }

    routerLink(url: string){
      return this.router.navigateByUrl(url)
    }
}
