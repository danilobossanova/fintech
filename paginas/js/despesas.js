$(document).ready(function() {
    // Máscara para o campo de valor
    $('#inputValor').inputmask();

    // Inicializando DataTable
    //let table = new DataTable('#tableDespesas');
    $('#tableDespesas').DataTable({
        language: {
          lengthMenu: 'Mostrar _MENU_ registros por página',  
          emptyTable: "Nenhum registro encontrado",
          info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
          infoEmpty: "Mostrando 0 até 0 de 0 registros",
          infoFiltered: "(Filtrados de _MAX_ registros)",
          infoThousands: ".",
          loadingRecords: "Carregando...",
          processing: "Processando...",
          zeroRecords: "Nenhum registro encontrado",
          search: "Pesquisar",
          thousands: ".",
          paginate: {
            next: "Próximo",
            previous: "Anterior",
            first: "Primeiro",
            last: "Último"
          },
          select: {
                  rows: {
                  1: "Selecionado 1 linha",
                  _: "Selecionado %d linhas"
                  },
                  cells: {
                  1: "1 célula selecionada",
                  _: "%d células selecionadas"
                  },
                  columns: {
                  1: "1 coluna selecionada",
                  _: "%d colunas selecionadas"
                  }
            },
        buttons: {
            copySuccess: {
            1: "Uma linha copiada com sucesso",
            _: "%d linhas copiadas com sucesso"
            },
            collection: "Coleção  <span class='ui-button-icon-primary ui-icon ui-icon-triangle-1-s'></span>",
            colvis: "Visibilidade da Coluna",
            colvisRestore: "Restaurar Visibilidade",
            copy: "Copiar",
            copyKeys: "Pressione ctrl ou u2318 + C para copiar os dados da tabela para a área de transferência do sistema. Para cancelar, clique nesta mensagem ou pressione Esc..",
            copyTitle: "Copiar para a Área de Transferência",
            csv: "CSV",
            excel: "Excel",
            pageLength: {
            1: "Mostrar todos os registros",
            _: "Mostrar %d registros"
            },
            pdf: "PDF",
            print: "Imprimir",
            createState: "Criar estado",
            removeAllStates: "Remover todos os estados",
            removeState: "Remover",
            renameState: "Renomear",
            savedStates: "Estados salvos",
            stateRestore: "Estado %d",
            updateState: "Atualizar"
            },
        },
        
    });
    
});