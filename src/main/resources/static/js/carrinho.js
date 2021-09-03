let pedidoItens = [];

$(function () {
    pegarItensLocalStorage();
    pedidoItens.forEach(pedidoItem => adicionarNovoProduto(pedidoItem));

    /*$('#tableDiv').hide();
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
    }*/
    //$('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    calculaTotalFrete();
    calculaTotalCarrinho();

    verificaCarrinho();
})

function adicionaProduto() {
    let jaExiste = 0;
    let pedidoItem = new Object();
    pedidoItem.id = new Object();
    pedidoItem.id.produto = new Object();

    pedidoItem.id.produto.id = Number($('#idProduto').text());
    pedidoItem.id.produto.nome = $('#nomeProduto').text();
    pedidoItem.id.produto.img = $('#imgProduto').attr('src');
    pedidoItem.id.produto.descricao = $('#descProduto').text();
    pedidoItem.preco = Number($('#precoProduto').text())
    pedidoItem.quantidade = Number(1);

    pedidoItens.forEach((produto) => {
        if (produto.id.produto.id === pedidoItem.id.produto.id) jaExiste = 1;
    });

    if (jaExiste === 0) {
        pedidoItens.push(pedidoItem);
        adicionarArrayStorage(pedidoItens);
        adicionarNovoProduto(pedidoItem);
        alert('Item adicionado no carrinho!');
    } else {
        alert('Item já existe no carrinho!')
    }
}

function pegarItensLocalStorage() {
    if (localStorage.getItem('listaItens') != null) {
        pedidoItens = JSON.parse(localStorage.getItem('listaItens'));
    }
}

function adicionarArrayStorage(array) {
    localStorage.setItem('listaItens', JSON.stringify(array));
}

function adicionarNovoProduto(pedidoItem) {
    $('#tableCarrinho tbody').append(adicionaItemCarrinho(pedidoItem));
}

function adicionaItemCarrinho(compraProduto) {

    let tr = `
    <tr id="${compraProduto.id.produto.id}" class="${compraProduto.id.produto.id}">
        <td class="border-brown p-1">
            <img class="w-100 ml-3 img" src="${compraProduto.id.produto.img}" alt="">
        </td>
        <td class="border-brown p-1">
            <div class="row">
                <!--<img class="w-25 ml-3 img" src="${compraProduto.id.produto.img}" alt="">-->
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
            <a href="#" onclick="deletaItemCarrinho(this, event);">
                <i class="fa fa-trash-o fa-2 brown" aria-hidden="true" >
                </i>
            </a>
        </td>
    </tr>
    `
    return tr;
}

function btPlus(botao) {
    let idProduto = $(botao).parent().parent().attr('id');
    let qtd = $('#' + idProduto + ' .qtd').text();

    qtd = somarQtd(Number(qtd));
    $('#' + idProduto + ' .qtd').text(Number(qtd));
    //carregarProdutoTable();
    verificaBtMinus(idProduto);
    // calculaTotalProduto(idProduto);
    // calculaTotalCarrinho();
    //seta subTotal do Carrinho no id #totalCarrinho
    //$('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    //calculaTotalFrete();
}

function somarQtd(qtd) {
    return qtd + Number(1);
}

function diminuirQtd(qtd) {
    if (qtd - Number(1) > 1) {
        return qtd - Number(1);
    } else {
        return Number(1);
    }
}

function verificaBtMinus(idProduto) {
    let qtd = $('#' + idProduto + ' .qtd').text();

    if (qtd > 1) {
        $('#' + idProduto + ' #btMinus').show();
    } else {
        $('#' + idProduto + ' #btMinus').hide();
    }
}

function btMinus(botao) {
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

function verificaCarrinho() {
    if ($('#tableCarrinho tbody tr').length === 0) {
        $('#tableCarrinho').hide();
        $('#container-vazio').show();
        $('#resumoCompra').hide();
    } else {
        $('#container-vazio').hide();
        $('#resumoCompra').show();
        $('#tableCarrinho').show();
    }
}

function calculaTotalFrete() {
    if ($('#subTotalCarrinho').text() > 0 && $('#subTotalCarrinho').text() <= 100) {
        $('#pac').text('25.00');
        $('#sedex').text('32.00');
    } else if ($('#subTotalCarrinho').text() > 100 && $('#subTotalCarrinho').text() < 300) {
        $('#pac').text('30.00');
        $('#sedex').text('45.00');
    } else if ($('#subTotalCarrinho').text() > 300 && $('#subTotalCarrinho').text() < 1000) {
        $('#pac').text('55.00');
        $('#sedex').text('70.00');
    } else if ($('#subTotalCarrinho').text() > 1000) {
        $('#pac').text('Grátis');
        $('#sedex').text('130.00');
    }
}

function calculaTotalCarrinho() {
    let valorFrete = 0;
    if ($("#PAC").prop("checked")) {
        if ($("#pac").text() === 'Grátis') {
            valorFrete = 0;
            console.log(valorFrete);
        } else {
            valorFrete = $("#pac").text();
        }
    } else if ($("#SEDEX").prop("checked")) {
        valorFrete = $("#sedex").text();
        console.log(valorFrete);
    }
    calculaTotalFrete();
    $('#totalCarrinho').text((Number(calculaSubTotalCarrinho()) + (Number(valorFrete))).toFixed(2));
}

function calculaSubTotalCarrinho() {
    let subtotal = 0;
    $('#tableCarrinho tbody tr').each(function (index, tr) {
        let preco = Number(($('#' + ($(tr).attr('id')) + ' .valorTotalItem').text()));
        subtotal += preco;
    })
    calculaTotalFrete();
    return Number(subtotal).toFixed(2);
}

function deletaItemCarrinho(elemento, e) {
    e.preventDefault();
    let tr = $(elemento).parents('tr');
    alert(elemento);
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

function deletaItemCarrinho(elemento, e) {

    e.preventDefault();
    let tr = $(elemento).parents('tr');
    //alert(tr);
    //alert(elemento).text();
    //alert($('#2').parents('tr'));
    $(tr).css("transiction", 'all .3s linear');
    $(tr).css("opacity", 0);
    setTimeout(() => {
        $(tr).remove();
        carregarProdutoTable();
        verificaCarrinho();
        //carregarProdutoTable();
        //calculaTotalCarrinho();
        //$('#subTotalCarrinho').text(calculaSubTotalCarrinho());
        //calculaTotalFrete();
    }, 300);
    //verificaTable();
}

function carregarProdutoTable() {

    $('#tableCarrinho tbody tr').each(function () {

        let pedidoItem = new Object();
        pedidoItem.id = new Object();
        pedidoItem.id.produto = new Object();

        pedidoItem.id.produto.id = $(this).attr('id');
        pedidoItem.id.produto.nome = $('#' + ($(this).attr('id')) + ' .nomeProduto').text();
        pedidoItem.id.produto.img = $('#' + ($(this).attr('id')) + ' .img').attr('src');
        pedidoItem.id.produto.descricao = $('#descProduto').text();
        pedidoItem.preco = Number($('#precoProduto').text());
        pedidoItem.quantidade = $('#' + ($(this).attr('id')) + ' .qtd').text()

        pedidoItens.push(pedidoItem);

        adicionarNovoProduto(pedidoItem);
    })
    //$('#subTotalCarrinho').text(calculaSubTotalCarrinho());
    //calculaTotalCarrinho();

    adicionarArrayStorage(pedidoItens);
}