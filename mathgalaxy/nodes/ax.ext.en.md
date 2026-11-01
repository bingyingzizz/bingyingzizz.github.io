# extensionality　`ax.ext`
English entry · root `../`
[in graph](../#n=ax.ext)　·　[Chinese page (authoritative)](./ax.ext.md)

> English: **reviewed** · reviewed by the author; the Chinese page is authoritative.

layer 0 · axiom · cluster The ZFC Axioms (`set.zfc`) · Set Theory

## Statement · **reviewed**
A set is determined uniquely by its elements:

$$\forall A \forall B [ \forall x ( x \in A \leftrightarrow  x \in B ) \to A = B ]$$

The converse direction ($A = B \to$ the elements are exactly the same) holds automatically in first-order logic with equality, which is why the axiom is often written with $\leftrightarrow$. It guarantees that describing a set by a condition determines it uniquely, so a notation such as $\{ x \in A : \varphi (x) \}$ is never ambiguous.

> 续见 nodes/ax.ext.en.2.md
