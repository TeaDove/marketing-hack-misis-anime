from shared.containers import init_combat_container

container = init_combat_container()


class TestClass:
    def test_process_record(self):
        ...

    def test_get_salepoint_by_product(self):
        salepoints = container.product_service.get_salepoint_by_product(
            inn="DA62EC79660CF21AC37A260DA6F642C4",
            gtin="289AEBCA82877CB19E7AA33E0E522883",
        )
        print(salepoints)
