# covering lemma　`lem.covering`
English entry · root `../`
[in graph](../#n=lem.covering)　·　[Chinese page (authoritative)](./lem.covering.md)

How the proof chooses: first take a ball $B_1$ of **maximal radius**; then take a ball $B_2$ of maximal radius disjoint from $B_1$; and so on.

Why this choice suffices: if some $A_i \in \mathcal{E}$ is not chosen, then some $B_j$ meets it — take the one $B_j$ with **smallest index**.

By the selection rule, the radius of $A_i$ does not exceed that of $B_j$ (otherwise $A_i$ would have been chosen when $B_j$ was).

Enlarging the radius of $B_j$ by a factor of 3 gives $A_i \subseteq 3B_j$, hence $K \subseteq \bigcup_j 3B_j$.

What remains is counting:

$$c < m(K) \le 3^n \sum_j m(B_j)\quad  \implies\quad  \sum_j m(B_j) > 3^{-n} c$$

> continued in nodes/lem.covering.en.3.md
