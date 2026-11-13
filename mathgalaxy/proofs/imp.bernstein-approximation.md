# 紧区间上一致连续 $\implies$ Bernstein 多项式一致逼近
`imp.bernstein-approximation` · 推出 · strong 边 · 根 `../`

`thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续 → `thm.bernstein-approximation` Bernstein 多项式逼近

取 $f\in C[0,1]$、$\varepsilon>0$。由 `thm.uniform-continuity-compact`（$[0,1]$ 紧），$f$ 一致连续：存在 $\delta>0$ 使 $|x-y|<\delta$ 时 $|f(x)-f(y)|<\varepsilon$。

固定 $x\in[0,1]$，令 $S_n\sim\mathrm{Bin}(n,x)$，则 $B_nf(x)=\mathbb E[f(S_n/n)]$。二项矩恒等式（对 $\sum_k\binom nk x^k(1-x)^{n-k}=1$ 求导两次即得）给出
$$\mathbb E\Bigl[\frac{S_n}{n}\Bigr]=x,\qquad \mathbb E\Bigl[\Bigl(\frac{S_n}{n}-x\Bigr)^{2}\Bigr]=\frac{x(1-x)}{n}\le\frac{1}{4n}.$$

> 续见 proofs/imp.bernstein-approximation.2.md
