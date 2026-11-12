# fundamental theorem of algebra　`thm.fundamental-algebra`
English entry · root `../`
[in graph](../#n=thm.fundamental-algebra)　·　[Chinese page (authoritative)](./thm.fundamental-algebra.md)

⭐ Proof (the route taken on the graph):
1. $|p(z)| \to +\infty$ as $|z| \to \infty$, so on some closed disk the **extreme value theorem** gives a minimum $m \ge 0$;
2. if $m > 0$, perturb near the minimizing point $z_0$ by $z_0 + h$, expand $p(z_0 + h) = p(z_0) + a_k h^{k} + \cdots$ ($a_k h^{k}$ being the first nonzero term), and choose the direction of $h$ so that $|p(z_0) + a_k h^{k}| < |p(z_0)|$, contradicting minimality.
3. Hence $m = 0$, i.e. $p$ has a root;
then divide once by the factor theorem and induct to get the full factorization.

> continued in nodes/thm.fundamental-algebra.en.4.md
