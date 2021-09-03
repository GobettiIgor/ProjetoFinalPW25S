$(function () {
    $('#tableDiv').hide();
    let itensArray = getArrayStorage();
    verificaTable();
    if(itensArray.length <= 4){
        $('.footer').addClass('fixed-bottom');
    }

    if (itensArray.length === 0) {
        verificaCarrinho();
    } else {
        itensArray.forEach((item, index) => {
            $('#tableCarrinho tbody').append(adicionaItemCarrinho(item));
            verificaBtMinus(item.idProduto);
            calculaTotalProduto(item.idProduto);
            //calculaTotal();
            verificaCarrinho();
        });
    }
    //$('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    //calculaTotalFrete();
    //calculaTotalCarrinho();
})

function getArrayStorage() {
    return JSON.parse(localStorage.getItem('listaItens')) || [];
}

function verificaTable(){
    let itensArray = getArrayStorage();
    if(itensArray.length <= 4){
        $('.footer').addClass('fixed-bottom');
    }
    else{
        $('#tableCarrinho').addClass('mb-5');
        $('#tableCarrinho').addClass('pb-5');
    }
}

function setArrayStorage(array) {
    localStorage.setItem('listaItens', JSON.stringify(array));
}

function carregarProdutoTable() {
    let itens = [];
    $('#tableCarrinho tbody tr').each(function () {

        let produto = {
            idProduto: $(this).attr('id'),
            caminhoImagem: $('#' +($(this).attr('id')) + ' .img').attr('src'),
            nomeProduto: $('#' +($(this).attr('id')) + ' .nomeProduto').text(),
            preco: $('#' +($(this).attr('id')) + ' .precoProd').text(),
            qtd: $('#' +($(this).attr('id')) + ' .qtd').text()
        }
        itens.push(produto);
    })
    $('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    calculaTotalCarrinho();
    setArrayStorage(itens);
}

function adicionarNovoProduto(compraProduto) {
    $('#tableCarrinho tbody').append(adicionaItemCarrinho(compraProduto));
}

function adicionaItemCarrinho(compraProduto) {

    let tr = `
    <tr id="${compraProduto.id.produto.id}" class="${compraProduto.id.produto.id}">
        <td class="border-brown p-1">
            <div class="row">
                <img class="w-25 ml-3 img" src="${compraProduto.id.produto.img}" alt="">
                <p class="brown ml-3 h6 nomeProduto">${compraProduto.id.produto.nome}</p>
            </div>
        </td>
        <td class="border-brown"><span class="brown precoProd">${compraProduto.preco}</span></td>
        <td class="border-brown">
            <a id="btMinus" href="#" onclick="btMinus(this);">
                <i class="fa fa-minus brown mr-2" aria-hidden="true"></i
            ></a>
            <span class="brown qtd">${compraProduto.quantidade}</span>
            <a id="btPlus" href="#" onclick="btPlus(this);">
                <i class="fa fa-plus brown ml-2" aria-hidden="true"></i>
            </a>
        </td>
        <td class="border-brown">
            <span class="brown valorTotalItem">${compraProduto.preco}</span>
        </td>
        <td class="border-brown">
            <a onclick="deletaItemCarrinho(this.tr, event);">
                <i class="fa fa-trash-o fa-2 brown" aria-hidden="true" >
                </i>
            </a>
        </td>
    </tr>
    `

    return tr;
}

function deletaItemCarrinho(elemento, e) {

    e.preventDefault();
    let tr = $(elemento).parents('tr');
    alert(tr);
    $(tr).css("transiction", 'all .3s linear');
    $(tr).css("opacity", 0);
    setTimeout(() => {
        $(tr).remove();
        verificaCarrinho();
        carregarProdutoTable();
        calculaTotalCarrinho();
        $('#subTotalCarrinho').text(calculaSubTotalCarrinho());
        calculaTotalFrete();
    }, 300);
    verificaTable();
}

function verificaCarrinho() {
    if ($('#tableCarrinho tbody tr').length === 0) {
        $('#tableCarrinho').hide();
        $('#container-vazio').show();
        $('#resumoCompra').hide();
        //$('#tableDiv').hide();
    } else {
        $('#container-vazio').hide();
        $('#resumoCompra').show();
        $('#tableCarrinho').show();
        //$('#tableDiv').hide();
    }
}

function somarQtd(qtd) { 
    return qtd + Number(1);
}

function diminuirQtd(qtd) {
    if (qtd - Number(1) > 1) {
        return qtd - Number(1);
    }
    else {
        return Number(1);
    }
}

function verificaBtMinus(idProduto){
    let qtd = $('#' + idProduto + ' .qtd').text();

    if(qtd > 1){
        $('#' + idProduto + ' #btMinus').show();
    }
    else{
        $('#' + idProduto + ' #btMinus').hide();
    }
}

let compraProdutos = [];

function getProduto(){

    let compraProduto = new Object();
    compraProduto.id = new Object();
    compraProduto.id.produto = new Object();

    //verifyLocalStorage();

    compraProduto.id.produto.id = Number($('#idProduto').val());
    compraProduto.id.produto.nome = $('#nomeProduto').text();
    compraProduto.id.produto.img = $('#imgProduto').attr('src');
    compraProduto.id.produto.descricao = $('#descProduto').text();
    compraProduto.preco = Number($('#precoProduto').text())
    compraProduto.quantidade = Number(1);

    adicionarNovoProduto(compraProduto);

    console.log(compraProduto.id.produto.id);
    console.log(compraProduto.id.produto.nome);


    //let idProduto = $(botao).attr('id'); //$('#'+($(botao).attr('id'))).parent().attr('id');



/*
    if($('#' +idProduto).length > 0){
        alert('Produto já foi adicionado no carrinho');
    }
    else{

        let produto ={
            idProduto : idProduto,
            caminhoImagem : $(botao).parent().parent().children().first().children().first().children().first().children().attr('src'),
            nomeProduto: $('#'+($('#'+idProduto).parent().attr('id'))+ ' #nomeProd').first().text(),
            preco: $('#' + idProduto + ' #precoProd').first().text(),
            qtd: Number(1)
        }
        novoProduto(produto);
        carregarProdutoTable();
        alert('Item adicionado no carrinho');
    }*/
}

function criaLinhaProduto(compraProduto) {
    return $('<tr />')
        .attr('id', "${compraProduto.id.produto.id}")
        .append($('<td />').html("<span>" + compraProduto.id.produto.nome + "</span>"))
        .append($('<td />').html("<span>" + compraProduto.quantidade + "</span>"))
        .append($('<td />').html("<span>" + new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(compraProduto.valor) + "</span>"))
        .append($('<td />').html("<span>" + new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(compraProduto.valor * compraProduto.quantidade) + "</span>"))
        .append($('<td />').html("<a href='#'><i className='fa fa-trash ml-2' title='Remover produto' data-toggle='tooltip'></i></a>"));
}



function novoProduto(produto) {
    adicionarNovoProduto(produto);
}

function btMinus(botao){
    let idProduto = $(botao).parent().parent().attr('id');
    let qtd = $('#' + idProduto + ' .qtd').text();

    qtd = diminuirQtd(Number(qtd));
    $('#' + idProduto + ' .qtd').text(Number(qtd));
    verificaBtMinus(idProduto);
    calculaTotalProduto(idProduto);
    calculaTotalCarrinho();
    $('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    carregarProdutoTable();
    calculaTotalFrete();
}

function btPlus(botao){
    let idProduto = $(botao).parent().parent().attr('id');
    let qtd = $('#' + idProduto + ' .qtd').text();

    qtd = somarQtd(Number(qtd));
    $('#' + idProduto + ' .qtd').text(Number(qtd));
    carregarProdutoTable();
    verificaBtMinus(idProduto);
    calculaTotalProduto(idProduto);
    calculaTotalCarrinho();
    //seta subTotal do Carrinho no id #totalCarrinho
    $('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    calculaTotalFrete();
}

function calculaTotalProduto(idProduto){
    let valorProd = $('#' + idProduto + ' .precoProd').text();
    let qtd = $('#' + idProduto + ' .qtd').text();
    $('#' + idProduto + ' .valorTotalItem').text((Number(valorProd)*Number(qtd)).toFixed(2));
    carregarProdutoTable();
    calculaTotalFrete();
}

function calculaSubTotalCarrinho(){
    let subtotal = 0;
    $('#tableCarrinho tbody tr').each(function (index, tr) {
        let preco = Number(($('#' + ($(tr).attr('id')) + ' .valorTotalItem').text()));
        subtotal += preco;
    })
    //$('#totalCarrinho').text(subtotal);
    calculaTotalFrete();
    return Number(subtotal).toFixed(2);
}

function calculaTotalFrete(){
    if($('#subTotalCarrinho').text() > 0 && $('#subTotalCarrinho').text() <= 100){
        $('#pac').text('25.00');
        $('#sedex').text('32.00');
    }
    else if($('#subTotalCarrinho').text() > 100 && $('#subTotalCarrinho').text() < 300){
        $('#pac').text('30.00');
        $('#sedex').text('45.00');
    }
    else if($('#subTotalCarrinho').text() > 300 && $('#subTotalCarrinho').text() < 1000){
        $('#pac').text('55.00');
        $('#sedex').text('70.00');
    }
    else if($('#subTotalCarrinho').text() > 1000){
        $('#pac').text('Grátis');
        $('#sedex').text('130.00');
    }
}

function calculaTotalCarrinho(){
    let valorFrete = 0;
    if ($("#PAC").prop("checked")) {
        if($("#pac").text() === 'Grátis'){
            valorFrete = 0;
            console.log(valorFrete);
        }
        else{
            valorFrete = $("#pac").text();
        }
    }
    else if($("#SEDEX").prop("checked")) {
        valorFrete = $("#sedex").text();
        console.log(valorFrete);
    }
    calculaTotalFrete();
    $('#totalCarrinho').text((Number(calculaSubTotalCarrinho()) + (Number(valorFrete))).toFixed(2));
}
