# nearest point in a closed convex set　`thm.projection-convex`
English entry · root `../`
[in graph](../#n=thm.projection-convex)　·　[Chinese page (authoritative)](./thm.projection-convex.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 26 · theorem · cluster Hilbert Spaces (`fa.hilbert`) · Functional Analysis

## Statement · **draft**
Let $H$ be a Hilbert space and $C \subseteq H$ nonempty, **convex**, and **closed**. Then

1. every $x \in H$ has a **unique** $y = P_C(x) \in C$ with $\|x - y\| = d(x, C)$;
2. $y = P_C(x) \iff \operatorname{Re}\langle x - y, z - y\rangle \le 0$ for all $z \in C$;
3. $\|P_C(x) - P_C(x')\| \le \|x - x'\|$ (nonexpansive);
4. $P_C \circ P_C = P_C$.

> continued in nodes/thm.projection-convex.en.2.md
