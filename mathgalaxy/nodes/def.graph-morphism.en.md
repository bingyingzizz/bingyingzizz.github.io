# graph morphism　`def.graph-morphism`
English entry · root `../`
[in graph](../#n=def.graph-morphism)　·　[Chinese page (authoritative)](./def.graph-morphism.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 9 · definition · cluster Categories and Diagrams (`cat.basic`) · Category Theory

## Statement · **draft**
A **morphism** from a graph $(V, E, s, t)$ to a graph $(V', E', s', t')$ is a pair of functions

$$\varphi_1 : V \to V', \qquad \varphi_2 : E \to E'$$

such that both squares commute:

$$s' \circ \varphi_2 = \varphi_1 \circ s, \qquad t' \circ \varphi_2 = \varphi_1 \circ t$$

That is, $\varphi_1$ sends the source of an edge to the source of the image of that edge, and the target to the target.

> continued in nodes/def.graph-morphism.en.2.md
