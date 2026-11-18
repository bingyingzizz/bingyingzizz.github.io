# Least Squares　`thm.least-squares`
English entry · root `../`
[in graph](../#n=thm.least-squares)　·　[Chinese page (authoritative)](./thm.least-squares.md)

⚠️ **Avoid explicitly inverting $A^{T}A$** (the formula is mathematically valid, but the condition number is squared). In practice, use QR or SVD: $x = R^{-1}Q^{T}b$ (see the notes to `thm.qr-decomposition`). Only the mathematical result is given here.

⚠️ **Without full column rank**, the least-squares solution **is not unique** (infinitely many solutions give the same residual). The **pseudoinverse** selects the one of minimum norm (`def.pseudoinverse`).

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `thm.least-squares` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

