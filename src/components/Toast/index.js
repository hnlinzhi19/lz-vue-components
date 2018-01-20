import Toast from './toast.vue';

const toastPlugin = {};
let timer = null;
toastPlugin.install = function (Vue, options) {
  const ToastController = Vue.extend(Toast);

  ToastController.prototype.close = function () {
    this.visible = false;
  };

  const instance = new ToastController().$mount();

  const toastDom = document.getElementsByClassName('toast');
  if (toastDom.length === 0) {
    document.body.appendChild(instance.$el);
  }
  const prop = Vue.prototype;
  prop.$toast = (option = {}) => { //
    instance.msg = typeof option === 'string' ? option : option.msg;
    let duration = 2500;
    if (typeof option === 'object') {
      duration = option.duration || options.duration;
    }

    instance.visible = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      instance.close();
    }, duration);
    return instance;
  };
};

export default toastPlugin;
