# connected sum　`def.connected-sum`
English entry · root `../`
[in graph](../#n=def.connected-sum)　·　[Chinese page (authoritative)](./def.connected-sum.md)

Both boundaries are $S^{n-1}$. Choose any homeomorphism $h : \partial M^{\circ} \to \partial N^{\circ}$ and glue the manifolds along their boundaries:

$$M \# N := M^{\circ} \sqcup N^{\circ} \big/ \bigl( x \sim h(x) \bigr).$$

The resulting topological space is the **connected sum** of $M$ and $N$.

## Notes · **draft**
⭐ **Gluing is taking a quotient**. After $\sqcup$, take the quotient topology according to $x \sim h(x)$ (as in `def.quotient-set`, where a set is open if its preimage is open). The connected sum thus combines disjoint union and quotient.

> continued in nodes/def.connected-sum.en.3.md
