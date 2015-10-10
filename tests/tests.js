var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('4e2F = 204.4C', function() {
        original.value = "4e2F";
        calculate();
        assert.deepEqual(converted.innerHTML, "204.4 Celsius");
    });
    test('-11e-7C = 32.0F', function() {
        original.value = "-11e-7C";
        calculate();
        assert.deepEqual(converted.innerHTML,"32.0 Farenheit");
    });
    test('3.3e-2C Es un numero?', function() {
       original.value = "3.3e-2C";
       calculate();
       assert.isString(converted.innerHTML);
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
