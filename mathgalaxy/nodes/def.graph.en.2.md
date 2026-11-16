# graph　`def.graph`
English entry · root `../`
[in graph](../#n=def.graph)　·　[Chinese page (authoritative)](./def.graph.md)

## Notes · **draft**
"Graph" here means a directed multigraph: $s(e) \ne t(e)$ is not required (loops are allowed), and two edges are not required to have different endpoints (parallel edges are allowed). So it is broader than the everyday picture of a graph — it is just the data of which edge goes from where to where.

A quadruple is a **nested ordered pair**, so the encoding is not immaterial. $(x, y) := \{ \{x\}, \{x,y\} \}$ satisfies the ordered-pair axiom

$$(a, b) = (c, d) \iff a = c \wedge b = d$$

whereas with $\{ x, \{x,y\} \}$ one must verify that axiom case by case, not take it for granted.

> continued in nodes/def.graph.en.3.md
