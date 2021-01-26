var sepet = new Array();
var tutar = 0;
var toplam_urun = 0;

$(document).ready(function(){
  $("#toplam_urun").html(toplam_urun);

});

function yeniUrunEkle(urun,adet,fiyat){
  var urun_kontrol = null;
  tutar = 0;
  $("#sepet_icerik").html("");
  var yeni_urun = new Array();
  yeni_urun["adi"] = urun;
  yeni_urun["adet"] = adet;
  yeni_urun["fiyat"] = fiyat;

  sepet.push(yeni_urun);

  toplam_urun = sepet.length;
  $("#toplam_urun").html(toplam_urun);


  for(var i = 0; i < toplam_urun; i++){
    tutar += Number(sepet[i]["fiyat"]);
    $("#sepet_icerik").append('<li class="list-group-item d-flex justify-content-between lh-sm" id="urun_'+i+'">\n' +
      '                        <div>\n' +
      '                            <p class="h6 my-0"><span class="icerik_adi">'+sepet[i]["adi"]+'</span> (x<span class="icerik_miktar">'+sepet[i]["adet"]+'</span>) - ₺<span class="icerik_fiyat">'+sepet[i]["fiyat"]+'</span></p>\n' +
      '                        </div>\n' +
      '                        <a href="javascript:;" onclick="urunSil('+i+')" class="text-danger">x</a>\n' +
      '                    </li>');
  }


  $("#sepet_icerik").append('<li class="list-group-item d-flex justify-content-between">\n' +
    '                        <span>Toplam Fiyat</span>\n' +
    '                        <strong>₺<span id="tutar">'+tutar+'</span>.00</strong>\n' +
    '                    </li>');
}

function urunSil(id){
  tutar -= sepet[id]["fiyat"];
  delete sepet[id];
  $("#urun_"+id).remove();
  toplam_urun -= 1;
  $("#toplam_urun").html(toplam_urun);
  $("#tutar").html(tutar);
}

function sepetYenile(){

}



