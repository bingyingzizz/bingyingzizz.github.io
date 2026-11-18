# Moore-Penrose Pseudoinverse　`def.pseudoinverse`
English entry · root `../`
[in graph](../#n=def.pseudoinverse)　·　[Chinese page (authoritative)](./def.pseudoinverse.md)

Let $A \in M_{m\times n}(\mathbb{K})$, where $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$ ($^{*}$ is the transpose or conjugate transpose). The **Moore–Penrose pseudoinverse** $A^{+} \in M_{n\times m}(\mathbb{K})$ is the unique matrix satisfying the following four conditions. (⚠ Over a general field, the conditions **may have no solution**: $K = \mathbb{F}_{2}$ and $A = (1\, 1)$ reduce them to $1 = 0$.)

$$A A^{+} A = A, \qquad A^{+} A A^{+} = A^{+} ,$$

$$(AA^{+})^{*} = AA^{+}, \qquad (A^{+}A)^{*} = A^{+}A .$$

**Construction via SVD**: If $A = U\Sigma V^{*}$ (`thm.svd`), then

$$A^{+} = V\Sigma^{+}U^{*} ,$$

> continued in nodes/def.pseudoinverse.en.3.md
