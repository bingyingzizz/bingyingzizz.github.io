# binomial theorem　`thm.binomial`
English entry · root `../`
[in graph](../#n=thm.binomial)　·　[Chinese page (authoritative)](./thm.binomial.md)

> English: **draft** · machine-drafted, pending author review; the Chinese page is authoritative.

layer 9 · theorem · cluster Arithmetic and Inequalities on the Reals (`analysis.real-calc`) · Mathematical Analysis

## Statement · **draft**
Let $A$ be a commutative ring, $a, b \in A$, $n \in \mathbb{N}$. Then

$$(a + b)^{n} = \sum_{k=0}^{n} \binom{n}{k} a^{k}\, b^{n-k}, \qquad \binom{n}{k} := \frac{n!}{k!\,(n-k)!}.$$

The coefficients satisfy the **Pascal recurrence**

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k},$$

and are therefore natural numbers ($\binom{n}{k}$ is the number of ways to "choose $k$ from $n$").

> continued in nodes/thm.binomial.en.2.md
