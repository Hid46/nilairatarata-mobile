$(document).ready(function() {
    
    // handle bila calcBtn diklik maka hitung berat ideal
    $('#hitungBtn').click(function() {
        var mtkNilai = parseFloat($('#mtkInput').val());
        var indoNilai = parseFloat($('#indoInput').val());
        var ingNilai = parseFloat($('#ingrisInput').val());
        var ipaNilai = parseFloat($('#ipaInput').val());
        var nilaiRatarata = (mtkNilai + indoNilai + ingNilai + ipaNilai) / 4;
        $('#nilaiRataBox').val(nilaiRatarata);
    });
    
});