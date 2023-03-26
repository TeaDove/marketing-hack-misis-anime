from dicee import KGE

# Load model
model = KGE(path="./data/final_model")

# Inference
score, relations = model.predict_topk(
    relation=["distributes_from_to"],
    head_entity=["97D9CA38928AE6B9A0EA52F3CABC99E4"],
    # tail_entity=["1BAC9B05B40E762DB243D16567D3AB41"],
    topk=10,
)

score, relations = model.predict_topk(
    head_entity=["97D9CA38928AE6B9A0EA52F3CABC99E4"],
    tail_entity=["1BAC9B05B40E762DB243D16567D3AB41"],
    topk=10,
)
print(score, relations)
