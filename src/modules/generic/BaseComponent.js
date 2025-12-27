class BaseComponent {
   constructor() {
       if (this.constructor === BaseComponent) {
           throw new Error('Невозможно слоздать экземпляр абстрактного класса BaseComponent!')
       }
   }

    getProxyState(initialState) {
       return new Proxy(initialState, {
           get: (target, prop) => {
               return target[prop]
           },
           set: (target, prop, newValue) => {
               const oldValue = target[prop]

               target[prop] = newValue

               if(newValue !== oldValue) {
                   this.updateUI()
               }

               return true
           },
       })
   }



    /**
     * Перерисовка UI после обновления состояния
    */
    updateUI() {
        throw new Error('Необходимр реализовать метод updateUI!')
    }
}

export default BaseComponent