import {register} from 'register-service-worker';

export function checkSw() {
  if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
      updatefound(registration: ServiceWorkerRegistration) {
        if (window.confirm('새로운 버젼이 발견되었습니다!\n새로고침 하시겠습니까?')) {
          registration.update().then(() => {
            window.location.href = window.location.href;
          });
        }
      }
    });
  }
}

