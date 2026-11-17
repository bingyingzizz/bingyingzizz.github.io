# Cramer's rule　`thm.cramer`
English entry · root `../`
[in graph](../#n=thm.cramer)　·　[Chinese page (authoritative)](./thm.cramer.md)

## Notes · **draft**
⭐ Its theoretical meaning exceeds its computational meaning: it gives an **explicit** expression for the solution in terms of $b$, so one immediately sees that "the solution depends continuously on $b$" (when $\det A \ne 0$, $A^{-1}$ exists, $x = A^{-1}b$).

⚠ Computationally it is a bad deal: computing $n$ determinants of order $n$ is far more expensive than elimination (unless $n$ is very small).

Modern numerical linear algebra never solves systems this way.

⭐ It is the algorithmic embodiment of "$\det A \ne 0 \iff$ is invertible": nonzero denominator $\iff$ unique solution $\iff$ invertible.

> continued in nodes/thm.cramer.en.3.md
