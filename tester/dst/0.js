delete String.prototype.includes;
                     require('core-js');
                     try {
                       var result = String.prototype.includes.apply('bob', ['hello']);
                      console.log('STD:'+JSON.stringify(result));
                    } catch (e) {
                       console.log('FN THROW ERR:' + e);
                     }