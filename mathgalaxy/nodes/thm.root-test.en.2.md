# root test　`thm.root-test`
English entry · root `../`
[in graph](../#n=thm.root-test)　·　[Chinese page (authoritative)](./thm.root-test.md)

⭐ Relation to the ratio test: **the root test is stronger**.

If $\lim a_{n+1}/a_n$ exists, then $\lim \sqrt[n]{a_n}$ also exists and the two are equal;

the converse fails (examples such as $a_n = 2^{-n}$ and $a_n = 2^{-n - (-1)^n}$).

So "what the ratio test cannot decide, the root test may".

⚠ What is used is the **$\limsup$**, not $\lim$: the sequence $\sqrt[n]{a_n}$ need not converge, but $\limsup$ is always defined.

⚠ When $\alpha = 1$ it fails completely: both $\sum 1/n$ diverging and $\sum 1/n^{2}$ converging have $\alpha = 1$.

> Proofs of the edges are still Chinese only: `proofs/`; the Chinese page remains authoritative.


Cite: `thm.root-test` (content v0.9.3) · CC BY 4.0: [LICENSE.txt](../LICENSE.txt)

