# Euler characteristic and nonorientable genus　`prop.eulerchar-nonorientable`
English entry · root `../`
[in graph](../#n=prop.eulerchar-nonorientable)　·　[Chinese page (authoritative)](./prop.eulerchar-nonorientable.md)

**3. Induction.** Write $S_{k}$ for the connected sum of $k$ copies of $\mathbb{RP}^{2}$. Then $\chi(S_{1})=1$, and by step 2, $\chi(S_{k})=\chi(S_{k-1})+\chi(\mathbb{RP}^{2})-2=\chi(S_{k-1})-1$. Thus $\chi(S_{k})=1-(k-1)=2-k$. ∎

**4. Independence of the triangulation.** By `thm.euler-characteristic`, for every finite simplicial complex, $\chi=\sum_{p}(-1)^{p}\beta_{p}$. The right-hand side depends only on homology, so the count computed from the particular triangulation above is $\chi(S)$ and is independent of the choice of triangulation.

> continued in nodes/prop.eulerchar-nonorientable.en.6.md
