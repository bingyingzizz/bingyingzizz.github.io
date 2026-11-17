# Equivalent matrices　`def.equivalent-matrices`
English entry · root `../`
[in graph](../#n=def.equivalent-matrices)　·　[Chinese page (authoritative)](./def.equivalent-matrices.md)

## Notes · **draft**
⭐ **Equivalence remembers only the rank**: multiplying on the left changes the basis of the row space, multiplying on the right changes the basis of the column space, so rows and columns can be eliminated independently.

⭐ Normal form: use elementary row operations to reach reduced row echelon form, then use elementary column operations to turn the pivot columns into unit vectors and kill the other columns, obtaining $\operatorname{diag}(I_r,0)$. Each step is left or right multiplication by an elementary matrix; multiplying these elementary matrices together gives $P,Q$.

> continued in nodes/def.equivalent-matrices.en.4.md
