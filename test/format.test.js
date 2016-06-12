'use strict';

describe('format', function() {

    it('should return 동해물과 백두산이 마르고 닳도록 for index params', function() {
        var base = '{0}과 {1}이 {2} 닳도록';
        expect(base.format('동해물', '백두산', '마르고')).toBe('동해물과 백두산이 마르고 닳도록');
    });

    it('should return 남산 위에 저 소나무, 철갑을 두른 듯 for JSON param', function() {
        var base = '{first} 위에 저 {second}, {third}을 두른 듯';
        expect(base.format({
            'first' : '남산',
            'second': '소나무',
            'third' : '철갑'
        })).toBe('남산 위에 저 소나무, 철갑을 두른 듯');
    });

});
