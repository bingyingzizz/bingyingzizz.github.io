# Gauss lemma on quadratic residues　`lem.gauss-qr`
English entry · root `../`
[in graph](../#n=lem.gauss-qr)　·　[Chinese page (authoritative)](./lem.gauss-qr.md)

## Notes · **draft**
**Role**: it reduces the Legendre symbol to "counting how many exceed $p/2$", so that values such as $\left(\frac{2}{p}\right)$ and $\left(\frac{-1}{p}\right)$ can be computed without exponentiation.

**Idea of the proof**: let $r_{1}, \cdots, r_{n}$ denote these least positive residues ($n = \frac{p-1}{2}$). Replacing those greater than $p/2$ by $p - r_{i}$, the resulting $n$ numbers are exactly a permutation of $1, \cdots, n$. Hence

$$a^{n} \cdot n! \equiv \pm n! \pmod p ,$$

> continued in nodes/lem.gauss-qr.en.3.md
