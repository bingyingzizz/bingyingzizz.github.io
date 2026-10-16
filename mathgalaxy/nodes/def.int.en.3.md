# integers　`def.int`
English entry · root `../`
[in graph](../#n=def.int)　·　[Chinese page (authoritative)](./def.int.md)

(intuition: $(a, b)$ stands for $a - b$; this equivalence relation says precisely that the differences are equal). It really is an equivalence relation. Put

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim$$

Its elements are written $[a, b]$ (that is, $a - b$). The **operations and order** on $\mathbb{Z}$ (both must first be checked to be independent of the choice of representatives):

$$[a, b] + [c, d] := [a + c,\ b + d]$$

$$[a, b] \cdot [c, d] := [ac + bd,\ ad + bc]$$

$$[a, b] \le [c, d] :\iff a + d \le b + c$$

Here addition and order come from those of $\mathbb{N}$, and the formula for multiplication is copied from $(a - b)(c - d) = ac + bd - (ad + bc)$.

> 续见 nodes/def.int.en.4.md
