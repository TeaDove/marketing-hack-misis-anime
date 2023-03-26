from shared.containers import init_combat_container
from schemas.prediction import Relations

container = init_combat_container()

head_inn = "97D9CA38928AE6B9A0EA52F3CABC99E4"
tail_inn = "1BAC9B05B40E762DB243D16567D3AB41"


class TestClass:
    def test_process_record(self):
        ...

    def test_get_salepoint_by_product(self):
        salepoints = container.product_service.get_salepoint_by_product(
            inn="DA62EC79660CF21AC37A260DA6F642C4",
            gtin="289AEBCA82877CB19E7AA33E0E522883",
            page=1,
            size=300,
        )
        print(salepoints)

    def test_predict_links(self):
        result = container.prediction_service.predict_link(
            head_inn=head_inn, tail_inn=tail_inn
        )
        print(result)

    def test_predict_relations(self):
        result = container.prediction_service.predict_relations(
            node=head_inn, relations=[Relations.distributed_to]
        )
        print(result)
