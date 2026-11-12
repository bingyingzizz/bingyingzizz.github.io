# fundamental theorem of arithmetic　`thm.fundamental-arithmetic`
English entry · root `../`
[in graph](../#n=thm.fundamental-arithmetic)　·　[Chinese page (authoritative)](./thm.fundamental-arithmetic.md)

## Notes · **draft**
Existence: induct on $n$ — if $n$ is prime, done; otherwise $n = ab$ with $1 < a, b < n$, apply the induction hypothesis to $a, b$ and multiply.

Uniqueness: use Euclid's lemma ($p \mid ab \implies p \mid a$ or $p \mid b$). This is the standard argument for a unique factorization domain (UFD).

The abstract algebraic version is "$\mathbb{Z}$ is a UFD": $K[x]$ also is (`thm.poly-ufd`), while $\mathbb{Z}[\sqrt{-5}]$ is not ($6 = 2\cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$).

Hierarchy: Euclidean domain $\implies$ UFD $\implies$ gcd domain.

> continued in nodes/thm.fundamental-arithmetic.en.3.md
