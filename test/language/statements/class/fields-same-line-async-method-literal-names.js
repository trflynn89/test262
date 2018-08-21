// This file was procedurally generated from the following sources:
// - src/class-fields/literal-names.case
// - src/class-fields/productions/cls-decl-after-same-line-async-method.template
/*---
description: Literal property names (field definitions after an async method in the same line)
esid: prod-FieldDefinition
features: [class, class-fields-public, async-functions]
flags: [generated, async]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/
const fn = function() {}



class C {
  async m() { return 42; } a; b = 42;
  c = fn;
  
}

var c = new C();

assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);
assert.sameValue(c.m, C.prototype.m);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
}, {restore: true});

c.m().then(function(v) {
  assert.sameValue(v, 42);

  function assertions() {
    // Cover $DONE handler for async cases.
    function $DONE(error) {
      if (error) {
        throw new Test262Error('Test262:AsyncTestFailure')
      }
    }
    assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
    assert.sameValue(Object.hasOwnProperty.call(C, "a"), false);

    verifyProperty(c, "a", {
      value: undefined,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert.sameValue(Object.hasOwnProperty.call(C.prototype, "b"), false);
    assert.sameValue(Object.hasOwnProperty.call(C, "b"), false);

    verifyProperty(c, "b", {
      value: 42,
      enumerable: true,
      writable: true,
      configurable: true
    });

    assert.sameValue(Object.hasOwnProperty.call(C.prototype, "c"), false);
    assert.sameValue(Object.hasOwnProperty.call(C, "c"), false);

    verifyProperty(c, "c", {
      value: fn,
      enumerable: true,
      writable: true,
      configurable: true
    });

  }

  return Promise.resolve(assertions());
}, $DONE).then($DONE, $DONE);
