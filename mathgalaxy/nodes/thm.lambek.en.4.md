# Lambek's Criterion　`thm.lambek`
English entry · root `../`
[in graph](../#n=thm.lambek)　·　[Chinese page (authoritative)](./thm.lambek.md)

**Step 2 (reduce to submodules of free modules)**: Take a surjection $R^{n} \twoheadrightarrow M_{1}$ (where $M_{1}$ is a finitely generated submodule of $M$). Let $K$ be the preimage of $M_{1}$, giving the short exact sequence $0 \to K \to R^{n} \to M_{1} \to 0$.

Tensor both sequences and compare them. Since $K \otimes M \to R^{n} \otimes M \to M_{1} \otimes M \to 0$ is exact, $K \otimes M \to R^{n} \otimes M$ is injective if and only if $R^{n} \otimes M \to M_{1} \otimes M$ is injective, by the snake lemma.

Thus it suffices to show that for every **finitely generated** submodule $K \subseteq R^{n}$, the map $K \otimes M \to R^{n} \otimes M$ is injective.

> continued in nodes/thm.lambek.en.5.md
