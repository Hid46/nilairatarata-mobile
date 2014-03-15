$(document).ready(function() {
    
    // handle bila hitungBtn diklik maka hitung nilai rata - rata
    $('#hitungBtn').click(function() {
        var mtkNilai = parseFloat($('#mtkInput').val());
        var indoNilai = parseFloat($('#indoInput').val());
        var ingNilai = parseFloat($('#ingInput').val());
        var ipaNilai = parseFloat($('#ipaInput').val());
        var nilaiRatarata = (mtkNilai+indoNilai+ingNilai+ipaNilai)/4;
        $('#nilaiRataBox').val(nilaiRatarata);
    });
    
});