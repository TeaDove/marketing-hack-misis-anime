from dataclasses import dataclass
from schemas.prediction import Prediciton, RelationPrediction
from dicee import KGE


@dataclass
class PredicitonService:
    def __post_init__(self) -> None:
        self.model = KGE(path="./data/final_model")

    def predict_relations(self, head_inn: str, tail_inn: str) -> Prediciton:
        scores, relations = self.model.predict_topk(
            head_entity=[head_inn],
            tail_entity=[tail_inn],
            topk=12,
        )
        predictions = []
        for score, relation in zip(scores, relations):
            predictions.append(RelationPrediction(value=score, class_=relation))
        return Prediciton(predictions=predictions)
