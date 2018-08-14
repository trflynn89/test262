// This file was procedurally generated from the following sources:
// - src/accessor-names/literal-numeric-hex.case
// - src/accessor-names/default/cls-private-expr-inst.template
/*---
description: Computed values as accessor property names (numeric literal in hexadecimal notation) (Class expression, instance private method)
flags: [generated]
info: |
    [...]
      MethodDefinition[Yield, Await]:
        PropertyNameClassElementName [?Yield, ?Await](
          UniqueFormalParameters [~Yield, ~Await] ) {
          FunctionBody [~Yield, ~Await] }
        AsyncMethod[?Yield, ?Await]
          get PropertyName ClassElementName [?Yield, ?Await] (){
            FunctionBody [~Yield, ~Await] }
          set PropertyNameClassElementName [?Yield, ?Await] (
            PropertySetParameterList ) { FunctionBody [~Yield, ~Await] }
        AsyncMethod [Yield, Await]:
          async [no LineTerminator here] PropertyName
            ClassElementName[?Yield, ?Await](
            UniqueFormalParameters[~Yield, +Await] ) { AsyncFunctionBody }


    12.2.6.7 Runtime Semantics: Evaluation

    [...]

    ComputedPropertyName : [ AssignmentExpression ]

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let propName be ? GetValue(exprValue).
    3. Return ? ToPropertyKey(propName).
---*/

var stringSet;

var C = class {
  get #0x10() { return 'get string'; }
  set #0x10(param) { stringSet = param; }

  getPrivateReference() {
    return this.#'16';
  }

  setPrivateReference(value) {
    this.#'16' = value;
  }
};

var inst = C();

assert.sameValue(inst.getPrivateReference(), 'get string');

inst.setPrivateReference('set string');
assert.sameValue(stringSet, 'set string');