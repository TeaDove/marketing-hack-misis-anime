from dataclasses import dataclass
from schemas.prediction import (
    LinkPrediciton,
    LinkPredictionValue,
    RelationPrediciton,
    RelationPredictionValue,
    Relations,
)
from typing import List
from dicee import KGE


@dataclass
class PredicitonService:
    def __post_init__(self) -> None:
        self.model = KGE(path="./data/final_model")

    def predict_link(self, head_inn: str, tail_inn: str) -> LinkPrediciton:
        scores, relations = self.model.predict_topk(
            head_entity=[head_inn],
            tail_entity=[tail_inn],
            topk=12,
        )
        predictions = []
        for score, relation in zip(scores, relations):
            predictions.append(LinkPredictionValue(value=score, class_=relation))
        return LinkPrediciton(predictions=predictions)

    def predict_relations(self, node: str, relation: Relations) -> RelationPrediciton:
        scores, nodes = self.model.predict_topk(
            head_entity=[node], relation=[relation], topk=12
        )
        predictions = []
        for score, node in zip(scores, nodes):
            predictions.append(RelationPredictionValue(value=score, node=node))
        return RelationPrediciton(predictions=predictions)
