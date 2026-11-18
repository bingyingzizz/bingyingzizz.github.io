# law of quadratic reciprocity　`thm.quadratic-reciprocity`
English entry · root `../`
[in graph](../#n=thm.quadratic-reciprocity)　·　[Chinese page (authoritative)](./thm.quadratic-reciprocity.md)

Replacing $\{qx\}_{x \le P}$ by the least positive residues and then taking signs gives

$$\prod_{x=1}^{P} qx \equiv \prod_{x=1}^{P} (\varepsilon_{x} s_{x}) = \Bigl( \prod_{x} \varepsilon_{x} \Bigr) \Bigl( \prod_{x} s_{x} \Bigr) \equiv \Bigl( \prod_{x} \varepsilon_{x} \Bigr) P! \pmod p .$$

The left-hand side is $= q^{P} P!$. Canceling $P!$ ($p \nmid P!$) gives $q^{P} \equiv \prod_{x} \varepsilon_{x} = (-1)^{\mu}$, where $\mu = \#\{x : r_{x} > p/2\}$. By **`lem.gauss-qr`** (Gauss's lemma), $\left(\frac{q}{p}\right) = (-1)^{\mu}$, so

> continued in nodes/thm.quadratic-reciprocity.en.9.md
