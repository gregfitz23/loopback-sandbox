'use strict';

module.exports = function(Parent) {
  /**
   *
   * @param {Function(Error)} callback
   */

  Parent.prototype.testPolymorphic = function(callback) {
    const filter = {
      where: {
        name: 'test',
      },
    };

    this.children(filter, (err, children) => {
      console.error('error: ', err);

      let _err;
      if (err) {
        _err = new Error(err.message);
      }

      callback(_err, children);
    });
  };

};
