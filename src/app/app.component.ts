import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "A511";

  showNotification() {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      var notification = new Notification("Título de la notificación", {
        icon: "../assets/android-chrome-192x192.png",
        body: "Este es el cuerpoi de la notificación",
      });
      notification.onclick = function () {
        window.open("https://google.es");
      };
    }
  }
}
