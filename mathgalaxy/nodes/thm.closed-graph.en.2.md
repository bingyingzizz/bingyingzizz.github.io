# closed graph theorem　`thm.closed-graph`
English entry · root `../`
[in graph](../#n=thm.closed-graph)　·　[Chinese page (authoritative)](./thm.closed-graph.md)

## Notes · **draft**
**Proof.** $E \times F$ is complete (a product of two complete spaces is complete), and $G(u)$ is a closed subset of it, so $G(u)$ is itself a Banach space. The two projections

$$\pi_1 : G(u) \to E,\ (x, u(x)) \mapsto x ; \qquad \pi_2 : G(u) \to F,\ (x, u(x)) \mapsto u(x)$$

are bounded linear maps ($\|\pi_1\| \le 1$, $\|\pi_2\| \le 1$), and $\pi_1$ is a bijection (the graph of a linear map corresponds one-to-one with its domain). Apply the inverse mapping theorem to $\pi_1$: $\pi_1^{-1} : E \to G(u)$ is bounded. Hence

$$u = \pi_2 \circ \pi_1^{-1}$$

> continued in nodes/thm.closed-graph.en.3.md
